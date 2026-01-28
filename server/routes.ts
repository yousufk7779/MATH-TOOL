import type { Express, Request, Response } from "express";
import { createServer, type Server } from "node:http";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

interface SolutionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  formula?: string;
}

interface HistoryItem {
  id: string;
  problem: string;
  category: string;
  answer: string;
  steps: SolutionStep[];
  createdAt: string;
}

const historyStore: HistoryItem[] = [];

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/solve", async (req: Request, res: Response) => {
    try {
      const { problemText, imageBase64 } = req.body;

      if (!problemText && !imageBase64) {
        return res.status(400).json({ error: "Problem text or image is required" });
      }

      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        {
          role: "system",
          content: `You are JIGUU, an expert math tutor. Your job is to solve math problems step-by-step in a clear, educational way.

When given a math problem, respond with a JSON object containing:
- "problem": The problem statement (cleaned up if from an image)
- "category": The type of math (e.g., "Algebra", "Calculus", "Geometry", "Arithmetic", "Statistics", etc.)
- "answer": The final answer
- "steps": An array of step objects, each containing:
  - "stepNumber": The step number (1, 2, 3, etc.)
  - "title": A short title for the step
  - "explanation": A detailed explanation of what we're doing and why
  - "formula": (optional) The mathematical expression or equation for this step

Be encouraging and explain concepts clearly. Use proper mathematical notation where appropriate.

Respond ONLY with valid JSON, no other text.`,
        },
      ];

      if (imageBase64) {
        messages.push({
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
              },
            },
            {
              type: "text",
              text: "Please solve this math problem step by step.",
            },
          ],
        });
      } else {
        messages.push({
          role: "user",
          content: `Please solve this math problem step by step: ${problemText}`,
        });
      }

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages,
        max_completion_tokens: 2048,
        response_format: { type: "json_object" },
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No response from AI");
      }

      const solution = JSON.parse(content);
      res.json(solution);
    } catch (error) {
      console.error("Error solving problem:", error);
      res.status(500).json({ error: "Failed to solve the problem" });
    }
  });

  app.get("/api/history", async (req: Request, res: Response) => {
    try {
      const sortedHistory = [...historyStore].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      res.json(sortedHistory);
    } catch (error) {
      console.error("Error fetching history:", error);
      res.status(500).json({ error: "Failed to fetch history" });
    }
  });

  app.post("/api/history", async (req: Request, res: Response) => {
    try {
      const { problem, category, answer, steps } = req.body;

      if (!problem || !category || !answer || !steps) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const historyItem: HistoryItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        problem,
        category,
        answer,
        steps,
        createdAt: new Date().toISOString(),
      };

      historyStore.push(historyItem);
      res.status(201).json(historyItem);
    } catch (error) {
      console.error("Error saving to history:", error);
      res.status(500).json({ error: "Failed to save to history" });
    }
  });

  app.delete("/api/history/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const index = historyStore.findIndex((item) => item.id === id);
      
      if (index === -1) {
        return res.status(404).json({ error: "History item not found" });
      }

      historyStore.splice(index, 1);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting history item:", error);
      res.status(500).json({ error: "Failed to delete history item" });
    }
  });

  app.delete("/api/history", async (req: Request, res: Response) => {
    try {
      historyStore.length = 0;
      res.status(204).send();
    } catch (error) {
      console.error("Error clearing history:", error);
      res.status(500).json({ error: "Failed to clear history" });
    }
  });

  app.get("/api/stats", async (req: Request, res: Response) => {
    try {
      res.json({
        problemsSolved: historyStore.length,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

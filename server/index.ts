import express from "express";
import { createServer } from "http";
import path from "path";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), "server/templates")));

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_, res) => {
  res.sendFile(path.join(process.cwd(), "server/templates/landing-page.html"));
});

const PORT = parseInt(process.env.PORT || "5000", 10);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

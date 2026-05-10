import { ChapterContent } from "../types";

const themeColor = "#7986CB"; // Chapter 2 theme (Indigo)

export const c7Civ2: ChapterContent = {
    id: "c7-civ-2",
    number: 2,
    title: "Role of the Government in Health",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>In a democracy, people expect the government to work for their welfare. This can be through the provision of education, health, employment, housing or the development of roads, electricity etc. In this chapter we shall examine the meanings and problems related to health.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">What is Health?</h3>
            <p>Health means our ability to remain free of illness and injuries. But health isn’t only about disease. We need to look at other factors like clean drinking water, pollution-free environment, and adequate food to lead a healthy life.</p>
 
            <h3 style="color: ${themeColor}; text-align: left;">Public and Private Healthcare</h3>
            <p>Healthcare services in India are divided into two categories:</p>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Public Health Services:</b> A chain of health centres and hospitals run by the government. They provide services either free or at a low cost.</li>
                <li><b style="color: ${themeColor};">Private Health Facilities:</b> Not owned or controlled by the government. People have to pay a lot of money for these services.</li>
            </ul>
 
            <h3 style="color: ${themeColor}; text-align: left;">Cost of a Cure</h3>
            <p>Private services are often expensive and mostly concentrated in urban areas. This creates a situation where many people cannot afford proper treatment.</p>
        </div>
    `,
    htmlExercises: {
        "c7c2-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. Explain the terms ‘living standard’ and ‘public health’ in your own words.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <br><b>Living Standard:</b> The level of comfort and wealth a person has.
                        <br><b>Public Health:</b> The overall health of the people managed by the government.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. What steps can the government take to provide healthcare for all?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Build more hospitals, provide free medicines, and ensure clean water for everyone.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. Compare private and public health services:</p>
                        <div style="width: 100%; overflow-x: auto; margin: 10px 0;">
                            <table style="width: 100%; min-width: 100%; border-collapse: collapse; color: #fff; font-size: 0.9em; table-layout: fixed; display: table; text-align: center;">
                                <thead>
                                    <tr style="background-color: ${themeColor}; color: #fff;">
                                        <th style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Facility</th>
                                        <th style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Affordability</th>
                                        <th style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Quality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;"><b style="color: ${themeColor};">Private</b></td>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Expensive</td>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;">High</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;"><b style="color: ${themeColor};">Public</b></td>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Cheap</td>
                                        <td style="padding: 8px 5px; border: 1px solid #555; text-align: center;">Basic</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. ‘Improvement in water and sanitation can control many diseases.’ Explain.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Clean water prevents <b>diarrhoea</b> and <b>cholera</b>. Good sanitation stops mosquitoes from breeding.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "In a democracy, people expect the government to work for their welfare.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7c2-mcq-1",
            question: "What is the full form of PHC?",
            options: ["Private Health Centre", "Primary Health Centre", "Public Health Clinic", "Primary Help Centre"],
            correctAnswer: "b"
        },
        {
            id: "c7c2-mcq-2",
            question: "Who runs the Public Health Services in India?",
            options: ["Private Doctors", "Government", "NGOs", "Foreign Companies"],
            correctAnswer: "b"
        },
        {
            id: "c7c2-mcq-3",
            question: "India is the ____ largest producer of medicines in the world.",
            options: ["1st", "2nd", "3rd", "4th"],
            correctAnswer: "c"
        },
        {
            id: "c7c2-mcq-4",
            question: "Which country in South America is considered the healthiest?",
            options: ["Brazil", "Argentina", "Costa Rica", "Peru"],
            correctAnswer: "c"
        },
        {
            id: "c7c2-mcq-5",
            question: "What is the main cause of many communicable diseases?",
            options: ["Lack of exercise", "Contaminated water", "Excessive sleep", "Eating fruits"],
            correctAnswer: "b"
        },
        {
            id: "c7c2-mcq-6",
            question: "Right to Health is a part of which fundamental right?",
            options: ["Right to Equality", "Right to Life", "Right against Exploitation", "Right to Education"],
            correctAnswer: "b"
        },
        {
            id: "c7c2-mcq-7",
            question: "RMP stands for:",
            options: ["Regional Medical Personnel", "Registered Medical Practitioners", "Real Medical Professional", "Rural Medical Plan"],
            correctAnswer: "b"
        },
        {
            id: "c7c2-mcq-8",
            question: "OPD stands for:",
            options: ["Out Patient Department", "Over Patient Duty", "On Patient Doctor", "Outside Patient Division"],
            correctAnswer: "a"
        },
        {
            id: "c7c2-mcq-9",
            question: "Communicable diseases spread through:",
            options: ["Water", "Food", "Air", "All of these"],
            correctAnswer: "d"
        },
        {
            id: "c7c2-mcq-10",
            question: "Private health services are mostly found in:",
            options: ["Villages", "Remote areas", "Urban areas", "Forests"],
            correctAnswer: "c"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7c2-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};

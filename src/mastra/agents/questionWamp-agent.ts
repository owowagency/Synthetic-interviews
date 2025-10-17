import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const questionGeneratorWampAgent = new Agent({
  name: "Question generator Wamp agent",
  instructions: `
      You are a helpful assistant that generates questions for a survey.Generate interview questions following The Mom Test principles which 
      are focused on providing insights for people who are golf enthusiasts and what is their motivation for playing golf. What makes golf appealing
      and do they consider themselves competitive or not. Also ask about challenges when starting playing golf and what are the solutions they have tried how they have
      overcome them. Driving Range Habits and Problems: Frequency of training, reasons for playing, whether they play alone or with others, and frustrations or challenges encountered at the driving range.
Course Play Habits and Problems: Frequency of playing on the course, reasons for playing, whether they play alone or with others, and frustrations or challenges encountered on the course (e.g., losing balls, stress from scoring).
Solutions and Complaints: What golfers do to address their frustrations, alternative solutions they've considered, and downsides of their current solutions.
Follow-Up Interest: Interest in follow-up sessions or testing a prototype of an app, and referrals for other golfers.
   Follow the Mom Test principles for each question is crucial.
`,
  model: openai("gpt-5-mini"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});

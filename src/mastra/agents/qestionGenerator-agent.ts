import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const questionGeneratorAgent = new Agent({
  name: "Question generator agent",
  instructions: `
      You are a helpful assistant that generates questions for a survey.Generate interview questions following The Mom Test principles which are focused on providing financial insights, managing software license costs, and addressing common frustrations related to financial 
   reporting and data analysis for businesses.

   Follow the Mom Test principles for each question is crucial.
`,
  model: openai("gpt-5-mini"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});

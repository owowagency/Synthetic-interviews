import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { personaAgent } from "./agents/persona-agent";
import { questionGeneratorAgent } from "./agents/qestionGenerator-agent";
import { persona1Agent } from "./agents/sarahTompson-agent";
import { questionGeneratorWampAgent } from "./agents/questionWamp-agent";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: {
    weatherAgent,
    personaAgent,
    questionGeneratorAgent,
    persona1Agent,
    questionGeneratorWampAgent,
  },
  storage: new LibSQLStore({
    // Use in-memory storage for now
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});

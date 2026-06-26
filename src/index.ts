import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const server = new Server(
  {
    name: "feature-skill-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_skill_dispatcher",
        description: "Returns the root SKILL.md file which contains the routing table and instructions on which developer profile to load based on the task.",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "get_profile",
        description: "Returns the full developer profile (e.g., 'steven-tey', 'karpathy') including their patterns, tech stack, and guardrails.",
        inputSchema: {
          type: "object",
          properties: {
            profileName: {
              type: "string",
              description: "The name of the profile without the .md extension (e.g., 'steven-tey').",
            },
          },
          required: ["profileName"],
        },
      },
      {
        name: "get_workflow",
        description: "Returns a specific workflow chain (e.g., 'new-feature', 'code-review').",
        inputSchema: {
          type: "object",
          properties: {
            workflowName: {
              type: "string",
              description: "The name of the workflow without the .md extension (e.g., 'new-feature').",
            },
          },
          required: ["workflowName"],
        },
      },
      {
        name: "get_registry_skill",
        description: "Returns a specific sub-routine skill from the registry (e.g., 'implementation-plan', 'folder-tree').",
        inputSchema: {
          type: "object",
          properties: {
            skillName: {
              type: "string",
              description: "The name of the registry skill without the .md extension.",
            },
          },
          required: ["skillName"],
        },
      }
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    if (request.params.name === "get_skill_dispatcher") {
      const content = await fs.readFile(path.join(ROOT_DIR, "SKILL.md"), "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    if (request.params.name === "get_profile") {
      const profileName = request.params.arguments?.profileName;
      if (!profileName || typeof profileName !== "string") throw new Error("Invalid profileName");
      
      const filePath = path.join(ROOT_DIR, "profiles", `${profileName}.md`);
      const content = await fs.readFile(filePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    if (request.params.name === "get_workflow") {
      const workflowName = request.params.arguments?.workflowName;
      if (!workflowName || typeof workflowName !== "string") throw new Error("Invalid workflowName");
      
      const filePath = path.join(ROOT_DIR, "workflows", `${workflowName}.md`);
      const content = await fs.readFile(filePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    if (request.params.name === "get_registry_skill") {
      const skillName = request.params.arguments?.skillName;
      if (!skillName || typeof skillName !== "string") throw new Error("Invalid skillName");
      
      const filePath = path.join(ROOT_DIR, "registry-skills", `${skillName}.md`);
      const content = await fs.readFile(filePath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    }

    throw new Error("Unknown tool");
  } catch (error: any) {
    return {
      content: [{ type: "text", text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Feature Skill MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

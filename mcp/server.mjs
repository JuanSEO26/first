/**
 * Stitch MCP Server
 * Servidor Model Context Protocol para conectar servicios externos.
 *
 * Uso: configurar en stitch.mcp.json o en Claude Desktop / Claude Code.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  { name: 'stitch-mcp', version: '0.1.0' },
  { capabilities: { tools: {} } }
);

// --- Tools -----------------------------------------------------------

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'ping',
      description: 'Health-check: devuelve pong con timestamp',
      inputSchema: { type: 'object', properties: {}, required: [] },
    },
    {
      name: 'get_project_info',
      description: 'Devuelve metadatos del proyecto Stitch',
      inputSchema: { type: 'object', properties: {}, required: [] },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name } = request.params;

  switch (name) {
    case 'ping':
      return {
        content: [{ type: 'text', text: `pong — ${new Date().toISOString()}` }],
      };

    case 'get_project_info':
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                name: 'stitch',
                framework: 'astro',
                css: 'tailwindcss',
                deploy: 'vercel',
                mcp: 'active',
              },
              null,
              2
            ),
          },
        ],
      };

    default:
      throw new Error(`Tool desconocida: ${name}`);
  }
});

// --- Start -----------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);

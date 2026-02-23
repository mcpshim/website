# mcpshim

Landing page for mcpshim - the open source daemon + CLI bridge that turns remote MCP tools into local command workflows.

mcpshim is a Go-based daemon + CLI toolkit that keeps MCP connections in one local process and exposes a clean Unix socket protocol for scripts and AI agents.

Website: https://mcpshim.dev
Repository: https://github.com/mcpshim/mcpshim

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## About mcpshim

mcpshim helps you manage remote MCP servers from a single local daemon. It can:

- Keep remote MCP server connections and tool discovery in one daemon
- Expose a simple Unix socket protocol for CLI and agent tooling
- Register MCP endpoints via config and CLI
- Support alias-driven local command invocation for each registered server

mcpshim is written in Go. Learn more at https://mcpshim.dev and browse source at https://github.com/mcpshim/mcpshim.

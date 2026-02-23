import { useState } from 'react'

import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

import {
  ArrowRight,
  Bot,
  Cable,
  Check,
  Command,
  Database,
  Download,
  KeyRound,
  Plug,
  Server,
  Settings,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Cable,
    title: 'Persistent daemon, local socket',
    description:
      'mcpshimd keeps remote MCP connections alive and exposes one local Unix socket for fast, repeatable command execution.',
  },
  {
    icon: Wrench,
    title: 'Dynamic tool discovery',
    description:
      'The daemon discovers server capabilities and tools on your behalf, then the CLI calls them without manual wrapper code.',
  },
  {
    icon: Command,
    title: 'Flags become MCP args',
    description:
      'CLI flags are translated on the fly into MCP tool parameters so calls feel like native shell commands.',
  },
  {
    icon: Settings,
    title: 'Config-driven registration',
    description:
      'Config is the source of truth for server registration. Add servers by URL, set auth headers, reload, and keep everything deterministic.',
  },
  {
    icon: Database,
    title: 'SQLite-backed runtime state',
    description:
      'Call history and OAuth tokens are persisted in a local SQLite database for reliable agent context and repeatable sessions.',
  },
  {
    icon: Workflow,
    title: 'Agent-ready and composable',
    description:
      'Avoid context pollution from huge MCP tool definitions: register capabilities as simple local commands and invoke only what an agent needs.',
  },
]

const useCases = [
  {
    icon: Zap,
    title: 'Agent tool orchestration',
    description:
      'Let your AI agent discover and call remote MCP tools through thin local commands instead of embedding entire server SDKs.',
  },
  {
    icon: Workflow,
    title: 'Context pollution elimination',
    description:
      'Stop loading hundreds of MCP tool definitions into model context. Register capabilities once, invoke only what you need per session.',
  },
  {
    icon: Server,
    title: 'MCP gateway consolidation',
    description:
      'Route multiple remote MCP servers through one daemon with unified auth, history, and config — one socket to rule them all.',
  },
]

const agents = [
  {
    name: 'GitHub Copilot',
    description:
      'Give Copilot access to remote MCP tools as local commands so it can call APIs, search knowledge bases, and trigger workflows.',
  },
  {
    name: 'Claude',
    description:
      'Let Claude invoke remote MCP tools through thin shell commands — no SDK bloat in context, just call what it needs.',
  },
  {
    name: 'Gemini',
    description:
      'Connect Gemini to your MCP servers so it can discover tools, run queries, and chain actions across services.',
  },
  {
    name: 'Codex',
    description:
      'Equip Codex with MCP-backed commands to fetch data, run operations, and report results without context overhead.',
  },
  {
    name: 'OpenCode',
    description:
      'Let OpenCode reach remote MCP tools as lightweight shell commands — discover, call, and chain actions without context bloat.',
  },
  {
    name: 'Any Agent',
    description:
      'mcpshim is agent-agnostic. Any AI that can run a shell command or read from a Unix socket gets instant MCP access.',
  },
]

function InstallationSection() {
  const [tab, setTab] = useState('agent')

  return (
    <section id="installation" className="py-24 border-t border-stroke/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
            Get started in seconds
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            Let your AI agent set things up, or install manually with Go.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 justify-center">
            <button
              onClick={() => setTab('agent')}
              className={`h-10 px-5 text-sm font-medium rounded-xl flex items-center gap-2 transition-all ${
                tab === 'agent'
                  ? 'bg-accent text-black'
                  : 'text-content-secondary border border-stroke hover:text-content hover:bg-background-secondary'
              }`}
            >
              <Bot className="size-4" />
              For AI Agents
            </button>
            <button
              onClick={() => setTab('human')}
              className={`h-10 px-5 text-sm font-medium rounded-xl flex items-center gap-2 transition-all ${
                tab === 'human'
                  ? 'bg-accent text-black'
                  : 'text-content-secondary border border-stroke hover:text-content hover:bg-background-secondary'
              }`}
            >
              <Terminal className="size-4" />
              For Humans
            </button>
          </div>

          {/* Agent Tab */}
          {tab === 'agent' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-stroke bg-background-secondary/50 p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Download className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content mb-2">
                      1. Install binaries
                    </h3>
                    <p className="text-content-secondary text-sm mb-4">
                      Tell your agent to run the Go install commands to get the
                      daemon and CLI.
                    </p>
                    <div className="rounded-xl border border-stroke bg-background-tertiary/30 p-4 font-mono text-sm space-y-2">
                      <div className="text-accent break-all">
                        go install
                        github.com/mcpshim/mcpshim/cmd/mcpshimd@latest
                      </div>
                      <div className="text-accent break-all">
                        go install github.com/mcpshim/mcpshim/cmd/mcpshim@latest
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-content mb-2">
                      2. Ask your agent to configure and start
                    </h3>
                    <p className="text-content-secondary text-sm mb-4">
                      Paste something like this into your agent&apos;s chat:
                    </p>
                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm">
                      <p className="text-content italic">
                        &ldquo;Create a mcpshim config at
                        ~/.config/mcpshim/config.yaml with the servers I need,
                        start mcpshimd, and verify with mcpshim status.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-content-secondary text-sm text-center">
                Your agent will create the config, start the daemon, and verify
                everything is working — autonomously.
              </p>
            </div>
          )}

          {/* Human Tab */}
          {tab === 'human' && (
            <div className="space-y-6">
              {[
                {
                  platform: 'Daemon',
                  command:
                    'go install github.com/mcpshim/mcpshim/cmd/mcpshimd@latest',
                },
                {
                  platform: 'CLI',
                  command:
                    'go install github.com/mcpshim/mcpshim/cmd/mcpshim@latest',
                },
                {
                  platform: 'Config',
                  command:
                    'cp configs/mcpshim.example.yaml ~/.config/mcpshim/config.yaml',
                },
              ].map((item) => (
                <div
                  key={item.platform}
                  className="rounded-xl border border-stroke bg-background-secondary/50 overflow-hidden"
                >
                  <div className="px-4 py-2 border-b border-stroke/50 bg-background-tertiary/30">
                    <span className="text-sm text-content-secondary">
                      {item.platform}
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <code className="text-accent">{item.command}</code>
                  </div>
                </div>
              ))}

              <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <KeyRound className="size-5 text-accent mt-0.5" />
                  <p className="text-sm text-content-secondary">
                    Keep auth values in environment variables and reference them
                    in YAML (<code className="text-accent">${'{TOKEN}'}</code>)
                    to avoid hardcoding secrets.
                  </p>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-content-secondary mb-4">
                  Clone the repo for example configs and detailed docs
                </p>
                <Link
                  href="https://github.com/mcpshim/mcpshim"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
                >
                  Open repository
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stroke bg-background-secondary/50 backdrop-blur-sm mb-6">
              <span className="text-xs text-content-secondary">
                Open source · Go · Built for AI agents
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-content">mcpshim</span>
              <br />
              <span className="text-accent text-glow">
                MCP as local commands
              </span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary max-w-xl mb-8">
              Turn remote MCP servers into simple shell commands.
              <span className="text-content font-medium"> mcpshim</span> keeps
              sessions in a daemon, discovers tools once, and avoids loading
              endless metadata into model context.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="#installation"
                className="h-12 px-6 text-base bg-accent hover:bg-accent-secondary text-black font-medium rounded-xl flex items-center gap-2 transition glow"
              >
                <Download className="size-5" />
                Install mcpshim
              </Link>
              <Link
                href="https://github.com/mcpshim/mcpshim"
                className="h-12 px-6 text-base text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:border-stroke-secondary hover:bg-background-secondary"
              >
                View on GitHub
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Built for command-native MCP workflows
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              The daemon does discovery, auth, and capability management. The
              CLI stays thin and predictable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-stroke transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-content mb-2">
                  {feature.title}
                </h3>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="quick-start" className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-6">
                How it works
              </h2>
              <p className="text-content-secondary text-lg mb-8">
                mcpshim sits between your agent and remote MCP servers. The
                daemon holds connections; the CLI translates flags into tool
                calls.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Define your MCP servers',
                    description:
                      'Add remote servers by URL in a YAML config. Set auth headers, aliases, and environment variables.',
                  },
                  {
                    step: '02',
                    title: 'Start the daemon',
                    description:
                      'Run mcpshimd to connect to all servers and expose a single Unix socket for the CLI.',
                  },
                  {
                    step: '03',
                    title: 'Call tools from the shell',
                    description:
                      'Use mcpshim call or generated wrapper scripts — flags become MCP arguments automatically.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-content mb-1">
                        {item.title}
                      </h3>
                      <p className="text-content-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-stroke bg-background-secondary/50 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-stroke/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-content-secondary text-xs ml-2">
                    terminal
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">mcpshimd &amp;</span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ daemon listening on mcpshim.sock
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">mcpshim servers</span>
                  </div>
                  <div className="text-content-secondary">
                    ✓ notion (4 tools) · github (12 tools) · linear (8 tools)
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">
                      mcpshim call --server notion --tool search --query
                      &quot;roadmap&quot;
                    </span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ 3 results (42ms)
                  </div>
                  <div className="mt-4">
                    <span className="text-accent">$</span>
                    <span className="text-content ml-2">
                      mcpshim history --limit 5
                    </span>
                  </div>
                  <div className="text-content-secondary">
                    ▸ 5 calls (notion:search, github:create_issue, ...)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              What agents can do with mcpshim
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              From tool orchestration to context-budget control, mcpshim gives
              your AI the MCP infrastructure it needs to operate efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 transition-all"
              >
                <useCase.icon className="size-10 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-content mb-3">
                  {useCase.title}
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
              <Plug className="size-4 text-accent" />
              <span className="text-xs text-accent">
                Universal compatibility
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Works with every AI agent
            </h2>
            <p className="text-content-secondary text-lg max-w-2xl mx-auto">
              Copilot, Claude, Gemini, Codex — it doesn&apos;t matter. If your
              agent can run a command, it can use any MCP server.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="p-6 rounded-2xl border border-stroke/50 bg-background-secondary/30 hover:bg-background-secondary/50 hover:border-accent/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Sparkles className="size-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-content">
                    {agent.name}
                  </h3>
                </div>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-content-secondary text-sm">
              mcpshim exposes MCP tools as composable CLI commands. Any AI agent
              that supports tool-use, function calling, or shell execution can
              pick them up instantly — zero custom integration code.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <InstallationSection />

      {/* Architecture Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Cable className="size-4 text-accent" />
                <span className="text-xs text-accent">
                  Daemon + socket architecture
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-6">
                One socket for every MCP server
              </h2>
              <p className="text-content-secondary text-lg mb-8">
                Your agent doesn&apos;t need to manage connections, auth tokens,
                or capability schemas. mcpshim normalizes everything behind a
                single local protocol so the agent can focus on reasoning.
              </p>

              <ul className="space-y-4">
                {[
                  'Persistent connections to all configured MCP servers',
                  'SQLite-backed call history and OAuth token storage',
                  'Config-driven server registration with hot reload',
                  'JSON IPC protocol over Unix domain socket',
                  'Wrapper scripts for short aliases (mcpshim script --install)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="size-3 text-accent" />
                    </div>
                    <span className="text-content-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition" />
                <div className="relative w-48 h-48 rounded-3xl border border-stroke bg-background-secondary/50 flex items-center justify-center group-hover:border-accent/50 transition-colors cursor-pointer">
                  <Logo className="size-24 text-accent animate-shimmer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Project Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Plug className="size-4 text-accent" />
                <span className="text-xs text-accent">Companion project</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-content mb-3">
                Give your agent a voice too
              </h2>
              <p className="text-content-secondary">
                mcpshim gives your agent tools.{' '}
                <Link
                  href="https://pantalk.dev"
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  Pantalk
                </Link>{' '}
                gives it a voice — letting AI agents send, receive, and stream
                messages across Slack, Discord, Telegram, and 7 more platforms.
                Together they form a complete agent infrastructure stack.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://pantalk.dev"
                className="px-6 text-sm py-3 bg-accent hover:bg-accent-secondary text-black font-medium rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              >
                Explore Pantalk
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/pantalk/pantalk"
                className="px-6 text-sm py-3 bg-background-secondary text-content-secondary hover:text-content border border-stroke rounded-full flex items-center justify-center gap-2 hover:bg-background-tertiary transition-all whitespace-nowrap"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-content mb-4">
                Build with us
              </h2>
              <p className="text-content-secondary">
                mcpshim is open source. Follow development on GitHub, report
                issues, or contribute improvements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://github.com/mcpshim/mcpshim"
                className="h-12 px-6 text-sm bg-background-secondary border border-stroke text-content rounded-xl flex items-center gap-2 hover:bg-background-tertiary transition-all"
              >
                View on GitHub
              </Link>
              <Link
                href="https://github.com/mcpshim/mcpshim/issues"
                className="h-12 px-6 text-sm text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:bg-background-secondary"
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Index.getLayout = function (children) {
  return (
    <>
      <Meta
        title="mcpshim - MCP as Local Commands"
        description="mcpshim is an open source daemon and CLI that turns remote MCP servers into simple shell commands for AI agents and developers."
        keywords={[
          'mcpshim',
          'mcp',
          'mcp bridge',
          'mcp gateway',
          'model context protocol',
          'daemon',
          'unix socket',
          'cli',
          'agent tools',
          'llm tools',
          'copilot',
          'claude',
          'gemini',
          'codex',
          'go',
          'golang',
          'context pollution',
          'agentic workflows',
          'pantalk',
          'chat bot',
          'agent chat',
        ]}
        thisUrl="https://mcpshim.dev"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  )
}

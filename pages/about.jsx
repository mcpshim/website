import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

import {
  ArrowRight,
  Blocks,
  Heart,
  KeyRound,
  Layers,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150" />
                <Logo className="size-28 text-accent relative animate-shimmer" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-content">About </span>
              <span className="text-accent text-glow">MCPShim</span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary max-w-2xl mx-auto">
              Turn any MCP server into a standard CLI command your agent can
              call directly.
            </p>
          </div>
        </div>
      </section>

      {/* Story: Why It Exists */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
              <Sparkles className="size-4 text-accent" />
              <span className="text-xs text-accent">The story</span>
            </div>

            <p className="text-content-secondary">
              <span className="text-content font-medium">
                MCP servers are powerful, but using them is harder than it
                should be.
              </span>{' '}
              Every MCP server has its own transport, its own auth flow, and its
              own way of exposing tools. An agent that wants to use tools from
              three different MCP servers has to manage three connections, three
              authentication schemes, and three different lifecycles.
            </p>

            <p className="text-content-secondary">
              Most AI agents already know how to run shell commands. They can
              call <span className="text-accent font-mono text-base">grep</span>
              , <span className="text-accent font-mono text-base">curl</span>,
              or <span className="text-accent font-mono text-base">git</span>{' '}
              without thinking twice. So the question became:{' '}
              <em>
                what if every MCP tool worked the same way - as a plain CLI
                command?
              </em>
            </p>

            <p className="text-content-secondary">
              <span className="text-content font-medium">
                That&apos;s what MCPShim does.
              </span>{' '}
              It connects to remote MCP servers, handles all the authentication,
              and exposes each tool as a simple command-line program. Your agent
              just runs a command and gets the result. No SDK, no protocol
              knowledge, no connection management.
            </p>

            <blockquote className="border-l-2 border-accent pl-6 py-2 text-content italic">
              &ldquo;One daemon. Every MCP server. Standard CLI commands.&rdquo;
            </blockquote>

            <p className="text-content-secondary">
              The agent doesn&apos;t need to know it&apos;s talking to an MCP
              server at all. It runs a command, passes arguments, and reads the
              output. That&apos;s it.
            </p>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-12">
              How it&apos;s designed
            </h2>

            <div className="space-y-12">
              {[
                {
                  icon: Terminal,
                  title: 'CLI-first, always',
                  body: 'Every MCP tool becomes a regular CLI command. Your agent calls it the same way it calls any other program on the system. Arguments go in, results come out. No special protocol, no client library required.',
                },
                {
                  icon: KeyRound,
                  title: 'Auth is handled for you',
                  body: 'OAuth flows, API keys, token refreshes - MCPShim manages all of it. You authenticate once during setup, and the daemon keeps credentials fresh in the background. Your agent never sees a login screen.',
                },
                {
                  icon: Blocks,
                  title: 'Composable by nature',
                  body: 'Because everything is a CLI command, you can pipe output through jq, chain tools together in a shell script, or let your agent mix MCP tools with any other command-line program. Standard Unix patterns just work.',
                },
                {
                  icon: Layers,
                  title: 'All servers, one interface',
                  body: 'Add as many MCP servers as you need. Each one gets its own set of CLI commands, all sharing the same calling convention. One daemon handles every connection, every protocol detail, and every reconnection.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-content mb-2">
                      {item.title}
                    </h3>
                    <p className="text-content-secondary leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What It's Built With */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              What it&apos;s built with
            </h2>

            <p className="text-content-secondary">
              MCPShim is written in{' '}
              <span className="text-content font-medium">Go</span> and ships as
              a single binary. No runtime dependencies, no containers required.
              Install it and it just works.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Language', value: 'Go' },
                { label: 'Protocol', value: 'Unix socket + JSON' },
                { label: 'Storage', value: 'SQLite' },
                { label: 'License', value: 'Open source' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border border-stroke/50 bg-background-secondary/30"
                >
                  <p className="text-xs text-content-secondary mb-1">
                    {item.label}
                  </p>
                  <p className="text-content font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="text-content-secondary">
              Under the hood, a single daemon process (
              <span className="text-accent font-mono text-base">mcpshimd</span>)
              maintains connections to every configured MCP server. Lightweight
              CLI wrappers talk to the daemon over a Unix socket. Everything
              stays local, fast, and private.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8 text-lg leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-content mb-4">
              Who it&apos;s for
            </h2>

            <p className="text-content-secondary">
              MCPShim is built for{' '}
              <span className="text-content font-medium">AI agents</span> and
              the developers who build them. If your agent needs to:
            </p>

            <ul className="space-y-3">
              {[
                'Use tools from remote MCP servers without managing connections',
                'Call MCP tools the same way it calls grep, curl, or any shell command',
                'Authenticate to multiple services once and never think about it again',
                'Combine MCP tools with local commands in shell scripts and pipelines',
                'Run headless on a server with no browser or UI required',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Zap className="size-4 text-accent mt-1.5 shrink-0" />
                  <span className="text-content-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-content-secondary">
              &hellip;then MCPShim is the missing piece. Your agent focuses on
              reasoning. MCPShim gives it the tools.
            </p>
          </div>
        </div>
      </section>

      {/* Built By */}
      <section className="py-24 border-t border-stroke/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Heart className="size-8 text-accent mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-content">
              Built with care
            </h2>
            <p className="text-content-secondary text-lg max-w-xl mx-auto">
              MCPShim is an open source project by{' '}
              <Link
                href="https://cbk.ai"
                className="text-accent hover:text-accent-secondary transition-colors"
              >
                CBK AI
              </Link>
              . You can explore the code, report issues, or contribute on
              GitHub.
            </p>
            <p className="text-content-secondary text-base max-w-xl mx-auto mt-4">
              Also check out{' '}
              <Link
                href="https://pantalk.dev"
                className="text-accent hover:text-accent-secondary transition-colors"
              >
                Pantalk
              </Link>{' '}
              — a sibling project that gives AI agents a unified interface to
              chat platforms like Slack, Discord, and Telegram.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                href="https://github.com/mcpshim/mcpshim"
                className="h-12 px-6 text-base bg-accent hover:bg-accent-secondary text-black font-medium rounded-xl flex items-center gap-2 transition glow"
              >
                View on GitHub
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/"
                className="h-12 px-6 text-base text-content-secondary hover:text-content rounded-xl flex items-center gap-2 transition border border-stroke hover:border-stroke-secondary hover:bg-background-secondary"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

About.getLayout = function (children) {
  return (
    <>
      <Meta
        title="About MCPShim - MCP Tools as CLI Commands for AI Agents"
        description="MCPShim is an open source daemon that turns remote MCP servers into standard CLI commands. Any AI agent that can run shell commands can use any MCP tool — no SDK or protocol knowledge required."
        keywords={[
          'mcpshim',
          'about',
          'mcp',
          'model context protocol',
          'cli',
          'ai agent',
          'open source',
          'daemon',
          'go',
        ]}
        thisUrl="https://mcpshim.dev/about"
      />
      <Navbar />
      <main className="pt-14">{children}</main>
    </>
  )
}

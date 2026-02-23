import Link from 'next/link'

import Logo from '@/components/Logo'
import Meta from '@/components/Meta'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Meta title="404 Page Not Found | mcpshim" />

      {/* Header with Logo */}
      <div className="border-b border-stroke/50">
        <div className="container py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="text-accent" />
            <p className="font-bold text-lg tracking-tight">mcpshim</p>
          </Link>
        </div>
      </div>

      {/* Error Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <p className="text-8xl font-bold text-accent mb-4">404</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-content mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-content-secondary">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-accent text-black font-medium rounded-xl hover:bg-accent-secondary transition duration-150"
            >
              Go Home
            </Link>
            <a
              href="https://github.com/mcpshim/mcpshim"
              className="px-6 py-3 bg-background border border-stroke text-content rounded-xl hover:bg-background-tertiary transition duration-150"
            >
              View Repo
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-stroke/50">
        <div className="container py-6">
          <p className="text-sm text-content-secondary text-center">© {new Date().getFullYear()} mcpshim contributors.</p>
        </div>
      </div>
    </main>
  )
}

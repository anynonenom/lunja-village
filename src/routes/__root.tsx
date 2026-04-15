import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-elegant text-8xl text-coral">404</h1>
        <h2 className="mt-4 font-serif-brand text-xl text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-mud/60 font-body-brand">
          This wave has already passed. Let's get you back.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-keppel px-8 py-3 font-display-brand text-xs tracking-[0.15em] uppercase text-cream transition-all hover:bg-coral"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lunja Village — Surf & Nomad Cottages" },
      { name: "description", content: "Where the Atlas embraces the Atlantic. Surf & Nomad Cottages in Taghazout, Morocco." },
      { property: "og:title", content: "Lunja Village — Surf & Nomad Cottages" },
      { property: "og:description", content: "Where the Atlas embraces the Atlantic. Surf & Nomad Cottages in Taghazout, Morocco." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

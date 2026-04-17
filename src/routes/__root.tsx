import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageLoader } from "../components/PageLoader";
import { SmoothScroll } from "../components/SmoothScroll";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <SmoothScroll />
      <PageLoader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

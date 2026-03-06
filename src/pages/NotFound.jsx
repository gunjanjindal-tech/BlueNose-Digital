import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Bluenose Marketing</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-6 bg-[#F7FBFE]">
        <div className="text-center max-w-lg">
          <h1 className="text-7xl font-extrabold text-[#0E6388]">404</h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#063349]">
            Page Not Found
          </h2>

          <p className="mt-3 text-[#063349]/70">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:opacity-90"
            style={{ background: "rgb(14, 99, 136)" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

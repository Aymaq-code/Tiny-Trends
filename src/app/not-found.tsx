import Link from "next/link";
import "../styles/notFound.css";

export default function NotFound() {
  return (
    <main className="nf-container">
      <div className="nf-card">
        <div className="nf-badge">404</div>

        <h2 className="nf-title">Page Not Found</h2>

        <p className="nf-description">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, deleted, or never existed.
        </p>

        <Link href="/" className="nf-button">
          <span>Return Home</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}

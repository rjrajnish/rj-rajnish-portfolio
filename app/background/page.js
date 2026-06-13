import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { background } from "../../lib/site-data";

function TimelineCard({ item }) {
  return (
    <article className="surface px-6 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-medium text-white">{item.title}</h2>
          <p className="mt-1 text-sm text-[var(--brand)]">{item.subtitle}</p>
        </div>
        <span className="pill shrink-0">{item.year}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
      {item.url ? (
        <Link
          href={item.url}
          target="_blank"
          className="mt-4 inline-flex text-sm text-[var(--brand)] underline-offset-4 hover:underline"
        >
          Visit company
        </Link>
      ) : null}
      {item.meta ? <p className="mt-3 text-sm text-[var(--muted)]">{item.meta}</p> : null}
    </article>
  );
}

export default function BackgroundPage() {
  return (
    <SiteShell>
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand)]">Background</p>
          <h1 className="section-title">Education and experience</h1>
          <p className="section-copy max-w-2xl text-sm sm:text-base">
            This page used to fetch static timeline data through API routes and React Query.
            It now renders directly from local data, which is a better fit for portfolio content.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Education</h2>
            {background.education.map((item) => (
              <TimelineCard key={`${item.title}-${item.year}`} item={item} />
            ))}
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            {background.experience.map((item) => (
              <TimelineCard key={`${item.title}-${item.year}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

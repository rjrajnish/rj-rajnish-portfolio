import Image from "next/image";
import Link from "next/link";
import Icon from "../components/icon";
import SiteShell from "../components/site-shell";
import { expertise, profile, reviews } from "../lib/site-data";

 

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mb-8 space-y-3">
      <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-[var(--brand)]">
        <span className="inline-block h-px w-5 bg-[var(--brand)] opacity-60" />
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {copy && (
        <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">{copy}</p>
      )}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-5 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-mid)]">
      <div className="text-3xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1.5 text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

function TechPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]">
      {label}
    </span>
  );
}

export default function HomePage() {
  const stack = ["React.js", "Next.js 15", "TypeScript", "Node.js", "MongoDB", "Redis", "AWS", "GCP", "Gemini API", "OpenAI API"];

  return (
    <SiteShell>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-8 sm:px-10 sm:py-10">

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-glow)] blur-[96px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/8 blur-[96px]" />

        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative grid gap-10 xl:grid-cols-[1fr_300px]">

          {/* Left column */}
          <div className="flex flex-col gap-8">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/40 bg-[var(--brand-soft)] px-4 py-1.5 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for new opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-1.5 text-xs text-[var(--muted)]">
                <Icon name="map-pin" className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-[var(--brand)]">
                <span className="h-px w-4 bg-[var(--brand)]" />
                {profile.role}
              </p>
              <h1 className="max-w-3xl text-xl font-semibold leading-[1] tracking-tight text-white sm:text-xl xl:text-[2rem]">
                {profile.headline ||
                  "Designing dependable digital products that look sharp and ship cleanly."}
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                4+ years building high-traffic web platforms. Currently powering{" "}
                <span className="font-medium text-white">15M+ monthly users</span> at India Today
                Group Digital across The Lallantop, SportsTak, Newstak and Uptak.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--brand-mid)] active:scale-[0.98]"
              >
                View Portfolio
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link
                href={profile.resume}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-medium text-white transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-mid)]"
              >
                <Icon name="download" className="h-4 w-4" />
                Download Resume
              </Link>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.stats.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>

            {/* Summary + role cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--brand)]">
                  <Icon name="trending-up" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-light)]">
                    Professional summary
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    High-utility web products — dashboards, internal tools, consumer experiences —
                    with equal attention to interface quality and engineering durability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--brand)]">
                  <Icon name="building" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-light)]">
                    Current role
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{profile.company}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                    Shipping production features across frontend, backend, and data workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — profile card */}
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[#111120] px-6 pt-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.22),transparent_70%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
                      Personal brand
                    </p>
                    <p className="mt-1.5 text-base font-semibold text-white">{profile.name}</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Icon name="github" className="h-5 w-5" />
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-white/[0.03] px-4 py-3.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                    Current focus
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-6 text-white">
                    Next.js 16 · React Server Components · AI tooling
                  </p>
                </div>

                <div className="relative mx-auto max-w-[240px]">
                  <div className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-[var(--brand)]/20 blur-2xl" />
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={280}
                    height={320}
                    className="relative mx-auto h-auto w-full object-contain"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-white/8 pb-5 pt-4">
                  <p className="text-xs text-[var(--muted)]">GitHub · LinkedIn</p>
                  <div className="flex items-center gap-2">
                    <Link
                      href={profile.socials.github}
                      target="_blank"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    >
                      <Icon name="github" className="h-4 w-4" />
                    </Link>
                    <Link
                      href={profile.socials.linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    >
                      <Icon name="linkedin" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted-light)]">
                  Delivery style
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Clean implementation, product awareness, reliable communication — across the full
                  cycle.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted-light)]">
                  Open to roles in
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["Noida", "Delhi", "Gurgaon", "Pune", "Hyderabad"].map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-[var(--border)] bg-white/[0.04] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Expertise"
          title="A balanced mix of product thinking, frontend craft, and backend execution"
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-6 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-mid)]"
            >
              <div className="pointer-events-none absolute right-4 top-4 text-5xl font-bold text-white/[0.03] select-none">
                0{index + 1}
              </div>
              <div className="relative space-y-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Icon name={item.icon ?? "code"} className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Client Reviews"
          title="Trusted by product teams and freelance clients"
        />
        <div className="grid gap-3 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.clientName}
              className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-6 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-mid)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="flex-1 text-sm leading-7 text-[var(--muted)]">
                "{review.clientReview}"
              </p>

              {/* Client info */}
              <div className="flex items-center justify-between border-t border-white/8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-soft)] text-xs font-semibold text-[var(--brand)]">
                    {review.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{review.clientName}</p>
                    <p className="text-xs text-[var(--muted)]">{review.clientLocation}</p>
                  </div>
                </div>
                <span className="rounded-full border border-[var(--border)] bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                  {review.clientSource}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </SiteShell>
  );
}
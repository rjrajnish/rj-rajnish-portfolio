"use client";

import Icon from "./icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { languageLevels, profile, skillLevels, techStack } from "../lib/site-data";

const navItems = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/background", label: "Background", icon: "id-card" },
  { href: "/portfolio", label: "Portfolio", icon: "briefcase" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

/* ── Skill progress bar ───────────────────────────────────────────────── */
function SkillMeter({ title, level }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/80">{title}</span>
        <span className="text-[10px] tabular-nums text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-violet-400 transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

/* ── Top Navigation Bar ───────────────────────────────────────────────── */
function Topbar({ onMenuOpen }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop + tablet topbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/8 bg-[#0a0a12]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1680px] items-center gap-6 px-4 lg:px-6">

          {/* Logo / name */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--brand)]">
              <span className="text-xs font-bold text-white">R</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">Rajnish Pandey</span>
            <span className="hidden rounded-full border border-[var(--border)] bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400 sm:inline">
              Available
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map(({ href, label, icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "text-[var(--muted)] hover:bg-white/6 hover:text-white"
                  }`}
                >
                  <Icon name={icon} className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-2">
            <Link
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-white/5 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/10 sm:flex"
            >
              <Icon name="mail" className="h-4 w-4" />
              {profile.email}
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-1.5 text-sm font-medium text-white transition hover:bg-violet-700 active:scale-[0.97]"
            >
              Let&apos;s Talk
              <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--muted)] transition hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Icon name="menu" className="h-4 w-4" />
            </button>

            {/* Profile panel toggle (desktop) */}
            <button
              type="button"
              onClick={onMenuOpen}
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--muted)] transition hover:text-white md:flex"
              aria-label="Open profile panel"
            >
              <Icon name="layout" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Active page indicator bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[var(--brand)]/60 to-transparent" />
        </div>
      </header>

      {/* Mobile slide-down nav */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 border-b border-white/10 bg-[#0a0a12] px-4 pb-5 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-white" onClick={() => setMobileOpen(false)}>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--brand)]">
                  <span className="text-xs font-bold">R</span>
                </div>
                <span className="text-sm font-semibold">Rajnish Pandey</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[var(--muted)]"
                aria-label="Close menu"
              >
                <Icon name="x" className="h-4 w-4" />
              </button>
            </div>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map(({ href, label, icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                        : "bg-white/5 text-[var(--muted)] hover:text-white"
                    }`}
                  >
                    <Icon name={icon} className="h-4 w-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 flex items-center gap-3 border-t border-white/8 pt-4">
              <Link
                href={profile.socials.github}
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] hover:text-white"
              >
                <Icon name="github" className="h-4 w-4" />
              </Link>
              <Link
                href={profile.socials.linkedin}
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] hover:text-white"
              >
                <Icon name="linkedin" className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="ml-auto flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Talk <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Right sidebar panel (profile + skills) ──────────────────────────── */
function ProfilePanel({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside className="relative flex h-full w-80 flex-col overflow-hidden border-l border-white/8 bg-[#0c0c18]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--brand)]">
              Profile
            </p>
            <h2 className="mt-1 text-base font-semibold text-white">{profile.name}</h2>
            <p className="mt-0.5 text-xs text-[var(--muted)]">{profile.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 text-[var(--muted)] hover:text-white"
            aria-label="Close panel"
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        </div>

        {/* Location pill */}
        <div className="border-b border-white/8 px-5 py-3">
          <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3.5 py-2.5">
            <Icon name="map-pin" className="h-3.5 w-3.5 text-[var(--brand)]" />
            <span className="text-xs text-[var(--muted)]">{profile.location}</span>
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-emerald-400">Open to work</span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
          <section className="space-y-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Skills
            </h3>
            {skillLevels.map((skill) => (
              <SkillMeter key={skill.title} {...skill} />
            ))}
          </section>

          <div className="h-px bg-white/8" />

          <section className="space-y-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Languages
            </h3>
            {languageLevels.map((lang) => (
              <SkillMeter key={lang.title} {...lang} />
            ))}
          </section>

          <div className="h-px bg-white/8" />

          <section className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-white/8 px-5 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/35 uppercase tracking-[0.2em]">Email</p>
              <p className="mt-1 text-xs text-white">{profile.email}</p>
            </div>
            <Link
              href={`mailto:${profile.email}`}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition hover:text-white"
              aria-label="Email"
            >
              <Icon name="mail" className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={profile.socials.github}
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition hover:text-white"
            >
              <Icon name="github" className="h-4 w-4" />
            </Link>
            <Link
              href={profile.socials.linkedin}
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] transition hover:text-white"
            >
              <Icon name="linkedin" className="h-4 w-4" />
            </Link>
            <Link
              href={profile.resume}
              target="_blank"
              className="ml-auto flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10"
            >
              <Icon name="download" className="h-3.5 w-3.5" /> Resume
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ── Breadcrumb / page header bar ─────────────────────────────────────── */
function PageBar() {
  const pathname = usePathname();
  const active = navItems.find((item) => item.href === pathname);

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-3">
      <div className="flex items-center gap-2.5 text-[var(--muted)]">
        <span className="text-xs">Rajnish Pandey</span>
        <Icon name="chevron-right" className="h-3 w-3 opacity-40" />
        <span className="text-xs font-medium text-white">{active?.label ?? "Home"}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Open to product &amp; freelance opportunities
      </div>
    </div>
  );
}

/* ── Root layout shell ────────────────────────────────────────────────── */
export default function SiteShell({ children }) {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080810]">
      <Topbar onMenuOpen={() => setPanelOpen(true)} />

      <ProfilePanel open={panelOpen} onClose={() => setPanelOpen(false)} />

      <div className="mx-auto max-w-[1280px] px-4 py-6 lg:px-6 lg:py-8">
        <div className="mb-5 hidden md:block">
          <PageBar />
        </div>
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}
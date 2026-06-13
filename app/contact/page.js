import ContactForm from "../../components/contact-form";
import Icon from "../../components/icon";
import SiteShell from "../../components/site-shell";
import { profile } from "../../lib/site-data";

const contactCards = [
  { label: "Country", value: "India" },
  { label: "City", value: "Noida" },
  { label: "Company", value: profile.company },
  { label: "Email", value: profile.email },
  { label: "LinkedIn", value: "Rajnish Pandey" },
  { label: "Phone", value: profile.phone },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand)]">Contact</p>
          <h1 className="section-title">Let&apos;s build something useful together</h1>
          <p className="section-copy max-w-2xl text-sm sm:text-base">
            The old contact page relied on Ant Design modals, SweetAlert, and a pages-router API.
            This version keeps the form focused and uses a modern route handler instead.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactCards.map((item) => (
            <article key={item.label} className="surface px-5 py-5">
              <p className="text-sm text-[var(--muted)]">{item.label}</p>
              <p className="mt-2 text-base font-medium text-white">{item.value}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="button-secondary h-11 w-11 rounded-full p-0"
            aria-label="Email"
          >
            <Icon name="mail" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="button-secondary h-11 w-11 rounded-full p-0"
            aria-label="GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary h-11 w-11 rounded-full p-0"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" />
          </a>
        </div>

        <ContactForm />
      </section>
    </SiteShell>
  );
}

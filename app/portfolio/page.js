import Image from "next/image";
import Link from "next/link";
import Icon from "../../components/icon";
import SiteShell from "../../components/site-shell";
import { projects } from "../../lib/site-data";
export const metadata = {
  title: "Portfolio",
  alternates: {
    canonical: "/portfolio",
  },
};
export default function PortfolioPage() {
  return (
    <SiteShell>
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand)]">Portfolio</p>
          <h1 className="section-title">Selected projects</h1>
          <p className="section-copy max-w-2xl text-sm sm:text-base">
            The project list is now rendered directly instead of coming from a local API plus
            client-side loading states. That removes extra code and avoids unnecessary runtime
            work for static portfolio content.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.projectName} className="surface overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className="object-cover opacity-55"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/60 to-transparent" />
              </div>
              <div className="-mt-10 relative px-6 pb-6">
                <div className="surface-strong px-5 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-medium text-white">{project.projectName}</h2>
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--brand)] underline-offset-4 hover:underline"
                        >
                          Visit project <Icon name="arrow-up-right" className="h-4 w-4" />
                        </Link>
                      ) : (
                        <p className="mt-2 text-sm text-[var(--muted)]">Private or internal project</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {project.projectDetail}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologiesUsed.map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

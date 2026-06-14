import localFont from "next/font/local";
import "./globals.css";
import { profile } from "../lib/site-data";

const circular = localFont({
  src: [
    {
      path: "../public/fonts/Circular-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Circular-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Circular-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-circular",
  display: "swap",
});

const siteUrl =  "https://rjrajnish.vercel.app";
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const title =
  "Rajnish Pandey | Senior Full Stack Developer | Next.js, React.js, TypeScript, Node.js, AI Engineer";
const description =
  "Rajnish Pandey is a Senior Full Stack Developer with 4+ years of experience building high-traffic news platforms, AI-powered applications, SaaS products, and enterprise solutions using Next.js, React.js, TypeScript, Node.js, GoLang, MongoDB, MSSQL, Redis, and AWS. Currently contributing to India Today Group Digital platforms including The Lallantop, NewsTak, UPTak, and SportsTak.";
export const metadata = {
  metadataBase,
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: title,
  keywords: [
    "Rajnish Pandey",
    "Rajnish Pandey Portfolio",
    "Senior Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Engineer",
    "MERN Stack Developer",
    "AI Engineer",
    "GoLang Developer",
    "JavaScript Developer",
    "NewsTak Developer",
    "India Today Group Digital",
    "The Lallantop Developer",
    "SportsTak Developer",
    "SEO Expert",
    "SSR Developer",
    "SSG Developer",
    "Web Performance Engineer",
    "Core Web Vitals",
    "React Portfolio",
    "Next.js Portfolio",
    "Noida Developer",
    "Full Stack Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
    images: [
      {
        url: "/images/rajnishpic.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} profile image`,
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  site: "@rjrajnish9090",
  creator: "@rjrajnish9090",
  title,
  description,
  images: [`${siteUrl}/images/rajnishpic.png`],
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
  },
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} Portfolio`,
  url: siteUrl,
  description,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: profile.name,
  },
};
export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Senior Full Stack Developer",
    description,
    email: profile.email,
    telephone: profile.phone,
    image: siteUrl ? `${siteUrl}${profile.image}` : undefined,
    url: siteUrl,

    nationality: "Indian",

    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "GoLang",
      "MongoDB",
      "Redis",
      "AWS",
      "SEO",
      "Core Web Vitals",
      "Artificial Intelligence",
      "Generative AI",
      "Web Performance",
      "SSR",
      "SSG",
    ],

    worksFor: {
      "@type": "Organization",
      name: "India Today Group Digital",
    },

    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Dr. APJ Abdul Kalam Technical University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Chhatrapati Shahuji Maharaj University",
      },
    ],

    sameAs: Object.values(profile.socials),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rajnish Pandey Development Services",
    description:
      "Full Stack Development, Next.js Development, React.js Development, AI Integration, SaaS Product Development, SEO Optimization and Enterprise Application Development.",
    provider: {
      "@type": "Person",
      name: profile.name,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Full Stack Development",
      "React Development",
      "Next.js Development",
      "AI Development",
      "Web Application Development",
    ],
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rajnish Pandey Portfolio",
    url: siteUrl,
    logo: siteUrl ? `${siteUrl}/images/rajnishpic.png` : undefined,
    founder: profile.name,
  };
  const socialProfileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.image}`,

  sameAs: [
    profile.socials.linkedin,
    profile.socials.github,
    profile.socials.twitter,
    profile.socials.facebook,
    "https://www.instagram.com/rj_pandey.rajnish",
  ],
};
  return (
    <html lang="en">
      <body
        className={`${circular.variable} font-[family-name:var(--font-circular)] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(socialProfileSchema),
  }}
/>
        {children}
      </body>
    </html>
  );
}

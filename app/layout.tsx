import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://morshed-nayeem.vercel.app"; // ← Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Morshed Nayeem — Backend Developer | Django & Python Expert",
    template: "%s | Morshed Nayeem",
  },

  description:
    "Abdullah Al Morshed Nayeem is a Backend Developer from Dhaka, Bangladesh, specializing in Django, Django REST Framework, Python, PostgreSQL, Redis, and scalable microservices architecture.",

  keywords: [
    "Morshed Nayeem",
    "Abdullah Al Morshed Nayeem",
    "Backend Developer",
    "Django Developer",
    "Python Developer",
    "DRF",
    "Django REST Framework",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Microservices",
    "API Developer",
    "Dhaka",
    "Bangladesh",
    "Software Engineer",
    "Full Stack Developer",
    "Morshed Nayeem portfolio",
    "Morshed Nayeem developer",
  ],

  authors: [{ name: "Abdullah Al Morshed Nayeem", url: SITE_URL }],
  creator: "Abdullah Al Morshed Nayeem",
  publisher: "Abdullah Al Morshed Nayeem",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Morshed Nayeem — Portfolio",
    title: "Morshed Nayeem — Backend Developer | Django & Python Expert",
    description:
      "Backend Developer specializing in Django, DRF, Python, and scalable microservices. Based in Dhaka, Bangladesh. Open to opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morshed Nayeem — Backend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Morshed Nayeem — Backend Developer",
    description:
      "Backend Developer specializing in Django, DRF, Python, and scalable microservices. Based in Dhaka, Bangladesh.",
    images: ["/og-image.png"],
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

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },

  category: "technology",
};

// JSON-LD Structured Data for Google Knowledge Panel & Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Abdullah Al Morshed Nayeem",
      alternateName: ["Morshed Nayeem", "Morshed"],
      url: SITE_URL,
      image: `${SITE_URL}/profile.png`,
      description:
        "Backend Developer specializing in Django, DRF, Python, PostgreSQL, Redis, and scalable microservices architecture. Based in Dhaka, Bangladesh.",
      jobTitle: "Backend Developer",
      worksFor: {
        "@type": "Organization",
        name: "Join Venture AI",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Daffodil International University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mirpur, Dhaka",
        addressCountry: "BD",
      },
      email: "inayeem729@gmail.com",
      telephone: "+880-1643-118070",
      sameAs: [
        "https://github.com/Morshed",
        "https://linkedin.com/in/Morshed-Nayeem",
      ],
      knowsAbout: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Docker",
        "React",
        "Next.js",
        "Microservices",
        "REST API Design",
        "Backend Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Morshed Nayeem — Portfolio",
      description:
        "Personal portfolio of Abdullah Al Morshed Nayeem, a Backend Developer from Dhaka, Bangladesh.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Morshed Nayeem — Backend Developer | Django & Python Expert",
      description:
        "Abdullah Al Morshed Nayeem is a Backend Developer from Dhaka, Bangladesh, specializing in Django, Django REST Framework, Python, and scalable microservices.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    },
    {
      "@type": "ProfilePage",
      dateCreated: "2025-11-01",
      dateModified: new Date().toISOString().split("T")[0],
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="author" content="Abdullah Al Morshed Nayeem" />
        <meta
          name="google-site-verification"
          content=""
        />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://cg29solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "CG29Solutions | Website Design, Digital Marketing & AI Automation",
    template: "%s | CG29Solutions",
  },

  description:
    "CG29Solutions helps businesses grow with website design, social media management, Meta Ads, video editing and AI automation across Ambikapur, Surajpur and Chhattisgarh.",

  applicationName: "CG29Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CG29Solutions",
    title:
      "CG29Solutions | Website Design, Digital Marketing & AI Automation",
    description:
      "Website design, digital marketing and AI automation for businesses across Ambikapur, Surajpur and Chhattisgarh.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CG29Solutions | Website Design, Digital Marketing & AI Automation",
    description:
      "Website design, social media management, Meta Ads and AI automation for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en-IN">
  <head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CG29Solutions",
          url: "https://cg29solutions.com",
          description:
            "Website design, social media management, Meta Ads, video editing, script writing and AI automation for businesses.",
          areaServed: [
            {
              "@type": "City",
              name: "Ambikapur",
            },
            {
              "@type": "City",
              name: "Surajpur",
            },
            {
              "@type": "AdministrativeArea",
              name: "Chhattisgarh",
            },
          ],
          sameAs: [
            "https://www.instagram.com/cg29solution/",
            "https://www.facebook.com/cg29solutions/",
            "https://www.linkedin.com/in/satyam-yadavv/",
          ],
        }),
      }}
    />
  </head>
  <body>{children}</body>
</html>
  );
}

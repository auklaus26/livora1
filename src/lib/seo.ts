import type { Metadata } from "next";

export const siteUrl = "https://livoracare.com.au";

export const siteName = "Livora Care";

export const defaultDescription =
  "Registered NDIS provider delivering Supported Independent Living and person-centred disability supports across Melbourne.";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
    },
  };
}

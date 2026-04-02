import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repo.toLowerCase().endsWith(".github.io");
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "true";
const basePath = isGithubPagesBuild && repo && !isUserOrOrgSite ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;

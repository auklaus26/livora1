"use client";

import { usePathname } from "next/navigation";

const backgroundPhotos = [
  "/photos/iStock-6.jpg",
  "/photos/iStock-5.jpg",
  "/photos/iStock-7.jpg",
  "/photos/iStock-3.jpg",
];

const routePhotoMap = [
  { route: "/", photo: backgroundPhotos[0] },
  { route: "/contact", photo: backgroundPhotos[2] },
  { route: "/about", photo: backgroundPhotos[1] },
  { route: "/services/sil", photo: backgroundPhotos[2] },
  { route: "/referrers", photo: backgroundPhotos[3] },
  { route: "/referrals/new", photo: backgroundPhotos[0] },
  { route: "/privacy", photo: backgroundPhotos[1] },
  { route: "/participant-rights", photo: backgroundPhotos[2] },
  { route: "/complaints", photo: backgroundPhotos[3] },
  { route: "/terms", photo: backgroundPhotos[0] },
] as const;

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getBackgroundPhoto(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  const match = routePhotoMap.find(({ route }) =>
    route === "/"
      ? normalizedPathname === "/"
      : normalizedPathname === route || normalizedPathname.startsWith(`${route}/`)
  );

  if (match) {
    return match.photo;
  }

  return null;
}

export function PageBackground() {
  const pathname = usePathname();
  const photo = getBackgroundPhoto(pathname);

  if (!photo) {
    return null;
  }

  return (
    <div aria-hidden="true" className="page-photo-background">
      <div className="page-photo-background__image" style={{ backgroundImage: `url("${photo}")` }} />
      <div className="page-photo-background__wash" />
    </div>
  );
}

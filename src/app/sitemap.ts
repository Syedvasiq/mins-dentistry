import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minsdentistry.com";

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",                               priority: 1.0, changeFrequency: "weekly" },
  { path: "/about",                         priority: 0.9, changeFrequency: "monthly" },
  { path: "/meet-the-doctor",               priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact",                       priority: 0.9, changeFrequency: "monthly" },
  // Hub pages
  { path: "/dental-implants",               priority: 0.9, changeFrequency: "monthly" },
  { path: "/general-restorative-dentistry", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cosmetic-dentistry",            priority: 0.9, changeFrequency: "monthly" },
  { path: "/orthodontics",                  priority: 0.9, changeFrequency: "monthly" },
  { path: "/gum-care",                      priority: 0.9, changeFrequency: "monthly" },
  // Implants
  { path: "/single-tooth-implant",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/multiple-tooth-implants",       priority: 0.8, changeFrequency: "monthly" },
  { path: "/full-mouth-rehabilitation",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/bone-grafting",                 priority: 0.8, changeFrequency: "monthly" },
  { path: "/implant-consultation",          priority: 0.8, changeFrequency: "monthly" },
  // General & Restorative
  { path: "/dental-consultation",           priority: 0.8, changeFrequency: "monthly" },
  { path: "/root-canal-treatment",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/tooth-filling",                 priority: 0.8, changeFrequency: "monthly" },
  { path: "/dental-crowns",                 priority: 0.8, changeFrequency: "monthly" },
  { path: "/dental-bridges",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/dentures",                      priority: 0.8, changeFrequency: "monthly" },
  { path: "/tooth-extraction",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/emergency-dental-care",         priority: 0.8, changeFrequency: "monthly" },
  // Cosmetic
  { path: "/teeth-whitening",              priority: 0.8, changeFrequency: "monthly" },
  { path: "/smile-makeover",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/dental-veneers",               priority: 0.8, changeFrequency: "monthly" },
  // Orthodontics
  { path: "/invisible-aligners",           priority: 0.8, changeFrequency: "monthly" },
  { path: "/metal-braces",                 priority: 0.8, changeFrequency: "monthly" },
  { path: "/ceramic-braces",               priority: 0.8, changeFrequency: "monthly" },
  // Gum Care
  { path: "/gum-treatment",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/flap-surgery",                priority: 0.8, changeFrequency: "monthly" },
  { path: "/frenectomy",                  priority: 0.8, changeFrequency: "monthly" },
  { path: "/gingival-depigmentation",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/lip-repositioning",           priority: 0.8, changeFrequency: "monthly" },
  { path: "/ridge-augmentation",          priority: 0.8, changeFrequency: "monthly" },
  { path: "/vestibuloplasty",             priority: 0.8, changeFrequency: "monthly" },
  { path: "/mucogingival-surgeries",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/gingival-recession-therapy",  priority: 0.8, changeFrequency: "monthly" },
  { path: "/recession-therapy",           priority: 0.8, changeFrequency: "monthly" },
  // Other
  { path: "/before-after",               priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials",               priority: 0.7, changeFrequency: "monthly" },
  { path: "/faqs",                       priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

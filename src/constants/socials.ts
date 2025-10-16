// Centralized social links used across the site.
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nasr-qasim-roonjha/",
  facebook: "https://www.facebook.com/nasrullah.roonjha.10",
  instagram: "https://www.instagram.com/itsmecaptainnasr/",
  github: "https://github.com/nasrqasim",
  youtube: "https://www.youtube.com/@Nasrqasimroonjha",
  twitter: "https://x.com/", // update if you have a specific handle
  email: "mailto:nasrqasimroonjha10@gmail.com",
};

export type SocialKey = keyof typeof SOCIAL_LINKS;

export const ORDERED_SOCIAL_KEYS: SocialKey[] = [
  "linkedin",
  "facebook",
  "instagram",
  "github",
  "youtube",
  "twitter",
];



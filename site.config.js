const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rizky Indrabayu",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI | NLP | Backend Developer",
    bio: "Love cats",
    email: "rizkyindra2082@gmail.com",
    linkedin: "rizky-indrabayu-ab0a66272",
    github: "bayyy7",
    instagram: "",
  },
  projects: [
    {
      title: "AI Developer",
      year: "2024 - Current",
      company: "Dwidasa - PAC Group",
      href: "https://pactindo.com/home/",
    },
    {
      title: "Founder and Developer",
      year: "2024 - Current",
      company: "MentalChat.id",
      href: "https://www.instagram.com/mentalchat.id/",
    },
    {
      title: "AI Research Assistant",
      year: "2023 - 2024",
      company: "Informatika - UMM",
      href: "https://informatika.umm.ac.id",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Indrabayu Blog",
    description: "Welcome to my Blog!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2017, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["AI", "Machine Learning", "NLP", "Website", "Tutorial"]
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 4, // revalidate time for [slug], index
}

module.exports = { CONFIG }

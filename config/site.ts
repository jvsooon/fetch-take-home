export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Fetch Frontend Take-Home",
  description: "A website to help a dog-lover like yourself search through a database of shelter dogs, with the hope of finding a lucky dog a new home!",
  navItems: [
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "Match",
      href: "/match",
    }
  ],
  navMenuItems: [
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "Match",
      href: "/match",
    }
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

import type {
  GiscusConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Kurumi30',
  subtitle: 'Portfolio | Blog',
  lang: 'pt_br',
  themeColor: {
    hue: 280, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.jpg', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,
      text: '',
      url: '',
    },
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/Kurumi30', // Internal links should not include the base path, as it is automatically added
    //   external: true, // Show an external link icon and will open in a new tab
    // },
    {
      name: 'Linktree',
      url: 'https://fz-linktree.vercel.app',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Fernando Zhu',
  bio: 'I am atomic',
  links: [
    // Visit https://icones.js.org/ for icon codes
    // You will need to install the corresponding icon set if it's not already included
    // `pnpm add @iconify-json/<icon-set-name>`

    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Kurumi30',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/fernando-zhu-desenvolvedor-web/',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:fernandoshengxinzhu@gmail.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const giscusConfig: GiscusConfig = {
  enable: true,
  repo: 'Kurumi30/astro-blog',
  repoId: 'R_kgDOMDsSBw',
  category: 'General',
  categoryId: 'DIC_kwDOMDsSB84Cfyhq',
}

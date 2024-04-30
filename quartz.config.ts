import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌐🌿",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://backendgarden.com",
    ignorePatterns: ["private", "templates", "templater", ".obsidian", "journal"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lexend",
        body: "Lexend",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffcf9",
          lightgray: "#f4eae2",
          gray: "#e0d4c3",
          darkgray: "#958779",
          dark: "#6e594f",
          secondary: "#5b7c99",
          tertiary: "#b2ceb8",
          highlight: "rgba(173, 192, 198, 0.15)",
        },
        darkMode: {
          light: "#332f2c",
          lightgray: "#514c47",
          gray: "#827d75",
          darkgray: "#ece4dc",
          dark: "#f5efe7",
          secondary: "#9eb6c1",
          tertiary: "#c5d6ca",
          highlight: "rgba(193, 207, 213, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter" ,"git", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

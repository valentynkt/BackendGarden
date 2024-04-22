import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="valentynkt/BackendGarden"
        data-repo-id="R_kgDOLxntQQ"
        data-category="General"
        data-category-id="DIC_kwDOLxntQc4Ce2yN"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></script>
    )
  }
  return Footer
}) satisfies QuartzComponentConstructor

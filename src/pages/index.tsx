import React from "react"
import { Link } from "gatsby"

// FIXME : gatsby로 빌드 돌릴때는 문제가 없지만 VSCode에서는 빨간줄떠서 해결하긴 해야함.
import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br />
    <Link to="/hall-of-fame/">Go to "Hall Of Fame"</Link>
  </Layout>
)

export default IndexPage

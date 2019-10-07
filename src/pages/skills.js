import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => (
    <Layout>
        <SEO title="Skills" />
        <h1>Skills</h1>
        <h2>Languages</h2>
        <h3>Proficient</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Scala</li>
        </ul>
        <h3>Familiar</h3>
        <ul>
            <li>Python</li>
            <li>C++</li>
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Skills   
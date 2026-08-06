import styles from "./App.module.css"

const App = () => (
  <main className={styles.container}>
    <h1>Nicholas Ashford</h1>
    <p>
      Software Engineer · Distributed Systems, Cloud Infrastructure &amp;
      Agentic AI
    </p>
    <a href="mailto:nick@nickashford.com">nick@nickashford.com</a>
    <p className={styles.links}>
      <a href="/nicholas-ashford-cv.pdf" download>
        Download PDF
      </a>
    </p>
    <section>
      <p>
        I'm a software engineer and systems programmer, currently CTO of
        Education Intelligence, where the platform is built in TypeScript, Go
        and Rust. I own its infrastructure and security posture end to end,
        from the microservices and message brokers down to the Kubernetes
        clusters on Google Cloud. Over the
        past year I've also rebuilt the company to be AI-native, with agents
        that implement our tickets, sit in our planning calls, and connect to
        every system in the business. I'm a hacker and a builder, comfortable
        working in a team or on my own, at ease with the unfamiliar, and happy
        picking problems apart.
      </p>
    </section>
    <hr />
    <h2>Highlights</h2>
    <section>
      <ul>
        <li>
          <strong>Agentic delivery:</strong> built a multi-agent software
          factory pipeline, with productivity gains that have let the business
          absorb natural attrition without replacement hires.
        </li>
        <li>
          <strong>Systems programming:</strong> fault-tolerant, idempotent
          microservices in Go and Rust that absorb extremely spiky traffic.
        </li>
        <li>
          <strong>Infrastructure:</strong> owned cloud infrastructure across
          roles in AWS, Azure and Google Cloud, built with Terraform and
          Kubernetes.
        </li>
        <li>
          <strong>Custom integrations:</strong> energy-provider API
          integrations at uSwitch and Switcher.ie, on-prem data extraction
          inside schools, MCP proxies for closed SaaS products.
        </li>
        <li>
          <strong>Voice agent:</strong> joins project management calls and
          raises contextualised tickets from the conversation.
        </li>
        <li>
          <strong>MCP infrastructure:</strong> custom MCP connectors and
          proxies for the systems that lacked them.
        </li>
        <li>
          <strong>Early CI:</strong> built an automated
          pull-request-to-production pipeline at uSwitch, before mainstream CI
          tooling existed.
        </li>
      </ul>
    </section>
    <hr />
    <h2>Experience</h2>
    <section>
      <h3>Lead Engineer &amp; CTO</h3>
      <h4>Education Intelligence (Teacher Tapp &amp; School Surveys)</h4>
      <div>January 2021 – Present</div>
      <p>
        <em>
          Education research business running the UK's largest daily teacher
          survey panel, with thousands of teachers responding every day.
        </em>
      </p>
      <ul>
        <li>
          Rebuilt the Teacher Tapp app from an MVP into TypeScript and React
          Native on a distributed backend.
        </li>
        <li>
          Took the School Surveys MVP to a production-grade platform in
          TypeScript and Rust.
        </li>
        <li>
          Architected both platforms as idempotent microservices communicating
          over message brokers, with queue consumers written in Go.
        </li>
        <li>
          Migrated the Teacher Tapp infrastructure from Azure to Google Cloud.
        </li>
        <li>
          Now responsible for two distributed, fault-tolerant platforms and
          nine TypeScript applications across the two businesses.
        </li>
        <li>
          Designed and built a multi-agent pipeline: a workflow of agents
          implements tickets from specifications and acceptance criteria,
          raises pull requests, and ships only after automated tests and human
          review.
        </li>
        <li>
          Built a voice agent that joins project management calls, listens to
          the discussion and raises contextualised tickets, replacing the
          Kanban board.
        </li>
        <li>
          Rolled AI out to every member of the business and connected its
          systems to Claude via MCP, including a proxy service that exposes MCP
          connectors for SaaS products that lack them.
        </li>
        <li>
          Built and led a team of engineers, mentoring each of them through to
          more senior roles.
        </li>
        <li>
          Responsible for security: protecting sensitive survey and school
          data, hardening infrastructure, and remediating findings from
          security testing.
        </li>
        <li>
          Established the end-to-end product process: specification, design,
          build, release and analytics.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Senior Software Engineer</h3>
      <h4>Switcher.ie</h4>
      <div>February 2019 – January 2021 · Dublin</div>
      <ul>
        <li>
          Part of a small team of senior engineers building the service-oriented
          platform behind Ireland's leading comparison site, handling lead
          capture from the website.
        </li>
        <li>
          Designed and built the framework for distributing leads to the utility
          providers.
        </li>
        <li>
          Owned the infrastructure: preview, staging and production environments
          and their monitoring, built with Terraform and Kubernetes on AWS.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Lead Software Engineer</h3>
      <h4>Assembly Edu · a NEON Adventures venture</h4>
      <div>January 2016 – March 2019 · London</div>
      <ul>
        <li>
          Helped establish the company: structured as a 50/50 partnership
          between NEON's investment arm and an education provider, with the
          platform built from the ground up.
        </li>
        <li>
          Designed and built the MIS Connector, a .NET ETL system running on
          servers inside schools, extracting sensitive management information
          data and syncing it to the cloud.
        </li>
        <li>
          Wrote the cloud processing pipeline that turned raw school data into a
          queryable database, consumed by third-party education providers for
          analysis.
        </li>
        <li>
          Owned the infrastructure (AWS) and a substantial share of the Ruby
          platform.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Senior Developer</h3>
      <h4>NEON Adventures</h4>
      <div>January 2014 – January 2017 · London &amp; New York</div>
      <ul>
        <li>
          Consulting and tech leadership on client projects for a venture
          studio, spanning charities and consumer brands.
        </li>
        <li>
          Built interactive 3D visualisations for a professional cycling team's
          website, at a time when 3D in the browser was still rare.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Senior Graphics Programmer</h3>
      <h4>Sony Computer Entertainment Europe</h4>
      <div>February 2012 – January 2014 · London</div>
      <ul>
        <li>
          Graphics programmer on Harry Potter titles for PlayStation 3
          (C++/GPU), on the team responsible for special effects and
          integrating the art-tool pipeline.
        </li>
        <li>
          Built a real-time fluid simulation for the potion cauldron,
          implementing the Navier-Stokes equations in shaders on the PS3 GPU.
        </li>
        <li>
          Implemented augmented-reality features using the PlayStation Eye,
          projecting a handheld device into in-game 3D environments.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Senior Developer</h3>
      <h4>Forward Internet Group (uSwitch)</h4>
      <div>July 2008 – February 2012 · London</div>
      <ul>
        <li>
          Full-stack development on uSwitch.com's gas and electricity comparison
          products: lead capture, processing and integrations with energy
          providers.
        </li>
        <li>
          Built the company's internal deployment system: pull requests from up
          to 100 engineers triggered an automated pipeline through to
          production.
        </li>
        <li>
          Founded and ran an iOS games studio within Forward's incubator: hired
          the team, then led development, release and marketing of a C++ iOS
          game over the course of a year.
        </li>
      </ul>
    </section>
    <hr />
    <h2>Skills &amp; Technologies</h2>
    <section>
      <ul>
        <li>
          <strong>Cloud &amp; infrastructure:</strong> AWS, Google Cloud
          Platform, Azure, Terraform, Kubernetes, event-driven architecture,
          message brokers, CI/CD pipelines, preview/staging/production
          environment provisioning, monitoring
        </li>
        <li>
          <strong>AI &amp; agentic engineering:</strong> LLM orchestration and
          prompt engineering, agentic development workflows, multi-agent
          pipelines, MCP connector and proxy development, generative AI,
          machine learning, PyTorch
        </li>
        <li>
          <strong>Languages:</strong> TypeScript, Go, Rust, C++, Python,
          JavaScript, C#, Ruby, Java, SQL
        </li>
        <li>
          <strong>Graphics &amp; simulation:</strong> GPU and shader
          programming, real-time fluid simulation, 3D mathematics, augmented
          reality
        </li>
        <li>
          <strong>Data &amp; integrations:</strong> ETL pipelines, on-premise
          data extraction, third-party API integrations, Microsoft SQL Server,
          large-scale data processing
        </li>
        <li>
          <strong>Web &amp; mobile:</strong> React, Node.js, .NET, iOS, Android
        </li>
        <li>
          <strong>Leadership &amp; practice:</strong> team building and
          mentoring, agile delivery, test-driven development, service-oriented
          architecture
        </li>
      </ul>
    </section>
    <hr />
    <h2>Location</h2>
    <section>
      <p>
        British citizen based in Dubai, with a route to EU residence and work
        through my German spouse.
      </p>
    </section>
  </main>
)

export default App

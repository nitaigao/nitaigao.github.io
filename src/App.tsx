import styles from "./App.module.css"

const App = () => (
  <main className={styles.container}>
    <h1>Nicholas Ashford</h1>
    <section>
      <p>nkostelnik@gmail.com</p>
      <p>
        I'm a software engineer and systems programmer, currently CTO of
        Education Intelligence, the research business behind Teacher Tapp and
        School Surveys, where the platform is built in TypeScript and Rust.
        Over the past year I've rebuilt the company to be AI-native, work that
        sits on top of a systems background spanning production Rust platforms
        and GPU programming. I'm always happy to be handed a challenge or
        something broken, and to take it apart to find out exactly why.
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
          <strong>Voice agent:</strong> joins project management calls and
          raises contextualised tickets from the conversation.
        </li>
        <li>
          <strong>MCP infrastructure:</strong> AI in the hands of everyone in
          the business, with custom MCP connectors and proxies for the systems
          that lacked them.
        </li>
        <li>
          <strong>Custom integrations:</strong> on-prem data extraction inside
          schools, utility-provider integrations at Switcher.ie and uSwitch,
          MCP proxies for closed SaaS products.
        </li>
        <li>
          <strong>Systems programming:</strong> two production Rust platforms that
          absorb half of each day's traffic in a ten-minute window; real-time
          Navier-Stokes fluid simulation on the PlayStation 3 GPU.
        </li>
        <li>
          <strong>Infrastructure:</strong> owned cloud infrastructure across
          AWS, Google Cloud and Azure, built with Terraform and Kubernetes.
        </li>
        <li>
          <strong>Early CI:</strong> built an automated
          pull-request-to-production pipeline before mainstream CI tooling
          existed.
        </li>
      </ul>
    </section>
    <hr />
    <h2>Relevant Experience</h2>
    <section>
      <h3>Lead Engineer &amp; CTO</h3>
      <h4>Education Intelligence (Teacher Tapp &amp; School Surveys)</h4>
      <div>January 2021 – Present</div>
      <p>
        <em>
          Education research business running the UK's largest daily teacher
          survey panel: thousands of teachers respond every day, and the
          resulting data is used by policymakers, academics and the national
          press.
        </em>
      </p>
      <ul>
        <li>
          Designed and built a multi-agent pipeline where coding agents
          (Claude, Codex) implement human-specified tickets and raise pull
          requests for review.
        </li>
        <li>
          Built a voice-driven project management agent that joins company
          calls, listens to the discussion and raises contextualised tickets,
          replacing the Kanban board.
        </li>
        <li>
          Rolled AI out to every member of the business and connected its
          systems to Claude via MCP, including a proxy service that exposes
          MCP connectors for SaaS products that lack them.
        </li>
        <li>
          Rebuilt the Teacher Tapp app from an outsourced MVP (hybrid app with
          a Microsoft SQL Server backend) into TypeScript and React Native
          over the course of a year, establishing test-driven development and
          agile delivery as standard practice.
        </li>
        <li>Took the School Surveys MVP to a production-grade platform.</li>
        <li>
          Now responsible for two Rust backend platforms and nine TypeScript
          web applications across the two businesses.
        </li>
        <li>
          Engineered the platform for a spiky load profile: the daily survey
          lands at a fixed time, so half of each day's traffic
          arrives within the same ten-minute window and the system is designed
          to absorb that surge every day.
        </li>
        <li>
          Built and led a team of four engineers, mentoring each of them
          through to more senior roles.
        </li>
        <li>
          Delivered productivity gains that have allowed the business to absorb
          natural attrition without replacement hires.
        </li>
        <li>
          Established the end-to-end product pipeline (specification, design
          through a retained agency, MVP build, release and analytics) so the
          business can take products from concept to launch.
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
          Designed and built the framework for distributing leads to the
          utility providers.
        </li>
        <li>
          Owned the infrastructure: preview, staging and production
          environments and their monitoring, built with Terraform and
          Kubernetes.
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <h3>Lead Software Engineer</h3>
      <h4>Assembly Edu</h4>
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
          Consulted on client projects for a venture studio, spanning charities
          and consumer brands.
        </li>
        <li>
          Built an interactive 3D bike visualisation for a professional cycling
          team's website, at a time when 3D in the browser was still rare.
        </li>
        <li>
          Built backends for charity clients including kindness.org and charity:
          water, plus a client-management system for a further charity.
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
          (C++/GPU), on the team responsible for special effects and integrating
          the art-tool pipeline.
        </li>
        <li>
          Built a real-time fluid simulation for the potion cauldron,
          implementing the Navier-Stokes equations in shaders on the PS3 GPU.
        </li>
        <li>
          Implemented the 3D mathematics for augmented-reality features using
          the PlayStation Eye, projecting a handheld device into in-game 3D
          environments.
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
          <strong>AI &amp; agentic engineering:</strong> LLM orchestration and
          prompt engineering, agentic development workflows (Claude, Codex),
          multi-agent pipelines, MCP connector and proxy development, generative
          AI, machine learning, PyTorch
        </li>
        <li>
          <strong>Languages:</strong> TypeScript, Rust, Go, C++, Python,
          JavaScript, C#, Ruby, Java, SQL
        </li>
        <li>
          <strong>Cloud &amp; infrastructure:</strong> AWS, Google Cloud
          Platform, Azure, Terraform, Kubernetes, CI/CD pipelines,
          preview/staging/production environment provisioning, monitoring
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
          mentoring, product strategy, board reporting, agile delivery,
          test-driven development, service-oriented architecture
        </li>
      </ul>
    </section>
    <hr />
    <h2>Location</h2>
    <section>
      <p>
        Dubai. Open to relocating to Malta if required (EU right to work
        through spouse).
      </p>
    </section>
  </main>
)

export default App

import styles from "./App.module.css"

const App = () => (
  <main className={styles.container}>
    <h1>Nicholas Ashford</h1>
    <section>
      <p>Dubai, nkostelnik@gmail.com</p>
      <p>
        Software engineer and systems programmer, currently CTO of Education
        Intelligence, the research business behind Teacher Tapp and School
        Surveys. Rebuilt the company AI-native over the past few years —
        agentic delivery is now the default way code ships — on top of a
        systems background spanning production Rust platforms and GPU
        programming on PlayStation 3. Happiest when handed something broken:
        taking it apart to find out exactly why.
      </p>
    </section>
    <h2>Highlights</h2>
    <section>
      <ul>
        <li>
          <strong>Agentic software delivery in production:</strong> built the
          multi-agent pipeline that is now the default way code ships at
          Education Intelligence — with productivity gains that have let the
          business absorb natural attrition without replacement hires.
        </li>
        <li>
          <strong>Voice-native project management:</strong> an agent that joins
          company calls and raises contextualised tickets from the conversation.
        </li>
        <li>
          <strong>MCP infrastructure:</strong> AI in the hands of everyone in
          the business, with custom MCP connectors and proxies for the systems
          that lacked them.
        </li>
        <li>
          <strong>Custom integrations against messy real-world systems:</strong>{" "}
          on-prem data extraction inside schools, utility-provider integrations
          at Switcher.ie and uSwitch, MCP proxies for closed SaaS products.
        </li>
        <li>
          <strong>Systems programming:</strong> two production Rust platforms that
          absorb half of each day's traffic in a ten-minute window; real-time
          Navier–Stokes fluid simulation on the PlayStation 3 GPU.
        </li>
        <li>
          <strong>Infrastructure:</strong> owned the
          Terraform and Kubernetes environments at Switcher.ie; cloud
          infrastructure ownership continuing at Education Intelligence today.
        </li>
        <li>
          <strong>Early CI:</strong> built an automated
          pull-request-to-production pipeline for up to 100 engineers at
          uSwitch, before mainstream CI tooling existed.
        </li>
      </ul>
    </section>
    <h2>Relevant Experience</h2>
    <section>
      <h3>Chief Technology Officer</h3>
      <h4>Education Intelligence (Teacher Tapp &amp; School Surveys)</h4>
      <div>January 2021 – Present</div>
      <p>
        <em>
          Education research business running the UK's largest daily teacher
          survey panel — thousands of teachers respond every day, and the
          resulting data is used by policymakers, academics and the national
          press.
        </em>
      </p>
      <ul>
        <li>
          Designed and built a multi-agent pipeline where coding agents
          (Claude, Codex) implement human-specified tickets and raise pull
          requests for review — now the default way code ships.
        </li>
        <li>
          Built a voice-driven project management agent that joins company
          calls, listens to the discussion and raises contextualised tickets,
          replacing the Kanban board.
        </li>
        <li>
          Rolled AI out to every member of the business and connected its
          systems to Claude via MCP — including building a proxy service that
          exposes MCP connectors for SaaS products that lack them.
        </li>
        <li>
          Rebuilt the Teacher Tapp product from an outsourced MVP (hybrid app
          with a Microsoft SQL Server backend) into a modern web platform over
          the course of a year, establishing test-driven development and agile
          delivery as standard practice.
        </li>
        <li>
          Took the School Surveys MVP to a production-grade platform; now
          responsible for two Rust backend platforms and nine TypeScript web
          applications across the two businesses.
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
          Established the end-to-end product pipeline — specification, design
          (through a retained agency), MVP build, release and analytics — so the
          business can take products from concept to launch.
        </li>
        <li>
          Attend board meetings and contribute to company strategy alongside
          setting technical vision and direction.
        </li>
      </ul>
    </section>
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
          Built an interactive 3D bike viewer for a professional cycling team's
          website, at a time when 3D in the browser was still rare.
        </li>
        <li>
          Built backends for charity clients including kindness.org and charity:
          water, plus a client-management system for a further charity.
        </li>
      </ul>
    </section>
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
          implementing the Navier–Stokes equations in shaders on the PS3 GPU.
        </li>
        <li>
          Implemented the 3D mathematics for augmented-reality features using
          the PlayStation Eye, projecting a handheld device into in-game 3D
          environments.
        </li>
        <li>
          Contributed gameplay programming alongside graphics work.
        </li>
      </ul>
    </section>
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
          <strong>Languages:</strong> Rust, C++, TypeScript, Go, Python, C#,
          JavaScript, Ruby, Java, SQL
        </li>
        <li>
          <strong>Cloud &amp; infrastructure:</strong> AWS, Google Cloud
          Platform, Terraform, Kubernetes, CI/CD pipelines,
          preview/staging/production environment provisioning, monitoring
        </li>
        <li>
          <strong>Graphics &amp; simulation:</strong> GPU and shader
          programming, DirectX, real-time fluid simulation, 3D mathematics,
          augmented reality
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
  </main>
)

export default App

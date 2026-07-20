import { type PageComponent, Link } from 'rasengan';
import Image from '@rasenganjs/image';
import AppShell from '@/components/AppShell';

const experiences = [
  {
    period: 'Current',
    organization: 'TIB · Leibniz University Hannover',
    role: 'PhD Researcher',
    text: 'Researching the Neuro-Symbolic Organization of Scientific Knowledge while contributing to AI-supported tools for scholarly work, including TIB AIssistant and TIB MCP.',
    tags: ['Neuro-symbolic AI', 'HCI', 'Knowledge graphs'],
  },
  {
    period: 'Since 2025',
    organization: 'TSOTSA · Food Information Engineering',
    role: 'Lead Developer',
    text: 'Leading the development of the TSOTSA platform and its supporting food-data, annotation and knowledge-processing workflows.',
    tags: ['Full-stack development', 'Food data', 'RAG'],
  },
  {
    period: 'Jan — Nov 2025',
    organization: 'SemTab @ ISWC',
    role: 'Co-chair',
    text: 'Co-organized SemTab 2025, designed evaluation tasks and performance metrics for SecuTable, contributed to system evaluation and helped prepare the challenge report.',
    tags: ['Benchmark design', 'Evaluation', 'Community'],
  },
  {
    period: 'Jan 2024 — Dec 2025',
    organization: 'TIB · Software Engineering & HCI',
    role: 'Scholarship Research Student',
    text: 'Worked on HCI for scholarly communication, multimodal food search and the augmentation of language models with food knowledge from the Open Research Knowledge Graph.',
    tags: ['Software engineering', 'Multimodal search', 'ORKG'],
  },
  {
    period: '2024',
    organization: 'SemTab @ ISWC · TSOTSA Team',
    role: 'Challenge Participant',
    text: 'Contributed to a GPT-based semantic table annotation system combining prompting, fine-tuning and rules, with top-performing results in the Accuracy and STI vs LLMs tracks.',
    tags: ['Semantic tables', 'GPT models', 'Team research'],
  },
];

const Home: PageComponent = () => (
  <AppShell className="home-page">
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> PhD student at TIB · Hannover</p>
        <h1 className="hero-title">
          <span>Hi, I&apos;m</span>
          <span className="generated-name-box"><span className="generated-name">Jean Petit BIKIM</span></span>
        </h1>
        <p className="hero-text">
          I am a PhD student at TIB and Leibniz University Hannover. I investigate
          how artificial intelligence, human-computer interaction and knowledge graphs
          can make scientific knowledge easier to organize, access and reuse.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">Explore my projects</Link>
          <Link className="button button-secondary" to="/publications">View publications</Link>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portrait of Jean Petit BIKIM">
        <div className="portrait-frame">
          <div className="hero-portrait">
            <Image src="/pp.jpeg" alt="Jean Petit BIKIM" width={2560} height={1927} loading="eager" mode="blur" objectfit="cover" />
          </div>
          <span className="portrait-caption">Researcher · Full-stack developer</span>
        </div>
      </div>
    </section>

    <section className="home-facts" aria-label="Profile highlights">
      <div><strong>PhD</strong><span>TIB · Leibniz University Hannover</span></div>
      <div><strong>04</strong><span>Publicly indexed publications</span></div>
      <div><strong>02</strong><span>SemTab 2024 winning tracks</span></div>
      <div><strong>2025</strong><span>SemTab co-chair</span></div>
    </section>

    <section className="practice-section section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Research &amp; engineering</p>
          <h2>From scientific questions<br />to <span>usable systems.</span></h2>
        </div>
        <p>
          My work sits between research and implementation: I study how people interact
          with knowledge, then turn those findings into tools researchers can actually use.
        </p>
      </div>
      <div className="practice-grid">
        <article><span>01</span><h3>Neuro-symbolic AI</h3><p>Combining language models with structured knowledge to organize and retrieve scientific information.</p></article>
        <article><span>02</span><h3>Research interfaces</h3><p>Designing AI-supported interactions for scholarly communication, exploration and knowledge reuse.</p></article>
        <article><span>03</span><h3>Knowledge systems</h3><p>Building full-stack assistants, MCP tools, RAG pipelines and knowledge-graph applications.</p></article>
      </div>
    </section>

    <section className="current-work-section">
      <div className="section-shell current-work-inner">
        <div className="compact-heading">
          <p className="eyebrow">Building now</p>
          <h2>Research that ships.</h2>
        </div>
        <div className="work-list">
          <a href="https://gitlab.com/TIBHannover/orkg/tib-aissistant" target="_blank" rel="noreferrer">
            <span>TIB · AI-supported research</span><strong>TIB AIssistant</strong><p>AI assistants supporting researchers across the research life cycle.</p><small>LLMs · Agents · Research workflows</small>
          </a>
          <a href="https://gitlab.com/TIBHannover/orkg/tib-aissistant/tib-mcp" target="_blank" rel="noreferrer">
            <span>TIB · Scholarly infrastructure</span><strong>TIB MCP</strong><p>MCP-compatible access to scholarly tools and research data services.</p><small>MCP · Tooling · Integrations</small>
          </a>
          <a href="https://tsotsa.org" target="_blank" rel="noreferrer">
            <span>Food information engineering</span><strong>TSOTSA</strong><p>Making food and nutrition information easier to search, understand and reuse.</p><small>Food data · RAG · Knowledge graphs</small>
          </a>
        </div>
        <Link className="text-link" to="/projects">See all projects</Link>
      </div>
    </section>

    <section className="profile-section section-shell">
      <div className="compact-heading">
        <p className="eyebrow">Profile</p>
        <h2>Research depth.<br /><span>Engineering range.</span></h2>
      </div>
      <div className="profile-grid">
        <article><span>Doctoral research</span><h3>Neuro-Symbolic Organization of Scientific Knowledge</h3><p>Research at TIB under the supervision of Prof. Dr. Sören Auer and Dr. Azanzi Jiomekong.</p></article>
        <article><span>Background</span><h3>Information Systems &amp; Software Engineering</h3><p>Master and Bachelor in Computer Science at the University of Yaoundé 1.</p></article>
        <article><span>Technical practice</span><h3>AI, product and infrastructure</h3><p>Python, JavaScript, React, FastAPI, Django, LLMs, RAG, knowledge graphs, Docker, AWS and Kubernetes.</p></article>
      </div>
    </section>

    <section className="experience-section">
      <div className="experience-inner section-shell">
        <div className="section-heading experience-heading">
          <div><p className="eyebrow">Experience</p><h2>Research, engineering<br />and <span>delivery.</span></h2></div>
          <p>My experience connects academic research, full-stack engineering and international benchmark organization.</p>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.role + experience.organization}>
              <div className="experience-period"><span>{String(index + 1).padStart(2, '0')}</span><strong>{experience.period}</strong></div>
              <div className="experience-title"><span>{experience.organization}</span><h3>{experience.role}</h3></div>
              <div className="experience-description"><p>{experience.text}</p><div>{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="recognition-section section-shell">
      <div className="section-heading recognition-heading">
        <div><p className="eyebrow">Awards</p><h2>IBM Research Award<br /><span>at ISWC 2024.</span></h2></div>
        <p>Recognized for the TSOTSA Team&apos;s top-performing systems in both the Accuracy and STI vs LLMs tracks of SemTab 2024.</p>
      </div>
      <div className="award-grid">
        <figure><img src="/accuracyTrack.png" alt="IBM Research Award -- SemTab Accuracy track" /><figcaption><strong>Accuracy Track</strong><span>Top-performing system</span></figcaption></figure>
        <figure><img src="/aSTI vs LLMs track.png" alt="IBM Research Award -- SemTab STI versus LLMs track" /><figcaption><strong>STI vs LLMs Track</strong><span>Top-performing system</span></figcaption></figure>
      </div>
    </section>

    <section className="language-section">
      <div className="language-inner section-shell">
        <div className="compact-heading">
          <p className="eyebrow">Languages</p>
          <h2>Languages I<br /><span>work in.</span></h2>
        </div>
        <div className="language-list">
          <article><span>01</span><div><h3>French</h3><p>Native</p></div></article>
          <article><span>02</span><div><h3>English</h3><p>Fluent</p></div></article>
        </div>
      </div>
    </section>

  </AppShell>
);

Home.path = '/';
Home.metadata = {
  title: 'Jean Petit BIKIM — AI Researcher & Full-stack Developer',
  description: 'Portfolio of Jean Petit BIKIM, PhD student at TIB working on AI, human-computer interaction and knowledge graphs.',
};

export default Home;

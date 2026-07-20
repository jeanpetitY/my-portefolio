import { type PageComponent } from 'rasengan';
import AppShell from '@/components/AppShell';

const projects = [
  {
    number: '01',
    type: 'AI-supported research',
    title: 'TIB AIssistant',
    text: 'A platform of AI assistants supporting researchers from ideation and literature analysis to methodology, data analysis and scholarly writing.',
    tags: ['LLMs', 'Agents', 'Research workflows'],
    href: 'https://gitlab.com/TIBHannover/orkg/tib-aissistant',
  },
  {
    number: '02',
    type: 'Scholarly infrastructure',
    title: 'TIB MCP',
    text: 'A Model Context Protocol server that makes scholarly tools and research data services available to MCP-compatible AI assistants.',
    tags: ['MCP', 'FastMCP', 'Scholarly tools'],
    href: 'https://gitlab.com/TIBHannover/orkg/tib-aissistant/tib-mcp',
  },
  {
    number: '03',
    type: 'Food information engineering',
    title: 'TSOTSA',
    text: 'A food information platform connecting search, structured knowledge and intelligent assistance to improve access to nutrition information.',
    tags: ['Food data', 'RAG', 'Knowledge graphs'],
    href: 'https://tsotsa.org',
  },
  {
    number: '04',
    type: 'Open research dataset',
    title: 'TSOTSAGraph',
    text: 'An open and citable graph dataset supporting research and experimentation in food information engineering.',
    tags: ['Food data', 'Graph dataset', 'Open research'],
    href: 'https://zenodo.org/records/20574941',
  },
];

const Projects: PageComponent = () => (
  <AppShell className="inner-page projects-page">
    <header className="inner-hero section-shell">
      <div>
        <p className="eyebrow">Projects · 04</p>
        <h1>Research<br /><span>in practice.</span></h1>
      </div>
      <div className="inner-hero-copy">
        <p>I build systems where research ideas become tools, infrastructure and reusable data.</p>
        <span>AI assistants · Scholarly infrastructure · Food information</span>
      </div>
    </header>

    <main className="project-grid section-shell" aria-label="Selected projects">
      {projects.map((project) => (
        <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
          <div className="project-card-top"><span>{project.number}</span><small>{project.type}</small></div>
          <div className="project-card-body"><h2>{project.title}</h2><p>{project.text}</p></div>
          <div className="project-card-footer"><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><strong>View project</strong></div>
        </a>
      ))}
    </main>
  </AppShell>
);

Projects.path = '/projects';
Projects.metadata = {
  title: 'Projects — Jean Petit BIKIM',
  description: 'AI, scholarly infrastructure and food information projects by Jean Petit BIKIM.',
};

export default Projects;

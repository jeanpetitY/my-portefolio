import { type PageComponent } from 'rasengan';
import AppShell from '@/components/AppShell';

const publications = [
  {
    year: '2026',
    venue: 'ICAS X 2026 · Conference paper',
    title: 'Acquisition and Organization of Food Composition Data using a Neuro-Symbolic Approach',
    authors: 'Azanzi Jiomekong · Germain Kansci · Sören Auer · Jouonzo Josiane · Jean Petit BIKIM · Félicitée Nguefack · Isabelle Mekone Nkwele · Hélène Kamo Selangai',
    text: 'A neuro-symbolic approach to the acquisition and organization of food composition data, presented at ICAS X in Kraków.',
    href: 'https://www.isi-next.org/media/abstracts/icas-x-2026_361783655c1c367453539ed56661392d.pdf',
  },
  {
    year: '2025',
    venue: 'SIGIR 2025',
    title: 'Fair Access to Food Data in Africa: An Approach Based on Retrieval-Augmented Generation',
    authors: 'Jean Petit Bikim · Charles Loic Njiosseu · Emmanuel Leuna Fienkak · Azanzi Jiomekong · Sören Auer',
    text: 'A retrieval-augmented generation approach for improving access to food-related data and information in African contexts.',
    href: 'https://doi.org/10.1145/3726302.3730266',
  },
  {
    year: '2025',
    venue: 'OM @ ISWC 2025',
    title: 'Results of SemTab 2025',
    authors: 'Oktie Hassanzadeh · Marco Cremaschi · Fabio D’Adda · Fidèl Jiomekong Azanzi · Jean Petit Bikim · Ernesto Jiménez-Ruiz',
    text: 'The challenge report covering benchmark datasets, tracks and evaluation of semantic table interpretation systems.',
    href: 'https://dblp.org/rec/conf/om2/HassanzadehCDAB25',
  },
  {
    year: '2025',
    venue: 'CoRR',
    title: 'Secu-Table: A Comprehensive Security Table Dataset for Evaluating Semantic Table Interpretation Systems',
    authors: 'Azanzi Jiomekong · Jean Petit Bikim · Patricia Negoue · Joyce Chin',
    text: 'A security-focused table dataset for evaluating semantic table interpretation systems.',
    href: 'https://dblp.org/rec/journals/corr/abs-2511-06301',
  },
  {
    year: '2024',
    venue: 'SemTab @ ISWC 2024',
    title: 'Leveraging GPT Models For Semantic Table Annotation',
    authors: 'Jean Petit Bikim · Carick Atezong · Azanzi Jiomekong · Allard Oelen · Gollam Rabby · Jennifer D’Souza · Sören Auer',
    text: 'An approach combining prompting, fine-tuning and rules to apply GPT models to semantic table annotation.',
    href: 'https://sem-tab-challenge.github.io/2024/semtab2024-proceedings/paper3.pdf',
  },
];

const Publications: PageComponent = () => (
  <AppShell className="inner-page publications-page">
    <header className="inner-hero section-shell">
      <div>
        <p className="eyebrow">Publications · 05</p>
        <h1>Research<br /><span>made public.</span></h1>
      </div>
      <div className="inner-hero-copy">
        <p>Published and co-authored work across AI, semantic table interpretation, food data and scholarly knowledge.</p>
        <span>05 publications · 01 conference presentation</span>
      </div>
    </header>

    <main className="publication-list section-shell" aria-label="Publications">
      {publications.map((publication) => (
        <a className="publication-row" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
          <div className="publication-meta"><strong>{publication.year}</strong><span>{publication.venue}</span></div>
          <div className="publication-copy"><h2>{publication.title}</h2><p className="publication-authors">{publication.authors}</p><p>{publication.text}</p></div>
          <span className="publication-action">View paper</span>
        </a>
      ))}
    </main>

    <section className="talk-section">
      <div className="section-shell talk-inner">
        <div className="compact-heading"><p className="eyebrow">Featured conference paper</p><h2>Presented at<br /><span>ICAS X.</span></h2></div>
        <article className="talk-card">
          <span>Conference paper · ICAS X · 2026 · Kraków, Poland</span>
          <h3>Acquisition and Organization of Food Composition Data using a Neuro-Symbolic Approach</h3>
          <p>I presented this co-authored paper at ICAS X in Kraków. Its official conference PDF is available directly from the International Statistical Institute.</p>
          <a href="https://www.isi-next.org/media/abstracts/icas-x-2026_361783655c1c367453539ed56661392d.pdf" target="_blank" rel="noreferrer">Read the conference paper</a>
        </article>
      </div>
    </section>

    <div className="research-profile section-shell">
      <span>For DBLP-indexed publications</span>
      <a href="https://dblp.org/pid/395/0332" target="_blank" rel="noreferrer">View my DBLP profile</a>
    </div>
  </AppShell>
);

Publications.path = '/publications';
Publications.metadata = {
  title: 'Publications — Jean Petit BIKIM',
  description: 'Publications and conference presentations by Jean Petit BIKIM.',
};

export default Publications;

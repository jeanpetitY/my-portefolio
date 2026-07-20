import { Link } from 'rasengan';
import ThemeToggle from '@/components/ThemeToggle';

const SiteNav = () => (
  <header className="site-header">
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="brand" to="/" aria-label="Jean Petit BIKIM — Home">
        <span className="brand-mark">JP</span>
        <span className="brand-name">Jean Petit <b>BIKIM</b></span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
      </div>

      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-contact" href="mailto:jean.petit@tib.eu">Contact</a>
      </div>
    </nav>
  </header>
);

export default SiteNav;

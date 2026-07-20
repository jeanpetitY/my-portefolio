const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.68c-2.65.58-3.2-1.12-3.2-1.12-.44-1.1-1.06-1.4-1.06-1.4-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.23 1.03 2.77.79.09-.62.33-1.03.6-1.27-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.98-2.57-.1-.24-.42-1.22.09-2.54 0 0 .8-.26 2.62.98A9.1 9.1 0 0 1 12 7.1c.8 0 1.61.11 2.37.33 1.8-1.24 2.6-.98 2.6-.98.52 1.32.2 2.3.1 2.54.61.67.98 1.53.98 2.57 0 3.67-2.23 4.48-4.36 4.72.34.3.64.88.64 1.77v2.63c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5.05 7.7A1.95 1.95 0 1 0 5.05 3.8a1.95 1.95 0 0 0 0 3.9ZM3.35 20.2h3.4V9.1h-3.4v11.1ZM8.9 9.1h3.25v1.52h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.08 2.26 4.08 5.2v6.13h-3.4v-5.43c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89v5.52H8.9V9.1Z" />
  </svg>
);

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="footer-contact">
      <div className="footer-copy">
        <p className="footer-kicker">Let&apos;s work together</p>
        <h2>Want to connect<br /><span>with me?</span></h2>
      </div>

      <div className="footer-connect">
        <p>Feel free to contact me about research, collaborations or ideas worth building.</p>
        <div className="footer-actions">
          <a className="footer-contact-button" href="mailto:jean.petit@tib.eu">Contact me </a>
          <a className="footer-social" href="https://github.com/jeanpetitY" target="_blank" rel="noreferrer" aria-label="GitHub — jeanpetitY">
            <GithubIcon /><span>GitHub</span>
          </a>
          <a className="footer-social" href="https://www.linkedin.com/in/jeanpetit/" target="_blank" rel="noreferrer" aria-label="LinkedIn — Jean Petit BIKIM">
            <LinkedinIcon /><span>LinkedIn</span>
          </a>
        </div>
        <a className="footer-secondary-profile" href="https://github.com/jeanpetitt" target="_blank" rel="noreferrer">
          Previous GitHub profile - @jeanpetitt
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Jean Petit BIKIM</span>
      <span>PhD student - TIB Hannover</span>
    </div>
  </footer>
);

export default SiteFooter;

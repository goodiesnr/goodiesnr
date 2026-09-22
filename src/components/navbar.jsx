import { GithubIcon, XIcon } from './Icons';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="/#hero">
          <span className="brand-mark">G</span>
        </a>

        <nav className="nav-links">
          <a href="/#expertise">Expertise</a>
          <a href="/#featured-projects">Projects</a>
          <a href="/#why-me">Why Me</a>
        </nav>

        <div className="nav-actions">
          <a className="icon-btn" href="https://github.com/goodiesnr" target="_blank" rel="noreferrer" title="GitHub Profile">
            <GithubIcon />
          </a>
          <a className="icon-btn" href="https://x.com/goodiesnr" target="_blank" rel="noreferrer" title="Twitter / X">
            <XIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

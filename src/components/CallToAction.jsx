import { ArrowRightIcon, GithubIcon } from './Icons';

export default function CallToAction() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-inner">
        <h2 className="cta-title">
          Let's build something meaningful.
        </h2>
        <p className="cta-copy">Open to remote work, product collaboration and ambitious ideas.</p>

        <div className="cta-actions">
          <a className="btn-white" href="mailto:goodieishekwene@gmail.com">
            <span>Let's Talk</span>
            <ArrowRightIcon />
          </a>
          <a className="btn-outline-dark" href="https://github.com/goodiesnr" target="_blank" rel="noreferrer">
            <span>View GitHub</span>
            <GithubIcon />
          </a>
        </div>

      </div>
    </section>
  );
}



export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="social-buttons">
          <a href="https://x.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s" aria-label="Twitter / X">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://github.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:goodieishekwene@gmail.com" className="btn-s" aria-label="Send Email">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>


      <div className="copyright-row">
        <p>&copy; 2026 GOODIE. ALL RIGHTS RESERVED.</p>
        <p>@GOODIESNR</p>
      </div>
    </footer>
  );
}

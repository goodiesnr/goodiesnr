import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/playground">PLAYGROUND</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
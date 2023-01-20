import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo-portfolio.png'

export function Header() {

      return (
            <header>
                  <Link to="/Project" className='link-header' draggable='false'> Projets
                  </Link>

                  <Link to="/" draggable='false'>
                        <img class="logo-header" src={logo} alt="logo du site de Pierre Garnier"
                              draggable="false"></img>
                  </Link>

                  <a href="mailto:pierregarnr@gmail.com" className='link-header' draggable='false'>Contact</a>

            </header>
      )
}
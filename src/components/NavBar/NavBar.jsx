import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <header>
          <Link to='/'>
            <h1>SALA HOGAR</h1>
          </Link>
            
            <nav>
                <ul>
                    <li>
                      <NavLink to='categoria/tecno'>
                        Tecnologia
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='categoria/electro'>
                        Electrodomesticos
                      </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    </div>
  )
}

export default NavBar
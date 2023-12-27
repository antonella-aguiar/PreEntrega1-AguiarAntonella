import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
        <header>
            <h1>SALA HOGAR</h1>
            <nav>
                <ul>
                    <li>Celulares</li>
                    <li>Electrodomesticos</li>
                    <li>Accesorios</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    </div>
  )
}

export default NavBar
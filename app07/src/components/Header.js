import {Link} from 'react-router-dom';

const Header = ({ brand }) => (
    <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
        <div className='container-fluid'>
            <Link to="/" className="navbar-brand">{brand || 'My SPA 2.0'}</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                        <Link className="nav-link" to="/">Stock</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/add">New Item</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
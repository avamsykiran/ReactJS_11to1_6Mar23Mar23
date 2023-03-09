
const Header = (props) => (
    <nav className='navbar navbar-dark navbar-expand-sm bg-dark'>
        <div className='container-fluid'>
            <a href="#" className="navbar-brand">{props.brand || 'My SPA 2.0'}</a>
        </div>
    </nav>
);

export default Header;
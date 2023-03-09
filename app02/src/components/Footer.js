
const Footer = (props) => (
    <section className="container-fluid bg-dark text-light text-end fixed-bottom p-2">
        <span>{props.footNote || 'my spa 2.0'}</span>
    </section>
);

export default Footer;
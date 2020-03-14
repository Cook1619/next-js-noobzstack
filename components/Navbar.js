import NavItem from './NavItem'

const navLinks = [
    {
        text: 'Javascript',
        href: '/javascript'
    },
    {
        text: 'React',
        href: '/react'
    },
    {
        text: 'CSS',
        href: '/css',
    }
]

const Navbar = () => (
    <div className="sidenav">
        <NavItem text="Home" href="/" />
        <NavItem text="About" href="/about" />
        <NavItem text="Contact" href="/contact" />
        <NavItem text="Blogs" href="/blog" subNav={navLinks} />
        <NavItem text="Tips & Tricks" href="/tips" subNav={navLinks} />
        <style jsx>{`
      .sidenav {
        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        padding-top: 20px;
      }
      }
    `}</style>
    </div>
);

export default Navbar;

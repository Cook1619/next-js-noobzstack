import Link from 'next/link';

const linkStyle = {
  padding: '6px 8px 6px 16px',
  textDecoration: 'none',
  fontSize: '25px',
  color: '#818181',
  display: 'block'
};

const navbar = {
  height: '100%',
  width: '160px',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  left: '0',
  backgroundColor: '#111',
  overflowX: 'hidden',
  paddingTop: '20px'
}

const Navbar = () => (
  <div style={navbar}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Navbar;

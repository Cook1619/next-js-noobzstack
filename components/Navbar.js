import Link from "next/link";

const Navbar = () => (
  <div className="sidenav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <Link href="/blog">
      <a>Blogs</a>
    </Link>
    <Link href="/tips">
      <a>Tip N Tricks</a>
    </Link>
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

      /* The navigation menu links */
      .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 15px;
        color: black;
        display: block;
      }

      /* When you mouse over the navigation links, change their color */
      .sidenav a:hover {
        background-color: whitesmoke;
      }
      .sidenav a:focus {
        color: #6741a3;
        background-color: whitesmoke;
      }

      /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
      @media screen and (max-height: 450px) {
        .sidenav {
          padding-top: 15px;
        }
        .sidenav a {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);

export default Navbar;

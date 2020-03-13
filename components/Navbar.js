import Link from "next/link";
import React, { useState } from "react";

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

const NavItem = ({ text, href, subNav }) => {
    const [open, setOpen] = useState(false)
    const toggleItem = () => setOpen(!open)
    return (
        <div>
            <Link href={href}>
                <a>{text}</a>
            </Link>
            { subNav && <button onClick={toggleItem}> > </button>}
            { subNav && subNav.length > 0 && open && <div>
                {subNav.map((link) => (
                    <Link href={link.href} key={link.text}><a>{link.text}</a></Link>
                ))}
            </div>}

        </div>
    )
}

const Navbar = () => (
    <div className="sidenav">
        <NavItem text="Home" href="/"/>
        <NavItem text="About" href="/about"/>
        <NavItem text="Contact" href="/contact"/>
        <NavItem text="Blogs" href="/blog" subNav={navLinks} />
        {/* 
    
    <Link href="/tips">
      <a>Tip & Tricks</a>
    </Link> */}
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

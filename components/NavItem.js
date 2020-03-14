import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from 'react-icons/fa'

const NavItem = ({ text, href, subNav }) => {
    const [open, setOpen] = useState(false)
    const toggleItem = () => setOpen(!open)
    return (
        <div className="sidenav">
            {!subNav &&<Link href={href}>
                <a>{text}</a>
            </Link>}
            {subNav && <div onClick={toggleItem}>{text}<FaChevronRight /></div>}
            {subNav && subNav.length > 0 && open && <div>
                {subNav.map((link) => (
                    <Link href={link.href} key={link.text}><a>{link.text}</a></Link>
                ))}
            </div>}
            <style jsx>{`
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
        `}</style>
        </div>
    )
}

export default NavItem;
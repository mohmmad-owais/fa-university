import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLinks = ({ extraClassName }) => {
  const currentPath = usePathname();
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className={currentPath === "/" && "current"}>
        <Link href="/">Home</Link>
      </li>
      <li className={currentPath === "/page-about" && "current"}>
        <Link href="/page-about">About</Link>
      </li>
      {/* <li className="dropdown">
        <Link href="/page-about">Pages</Link>
        <ul>
          <li className="dropdown">
            <Link href="/page-team">Team</Link>
            <ul>
              <li>
                <Link href="/page-team">Team Grid</Link>
              </li>
              <li>
                <Link href="/page-team-details">Team Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/page-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="/page-pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/page-faq">FAQ</Link>
          </li>
          <li>
            <Link href="/page-404">Page 404</Link>
          </li>
        </ul>
      </li> */}
      <li className={currentPath === "/page-courses" && "current"}>
        <Link href="/page-courses">Courses</Link>
        {/* <ul>
          <li>
            <Link href="/page-courses">Courses Grid</Link>
          </li>
          <li>
            <Link href="/page-course-details">Cours Details</Link>
          </li>
        </ul> */}
      </li>
      {/* <li className="dropdown">
        <Link href="/news-grid">News</Link>
        <ul>
          <li>
            <Link href="/news-grid">News Grid</Link>
          </li>
          <li>
            <Link href="/news-details">News Details</Link>
          </li>
        </ul>
      </li> */}
      <li className={currentPath === "/page-pricing" && "current"}>
        <Link href="/page-pricing">Pricing</Link>
      </li>
      <li className={currentPath === "/page-testimonial" && "current"}>
        <Link href="/page-testimonial">Testimonials</Link>
      </li>
      <li className={currentPath === "/page-contact" && "current"}>
        <Link href="/page-contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavLinks;

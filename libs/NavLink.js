import React from 'react';
import Link from 'next/link';

const NavLink = ({href, children}) => {
  return (
    <Link href={href}>
      <a className="px-4 hover:underline hover:font-extrabold hover:text-red-800">{children}</a>
    </Link>
  )
}

export default NavLink
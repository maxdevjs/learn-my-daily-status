import React from 'react';
import NavBar from './NavBar';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-gray-200">
      <h1>
        <Link href="/">
        <a><img className="h-24 mx-auto py-4" src="/logo.png" alt="Hi FSL!" height="60"/></a>
        </Link>
      </h1>
      <NavBar />
    </div>
  )
}

export default Header

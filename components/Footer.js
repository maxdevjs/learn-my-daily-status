import React from 'react';
import NavLink from '../libs/NavLink';

const Footer = () => {
  return (
    <div className="bg-gray-500 py-4 text-center">
      <p>MyDailyStatus is a cool project created in a <NavLink href="https://lp.devpleno.com/fsl/">Fullstack Lab</NavLink> session.</p>
      <em>Implemented by: <NavLink href="https://github.com/maxdevjs">maxdevjs</NavLink></em> | <em>Code: <NavLink href="https://github.com/maxdevjs/mydailystatus">mydailystatus</NavLink></em>
    </div>
  )
}

export default Footer

import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div
      style={{ backgroundColor: currentColor }}
      className="fixed bottom-0 flex w-full justify-center"
    >
      <p className="dark:text-gray-200 text-gray-700 text-center m-5">
        © {new Date().getFullYear()} All rights reserved by Fxably
      </p>
    </div>
  );
};

export default Footer;

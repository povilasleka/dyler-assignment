import React from 'react';
import Navigation from '../navbar/Navigation';

interface IProps {
  children: React.ReactNode
}

const Layout = function ({ children }: IProps) {
  return (
    <>
      <Navigation />
      <div className="container">
          {children}
      </div>
    </>
  );
}

export default Layout;
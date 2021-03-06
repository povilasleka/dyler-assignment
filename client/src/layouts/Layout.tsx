import React from 'react';
import Navigation from '../components/Navigation';

interface IProps {
  children: React.ReactNode
}

const Layout = function ({ children }: IProps): JSX.Element {
	return (
		<>
			<Navigation />
			<div className="container">
				{children}
			</div>
		</>
	);
};

export default Layout;
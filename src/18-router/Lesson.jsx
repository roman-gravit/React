import React, { Fragment } from 'react';

import Header from './components/header';
import Footer from './components/footer';

export const App = ({ children }) => (
	<Fragment>
		<Header />
		{children}
    	<Footer />
  </Fragment>
);

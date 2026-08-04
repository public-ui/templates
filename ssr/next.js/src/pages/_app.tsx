import React from 'react';
import App from 'next/app';
import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';
import '../style.css';
import '../style.scss';

class RootApp extends App {
	componentDidMount() {
		register(DEFAULT, defineCustomElements)
			.then(() => console.log('Components registered'))
			.catch(console.warn);
	}

	render() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
			</>
		);
	}
}

export default RootApp;

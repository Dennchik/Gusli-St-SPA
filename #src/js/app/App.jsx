import React from 'react';
import Router from '../router/Router.jsx';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from '../components/Header.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function App() {
	return (
		<>
			<header className="page__header">
				<Header />
			</header>
			<Router isHomepage={true} />
		</>
	);
}

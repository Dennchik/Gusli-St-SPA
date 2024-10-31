import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { Header } from '../components/Header.jsx';
import Router from '../router/index.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function App() {
	return (
		<>
			<header className="page__header">
				<Header/>
			</header>
			<Router isHomepage={true}/>
		</>
	);
}

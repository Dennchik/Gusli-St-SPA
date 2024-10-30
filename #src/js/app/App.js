import React from 'react';
import { gsap } from 'gsap';
import Router from '../router/index.js';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { Header } from '../components/Header.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function App() {
	return (<>
		<header className='page__header'>
			<Header/>
		</header>
		<Router isHomepage={true}/>
	</>);
}
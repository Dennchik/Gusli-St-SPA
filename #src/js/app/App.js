import React from 'react';
import {gsap} from 'gsap';
import {ScrollSmoother} from 'gsap/ScrollSmoother.js';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';
import {useGSAP} from '@gsap/react';

import Router from '../router/index.js';
import {Header} from '../components/Header.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {
	return (
		<>
			<Header/>
			<Router/>
		</>
	);
}

export default App;
import React, {useEffect, useRef} from 'react';
import parallaxEffect from '../animations/parallax.js';
import {MainSlide} from '../components/Mainslide.js';
import {Services} from '../components/Services.js';
import {Footer} from '../components/Footer.js';
//* ----------------------------------------------------------------------------
const baseUrl = '.';

export const HomePage = () => {
	const container = useRef();

	useEffect(() => {
		parallaxEffect();
		window.scrollTo(0, 0);// Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы


	return (
		<>
			<section className="main-content__slide" ref={container}>
				<MainSlide baseUrl={baseUrl}/>
			</section>
			<section className='main-content__services'>
				<Services/>
			</section>
			<footer className="main-content__footer"
							id='footer'>
				<Footer baseUrl={baseUrl}/>
			</footer>

		</>
	);
};




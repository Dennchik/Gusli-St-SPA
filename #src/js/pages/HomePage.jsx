import React, { useEffect, useRef } from 'react';
import { refreshScrollTrigger } from '../animations/animations.jsx';
import parallaxEffect from '../animations/parallax.jsx';
import { Footer } from '../components/Footer.jsx';
import { MainSlide } from '../components/MainSlide.jsx';
import { Services } from '../components/Services.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';

export const HomePage = () => {
	const container = useRef();
	//* Этот эффект выполнится один раз при монтировании страницы
	useEffect(() => {
		refreshScrollTrigger();
		console.log(refreshScrollTrigger);
		parallaxEffect();
		//* Сброс прокрутки при рендеринг страницы
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className="main-content__slide" ref={container}>
				<MainSlide baseUrl={baseUrl} />
			</section>
			<section className="main-content__services">
				<Services />
			</section>
			<footer className="main-content__footer" id="footer">
				<Footer baseUrl={baseUrl} />
			</footer>
		</>
	);
};
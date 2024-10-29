import React, {useEffect} from 'react';
import {MainSlide} from '../components/Mainslide.js';
import {Services} from '../components/Services.js';
import {Footer} from '../components/Footer.js';
//* ----------------------------------------------------------------------------
const baseUrl = '.';

export const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);// Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы


	return (
		<>
			<section className="main-content__slide">
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




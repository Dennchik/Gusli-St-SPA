import React, { useEffect } from 'react';
import { About } from '../components/About.jsx';
import { Footer } from '../components/Footer.jsx';
import parallaxEffect from '../animations/parallax.jsx';
import { Partners } from '../components/Partners.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';
//* ----------------------------------------------------------------------------
export const ServicesPage = () => {
	useEffect(() => {
		parallaxEffect();
		window.scrollTo(0, 0); // Сброс прокрутки при рендеринг страницы
		// console.log(window.scrollTo, 'scroll');
	}, []); // Этот эффект выполнится один раз при монтировании страницы
	return (
		<>
			<div className="main-content__aboute">
				<About />
			</div>

			<section className="main-content__partners">
				<Partners baseUrl={baseUrl} />
			</section>
			<div className="main-content__footer" id="footer">
				<Footer baseUrl={baseUrl} />
			</div>
		</>
	);
};
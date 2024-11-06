import React, { useEffect } from 'react';
import { About } from '../components/About.jsx';
import { Footer } from '../components/Footer.jsx';
import parallaxEffect from '../animations/parallax.jsx';
import { Partners } from '../components/Partners.jsx';
import { Achievements } from '../components/Achievements.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';
//* ----------------------------------------------------------------------------
export const AboutPage = () => {
	// синхронизация с анимацией перехода
	useEffect(() => {
		setTimeout(() => {
			parallaxEffect();
		}, [500]);

		window.scrollTo(0, 0); // Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы
	return (
		<>
			<div className="main-content__about">
				<About />
			</div>

			<section className="main-content__partners">
				<Partners baseUrl={baseUrl} />
			</section>
			<section className="main-content__achievements">
				<Achievements baseUrl={baseUrl} />
			</section>
			<div className="main-content__footer" id="footer">
				<Footer baseUrl={baseUrl} />
			</div>
		</>
	);
};
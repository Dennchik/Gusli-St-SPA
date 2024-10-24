import React, { useEffect } from 'react';
//* ----------------------------------------------------------------------------
import { About } from '../components/About.jsx';
import { Footer } from '../components/Footer.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';
//* ----------------------------------------------------------------------------
export const AboutPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);// Сброс прокрутки при рендеринг страницы
		console.log(window.scrollTo, 'scroll');
	}, []); // Этот эффект выполнится один раз при монтировании страницы
	return (
		<>
			<div className="main-content__aboute">
				<About/>

			</div>
			<div className="main-content__footer"
			     id='footer'>
				<Footer baseUrl={baseUrl}/>
			</div>
		</>
	);
};
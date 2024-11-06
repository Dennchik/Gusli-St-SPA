import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from '../assets/ScrollToTop.js';
import { TransitionProvider } from '../context/TransitionContext.jsx';
import TransitionComponent from '../components/Transition.jsx';

import { MenuFloat } from '../modules/Menu-float.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { ServicesPage } from '../pages/ServicesPage.jsx';

import returnToSavedPosition from '../assets/return-position.js';

const baseUrl = '.';

export default function Router() {
	const location = useLocation();

	// Инициализация ScrollSmoother
	useGSAP(
		() => {
			const smoother = ScrollSmoother.create({
				wrapper: '#wrapper',
				content: '#content',
				smooth: 1,
				effects: true,
				smoothTouch: 0.1,
			});
			return () => {
				smoother.kill(); // Удаляем Smooth при размонтировании
			};
		},
		{
			dependencies: [location],
		},
	);

	useEffect(() => {

		returnToSavedPosition();
	}, []);

	return (
		<>
			<ScrollToTop /> {/* Компонент для сброса прокрутки */}
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<TransitionProvider>
							<Routes>
								<Route path="/" element={
									<TransitionComponent>
										<HomePage />
										{/* {parallaxEffect()} */}
									</TransitionComponent>
								} />
								<Route path="/about" element={
									<TransitionComponent>
										<AboutPage />
										{/* {parallaxEffect()} */}
									</TransitionComponent>
								} />
								<Route path="/services" element={
									<TransitionComponent>
										<ServicesPage />
									</TransitionComponent>
								} />
							</Routes>
						</TransitionProvider>
					</div>
				</div>
			</main>
			<div className="page__menu-float">
				<MenuFloat baseUrl={baseUrl} />
			</div>
			<div className="page__aside" id={'scrollButton'}>
				<i className="icon-angle-down _button"></i>
			</div>
		</>
	);
}

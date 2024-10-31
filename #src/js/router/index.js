import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import { useGSAP } from '@gsap/react';
import {
	refreshScrollTrigger,
	animateTitles,
	tlServices1,
	tlServices2,
} from '../animations/animations.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { MenuFloat } from '../components/Menu-float.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import ScrollToTop from '../assets/ScrollToTop.js';

const baseUrl = '.';

export default function Router() {
	const location = useLocation();
	const isHomepage = location.pathname === '/';
	const prevLocation = useRef(location.pathname);

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
		const smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.effects('.services-slide__column', {
				speed: (i) => {
					return window.matchMedia('(min-width:730px)').matches
						? i % 2 === 1
							? 1.15
							: 1
						: i % 2 === 0
							? 0.9
							: 1.15;
				},
			});
		}
	}, [location.pathname, isHomepage]);

	useEffect(() => {
		if (isHomepage) {
			// Проверяем, если .services__title существует перед запуском анимации
			if (document.querySelector('.services__title')) {
				animateTitles(
					'.services__title',
					'.services__title',
					'.services__title',
					'=150',
					'=150',
				);
			}

			if (document.querySelector('.offer-container__title')) {
				animateTitles(
					'.offer-container__title',
					'.offer-container__title',
					'.offer-container__title',
					'=150',
					'=150',
				);
			}

			tlServices1();
			tlServices2();

			refreshScrollTrigger();
		}

		prevLocation.current = location.pathname; // Обновляем предыдущее значение
	}, [location.pathname, isHomepage]);

	return (
		<>
			<ScrollToTop/> {/* Компонент для сброса прокрутки */}
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<Routes>
							<Route path="/" element={<HomePage/>}/>
							<Route path="/about" element={<AboutPage/>}/>
						</Routes>
					</div>
				</div>
			</main>
			<page__aside>
				<MenuFloat baseUrl={baseUrl}/>
			</page__aside>
		</>
	);
}

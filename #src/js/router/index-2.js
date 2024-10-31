import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function Router(location, isHomepage) {
	useGSAP(
		() => {
			ScrollSmoother.create({
				wrapper: '#wrapper',
				content: '#content',
				smooth: 1,
				effects: true,
				smoothTouch: 0.1,
			});
		},
		{
			dependencies: [location],
		},
	);

	useEffect(() => {
		let smoother = ScrollSmoother.get();
		if (smoother) {
			smoother.effects('.services-slide__column', {
				speed: (i) => {
					// Desktop three columns layout
					if (window.matchMedia('(min-width:730px)').matches) {
						// Center column is faster
						return i % 2 === 1 ? 1.15 : 1;
					} else {
						// Mobile, right column is fast
						return i % 2 === 0 ? 0.9 : 1.15;
					}
				},
			});
		}
	}, [location.pathname, isHomepage]);

	const prevLocation = useRef(location.pathname);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const checkElementsAndAnimate = () => {
			// Проверяем наличие элементов
			const servicesTitle = document.querySelector('.services__title');
			const offerContainerTitle = document.querySelector(
				'.offer-container__title',
			);

			if (servicesTitle && offerContainerTitle) {
				animateTitles(
					'.services__title',
					'.services__title',
					'.services__title',
					'=150',
					'=150',
				);
				animateTitles(
					'.offer-container__title',
					'.offer-container__title',
					'.offer-container__title',
					'=150',
					'=150',
				);
				tlServices1();
				tlServices2();
				refreshScrollTrigger();
			}
		};

		if (isHomepage && prevLocation.current !== '/') {
			checkElementsAndAnimate(); // Запускаем проверку наличия элементов
			setHasAnimated(true); // Устанавливаем состояние, что анимация была
			// запущена
		}

		prevLocation.current = location.pathname; // Обновляем предыдущее значение
	}, [location.pathname, isHomepage]);

	// Дополнительный useEffect для обработки первой загрузки
	useEffect(() => {
		if (isHomepage && !hasAnimated) {
			const servicesTitle = document.querySelector('.services__title');
			const offerContainerTitle = document.querySelector(
				'.offer-container__title',
			);

			if (servicesTitle && offerContainerTitle) {
				refreshScrollTrigger();
				animateTitles(
					'.services__title',
					'.services__title',
					'.services__title',
					'=150',
					'=150',
				);
				animateTitles(
					'.offer-container__title',
					'.offer-container__title',
					'.offer-container__title',
					'=150',
					'=150',
				);
				tlServices1();
				tlServices2();
				setHasAnimated(true); // Устанавливаем состояние, что анимация была
				// запущена
			}
		}
	}, [isHomepage, hasAnimated]);

	return (
		<>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<ScrollToTop/> {/* Добавляем компонент для сброса прокрутки */}
						<Routes>
							<Route path="/">
								<Route path="/" element={<HomePage/>}/>
								<Route path="/about" element={<AboutPage/>}/>
							</Route>
						</Routes>
					</div>
				</div>
			</main>
			<page__aside>{<MenuFloat baseUrl={baseUrl}/>}</page__aside>
		</>
	);
}

import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {
	animateTitles,
	// applyParallaxEffects,
	initScroll,
	// createSmoother,
	destroySmoother,
	refreshScrollTrigger,
	tlFooterHorizontal,
	tlFooterParallel,
	tlServices1,
	tlServices2,
} from '../animations/smoothEffects.js';
import {ScrollToTop} from '../assets/ScrollToTop.js';
import {Layout} from '../layouts/Layout.jsx';
import {AboutPage} from '../pages/AboutPage.js';
import {HomePage} from '../pages/HomePage.js';

export default function App() {
	const location = useLocation();
	const [initialPositions, setInitialPositions] = useState(null);
	let smoother;
	const handleScroll = () => {
		// Вызов плавной прокрутки документа
		initScroll({smooth: 1.2, speed: 0.5});
	};
	useEffect(() => {
		// 	//* Создаем ScrollSmoother только на ПК
		// 	if (location.pathname === '/') {
		// 		smoother = createSmoother(initialPositions);
		// 	}

		return () => {
			//* Уничтожаем ScrollSmoother при размонтировании
			if (smoother) {
				destroySmoother(smoother);
			}
		};
	}, [initialPositions, location.pathname]);

	useEffect(() => {
		// Сохраняем начальные позиции элементов при первой загрузке
		if (!initialPositions && location.pathname === '/') {
			const columns = document.querySelectorAll(
				'.services-slide__column');
			const positions = Array.from(columns).map((_, i) => ({
				speed: i % 2 === 0 ? 0.9 : 1.15, // Позиционирование элементов
			}));
			setInitialPositions(positions);
		}

		// Запуск анимаций только на главной странице
		if (location.pathname === '/') {
			const servicesTitle = document.querySelector('.services__title');
			const offerContainerTitle = document.querySelector(
				'.offer-container__title');

			if (servicesTitle && offerContainerTitle) {
				animateTitles('.services__title', '.services__title',
					'.services__title', '=150', '=150');

				animateTitles('.offer-container__title', '.offer-container__title',
					'.offer-container__title', '=150', '=150');
				tlServices1();
				tlServices2();
				tlFooterParallel();

				// Обновляем триггеры ScrollTrigger и вызываем tlFooterHorizontal
				// только на главной странице
				refreshScrollTrigger();
			}
		}
		tlFooterHorizontal();
	}, [location.pathname]);

	useEffect(() => {
		// Слушаем изменения маршрута и вызываем плавную прокрутку документа
		window.addEventListener('scroll', handleScroll);

		return () => {
			// Удаляем обработчик событий при размонтировании компонента
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<ScrollToTop/>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
				</Route>
			</Routes>
		</>
	);
}
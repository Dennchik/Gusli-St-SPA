import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '../layouts/Layout.jsx';
import { Homepage } from '../pages/Homepage.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { ScrollToTop } from '../assets/ScrollToTop.jsx';
import {
	animateTitles,
	applyParallaxEffects,
	createSmoother,
	destroySmoother,
	tlFooterHorizontal,
	tlFooterParallel,
	tlServices1,
	tlServices2
} from '../animations/smoothEffects';

export default function App() {
	const location = useLocation();
	const [initialPositions, setInitialPositions] = useState(null);
	let smoother;

	useEffect(() => {
		//* Создаем ScrollSmoother только на ПК
		smoother = createSmoother(initialPositions);

		if (smoother) {
			//* Применяем эффекты параллакса только если smoother создан
			applyParallaxEffects(smoother, '.parallax');
		}

		return () => {
			//* Уничтожаем ScrollSmoother при размонтировании
			if (smoother) {
				destroySmoother(smoother);
			}
		};
	}, [initialPositions, location.pathname]);

	useEffect(() => {
		// Сохраняем начальные позиции элементов при первой загрузке
		if (!initialPositions) {
			const columns = document.querySelectorAll(
				'.services-slide__column');
			const positions = Array.from(columns).map((
				_, i) => ({
				speed: i % 2 === 0 ? 0.9 : 1.15, // Позиционирование элементов
			}));
			setInitialPositions(positions);
		}
	}, [initialPositions, location.pathname]);
	useEffect(() => {
		animateTitles('.services__title', '.services__title',
			'.services__title', '=150', '=150');
		animateTitles('.offer-container__title', '.offer-container__title',
			'.offer-container__title', '=150', '=150');
		tlServices1();
		tlServices2();
		tlFooterParallel();
		tlFooterHorizontal();
	}, []);


	return (
		<>
			<ScrollToTop/>
			<Routes>
				<Route path="/"
				       element={<Layout/>}>
					<Route path="/"
					       element={<Homepage/>}/>
					<Route path="/about"
					       element={<AboutPage/>}/>
				</Route>
			</Routes>
		</>
	);
}

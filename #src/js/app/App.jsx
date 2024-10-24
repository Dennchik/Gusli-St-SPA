import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../layouts/Layout.jsx';
import { Homepage } from '../pages/Homepage.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import ScrollToTop from '../assets/ScrollToTop.jsx';  // Импортируем компонент
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//* ----------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(false);
ScrollTrigger.config({ignoreMobileResize: true});
export default function App() {
	const location = useLocation();
	const [initialPositions, setInitialPositions] = useState(null);

	useEffect(() => {
		const isMobile = /Mobi|Android/i.test(navigator.userAgent);
		let smoother;

		if (!isMobile) {
			smoother = ScrollSmoother.create({
				wrapper: '#wrapper',
				content: '#content',
				smooth: 2,
				effects: true,
				normalizeScroll: true,
				// ignoreMobile: true,
			});
			//* Принудительно сбрасываем прокрутку при смене маршрута
			smoother.scrollTop(0, true);  // Сбрасываем прокрутку плавно
		}

		if (!isMobile) {
			console.log('no mobile');

			//* Пересоздаем эффекты для колонок
			smoother.effects('.services-slide__column', {
				speed: (i) => {
					if (initialPositions) {
						const position = initialPositions[i];
						return position ? position.speed : 1.5;
					}
					return 1.5;
				}
			});
			// applyParallaxEffects(smoother, '.parallax');

			smoother.effects('.parallax', {
				speed: (i) => {
					return i % 1 === 0 ? 0.5 : 1.15;
				}
			});

		}
		return () => {
			if (smoother) {
				smoother.kill(); // Убедитесь, что вы убиваете экземпляр при
			                   // размонтировании
			}
		};
	}, [initialPositions, location.pathname]);
	useEffect(() => {
		//* Сохраняем начальные позиции элементов при первой загрузке страницы
		if (!initialPositions) {
			const columns = document.querySelectorAll(
				'.services-slide__column');
			const positions = Array.from(columns).map((_, i) => ({
				speed: i % 2 === 0 ? 0.9 : 1.15 // Укажите здесь правильное
				// позиционирование элементов
			}));
			setInitialPositions(positions);
		}
	}, [initialPositions, location.pathname]);


	return (
		<>
			<ScrollToTop/> {/* Добавляем компонент для сброса прокрутки */}
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

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';

//* ---- Регистрируем плагин ScrollTrigger, чтобы использовать его функции; ----
gsap.registerPlugin(ScrollTrigger);

export default function parallaxEffect() {

	let movementFactor = 0.8; // Фактор движения
	let backgrounds = gsap.utils.toArray('.parallax img.bg');

	// Ожидаем, пока изображения загрузятся, затем запускаем анимации
	Promise.all(backgrounds.map(img => new Promise(resolve => {
		if (img.complete) {
			resolve();
		} else {
			img.onload = resolve;
		}
	}))).then(() => {
		initAnimations(); // Запуск анимаций после загрузки
	});

	function initAnimations() {
		backgrounds.forEach((img, i) => {
			let triggerElement = img.parentNode instanceof HTMLElement ? img.parentNode : null;

			if (!triggerElement) return; // Проверка на наличие родительского
																	 // элемента типа HTMLElement

			gsap.fromTo(img, {
				y: i === 0 ? 0 : -movementFactor * 0.5 * triggerElement.offsetHeight
			}, {
				y: movementFactor * 0.5 * triggerElement.offsetHeight,
				ease: 'power1',
				scrollTrigger: {
					trigger: triggerElement, // Используем проверенный элемент как
																	 // триггер
					start: i === 0 ? '-1px top' : 'top bottom', // Начало анимации
					end: 'bottom top', // Конец анимации
					scrub: true, // Связывает анимацию с прокруткой
					invalidateOnRefresh: true // Обновление при изменении размеров
				}
			});
		});
	}

}

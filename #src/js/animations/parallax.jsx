import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//* ---- Регистрируем плагин ScrollTrigger, чтобы использовать его функции; ----
gsap.registerPlugin(ScrollTrigger);

export default function parallaxEffect() {
	// *Коэффициент движения фона. Управляет степенью смещения фона, выраженной в
	// процентах от высоты секции.
	let movementFactor = 0.8;
	//* Находим все элементы <img> с классом "bg" внутри <section>, чтобы
	// анимировать их
	let backgrounds = gsap.utils.toArray('.parallax img.bg');
	console.log(backgrounds);
	//* Функция, чтобы дождаться загрузки всех изображений
	Promise.all(backgrounds.map(img => new Promise(resolve => {
		//* Если изображение уже загружено, сразу вызываем resolve
		if (img.complete) {
			resolve();
		} else {
			//* Если не загружено, ждем событие onload, после которого вызываем
			// resolve
			img.onload = resolve;
		}
	}))).then(() => {
		initAnimations();
	});

	//* Функция для инициализации анимации
	function initAnimations() {
		backgrounds.forEach((img, i) => {
			let triggerElement = img.parentNode instanceof HTMLElement ?
				img.parentNode : null;
			if (!triggerElement) return;
			// Проверка на наличие родительского элемента типа HTMLElement

			// Подгоняем изображение под секцию с учетом движения
			fitImage(img, movementFactor);
			// Создаем анимацию движения по вертикали для каждого изображения
			gsap.fromTo(img, {
				// Начальная позиция по оси y — зависит от индекса (если не первое,
				// смещаем вверх)
				y: () => i ? -movementFactor * 0.7 * img.parentNode.offsetHeight : 0
			}, {
				y: () => movementFactor * 0.7 * img.parentNode.offsetHeight,
				ease: 'none', // Без сглаживания, чтобы движение было линейным
				scrollTrigger: {
					// Используем проверенный элемент как триггер
					trigger: triggerElement,
					start: () => i ? 'top bottom' : 'top top',
					end: 'bottom top',
					scrub: true, // Связывает анимацию с прокруткой
					invalidateOnRefresh: true, // Обновление при изменении размеров
					markers: true,
				}
			});
		});
	}

	// Обработчик события resize для обновления размеров изображений при изменении
	// окна
	window.addEventListener('resize',
		() => backgrounds.forEach(img => fitImage(img, movementFactor)));

	function fitImage(img) {
		// Получаем размеры окна браузера
		let windowWidth = window.innerWidth;

		// Рассчитываем масштабирование по высоте окна
		let sw = windowWidth / img.naturalWidth;

		// Рассчитываем новые размеры изображения, сохраняя пропорции по ширине
		let w = Math.ceil(img.naturalWidth * sw); // Пропорциональная ширина
		// изображения
		// let h = Math.ceil(img.naturalHeight * sw); // Высота изображения
		// соответствует высоте окна

		// Устанавливаем размеры изображения с помощью GSAP
		gsap.set(img, {
			width: w,
			// height: h,
		});
	}


}

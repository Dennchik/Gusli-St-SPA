import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {animateScroll} from 'react-scroll';

export default function ScrollToTop() {
	const {pathname} = useLocation();
	//
	useEffect(() => {
		// setTimeout(() => {
		const options = {
			// your options here, for example:
			duration: 30,
			smooth: true,
		};
		animateScroll.scrollToTop(options);
		// 	// Принудительно сбрасываем прокрутку для любого маршрута
		// 	window.scrollTo({top: 0});
		// }, 500);

	}, [pathname]);  // Отслеживаем любые изменения в URL
	//
	// return null;


}
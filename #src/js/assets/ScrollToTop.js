import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
	const {pathname} = useLocation();

	useEffect(() => {
		// Принудительно сбрасываем прокрутку для любого маршрута
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, [pathname]);  // Отслеживаем любые изменения в URL

	return null;
}

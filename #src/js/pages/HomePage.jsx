import React, { useEffect, useRef } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import parallaxEffect from '../animations/parallax.jsx';
import { Footer } from '../components/Footer.jsx';
import { MainSlide } from '../components/MainSlide.jsx';
import { Services } from '../components/Services.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';

export const HomePage = () => {
	const container = useRef();
	//* Этот эффект выполнится один раз при монтировании страницы
	useEffect(() => {
		parallaxEffect();
		//* Сброс прокрутки при рендеринг страницы
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className="main-content__slide" ref={container}>
				<MainSlide baseUrl={baseUrl} />
			</section>
			<section className="main-content__services">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="bg" src={'./img/main/body/prl_img.webp'}
											 alt="image" />
								)
								: (<img className="bgs" src={'./img/main/body/prl_img.png'}
												alt="image" />
								)}
						</picture>
					</div>
				</div>
				<Services />
			</section>
			<footer className="main-content__footer" id="footer">
				<Footer baseUrl={baseUrl} />
			</footer>
		</>
	);
};
import React, { useEffect, useRef } from 'react';
import parallaxEffect from '../animations/parallax.jsx';
import { MainSlide } from '../components/MainSlide.jsx';
import { Services } from '../components/Services.jsx';
import { Partners } from '../components/Partners.jsx';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { Footer } from '../components/Footer.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';

export const HomePage = () => {
	const container = useRef();

	useEffect(() => {
		parallaxEffect();
		window.scrollTo(0, 0); // Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы

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

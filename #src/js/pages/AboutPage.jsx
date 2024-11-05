import React, { useEffect } from 'react';
import { About } from '../components/About.jsx';
import { Footer } from '../components/Footer.jsx';
import parallaxEffect from '../animations/parallax.jsx';
import { Partners } from '../components/Partners.jsx';
import { Achievements } from '../components/Achievements.jsx';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
//* ----------------------------------------------------------------------------
const baseUrl = '.';
//* ----------------------------------------------------------------------------
export const AboutPage = () => {
	useEffect(() => {
		parallaxEffect();
		window.scrollTo(0, 0); // Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы
	return (
		<div className="main-content__about-page">
			<section className="main-content__about">
				{/* <div className="material-parallax parallax"> */}
				{/* 	<div className="parallax__image"> */}
				{/* 		<picture> */}
				{/* 			{isWebpSupported() */}
				{/* 				? <img className='parallax__image bg' */}
				{/* 							 src={'img/about/ab-img-01.webp'} alt="image" /> */}
				{/* 				: <img className='parallax__image bg' */}
				{/* 							 src={'img/about/ab-img-01.png'} alt="image" />} */}
				{/* 		</picture> */}
				{/* 	</div> */}
				{/* </div> */}
				<About />
			</section>
			<section className="main-content__partners">
				<Partners baseUrl={baseUrl} />
			</section>
			<section className="main-content__achievements">
				{/* <div className="material-parallax parallax"> */}
				{/* 	<div className="parallax__image"> */}
				{/* 		<img className='bg' */}
				{/* 				 src={'img/about/pattern.webp'} alt="image" /> */}
				{/* 		<picture> */}
				{/* 			{isWebpSupported() */}
				{/* 				? <img className='bg' */}
				{/* 							 src={'img/about/pattern.webp'} alt="image" /> */}
				{/* 				: <img className='bg' */}
				{/* 							 src={'img/about/pattern.png'} alt="image" />} */}
				{/* 		</picture> */}
				{/* 	</div> */}
				{/* </div> */}
				<Achievements baseUrl={baseUrl} />
			</section>
			<div className="main-content__footer" id="footer">
				<Footer baseUrl={baseUrl} />
			</div>
		</div>
	);
};

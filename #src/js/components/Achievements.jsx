import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import Parallax from 'parallax-js';

export function Achievements() {

	useEffect(() => {
		const scene = document.querySelector('.scene');
		const parallax = new Parallax(scene);

		// Очистка эффекта при размонтировании компонента
		return () => {
			parallax.destroy();
		};

	}, []);

	return (
		<div className="achieve-items">
			<div className="material-parallax parallax">
				<div className="parallax__image">
					<picture>
						{isWebpSupported()
							? <img className='parallax__image-achieve bg'
										 src={'img/about/pattern.webp'} alt="image" />
							: <img className='parallax__image-achieve bg'
										 src={'img/about/pattern.png'} alt="image" />}
					</picture>
				</div>
			</div>
			<div className="achieve-items__body _container">
				<div className="achieve-items__title">наши достижения</div>
				<div className="achieve-items__wrapper scene">
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
					</div>
				</div>
			</div>
		</div>
	);
}

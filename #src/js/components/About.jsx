import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
//* ----------------------------------------------------------------------------
export const About = () => {
	const [isContentExpanded, setIsContentExpanded] = useState(
		window.innerWidth > 920);
	const toggleButtonRef = useRef(null);
	const textBlockRef = useRef(null);
	const hideBoxRef = useRef(null);

	const handleToggleClick = useCallback(() => {
		setIsContentExpanded(prevState => !prevState);
	}, []);

	useEffect(() => {
		const toggleButton = toggleButtonRef.current;

		if (toggleButton) {
			if (!isContentExpanded) {
				toggleButton.classList.add('hidden');
			} else {
				toggleButton.classList.remove('hidden');
			}
		}
	}, [isContentExpanded]);

	useEffect(() => {
		const toggleButton = toggleButtonRef.current;
		const textBlock = textBlockRef.current;
		const hideBox = hideBoxRef.current;

		if (toggleButton) {
			toggleButton.addEventListener('click', handleToggleClick);
		}

		if (textBlock && hideBox) {
			if (!isContentExpanded) {
				textBlock.classList.remove('hidden');
				hideBox.classList.remove('hidden');
			} else {
				textBlock.classList.add('hidden');
				hideBox.classList.add('hidden');
			}
		}
	}, [handleToggleClick, isContentExpanded]);

	const handleResize = useCallback(() => {
		setIsContentExpanded(window.innerWidth > 920);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return (
		<div className="about">
			<div className="material-parallax parallax">
				<div className="parallax__image">
					<picture>
						{isWebpSupported()
							? <img className='parallax__image bg'
										 src={'img/about/ab-img-01.webp'} alt="image" />
							: <img className='parallax__image bg'
										 src={'img/about/ab-img-01.png'} alt="image" />}
					</picture>
				</div>
			</div>
			<div className="about__container">
				<div className="content-body about__content">
					<div className="content-body__column">
						<div ref={textBlockRef}
								 className="content-body__text">
							<h1 className="content-body__title">В нашей студии:</h1>
							<p>- описав свой проект, Вы получаете уникальные предложения от
								ведущих профессионалов. Наймите именно того специалиста, который
								идеально подходит для воплощения вашей музыкальной идеи!
								<span ref={toggleButtonRef}
											className="content-body__icon">
									<i className="content-body__ellipsis"></i>
								</span>
							</p>
							<div ref={hideBoxRef}
									 className="content-body__hide-box">
								<div className="content-body__wrapper">
									<span>- мы понимаем, что талант без правильного оборудования
										может оставаться скрытым. Именно поэтому мы предлагаем все
										необходимое для раскрытия вашего потенциала.</span>
									<span>- но наша студия - это не просто место для работы.
										Здесь создается особое настроение, которое способствует
										вашему вдохновению. Дружеская атмосфера позволяет вам
										чувствовать себя комфортно и свободно, чтобы в полной мере
										насладиться процессом создания музыки.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
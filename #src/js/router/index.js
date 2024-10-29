import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {ScrollSmoother} from 'gsap/ScrollSmoother.js';
import {useGSAP} from '@gsap/react';

import {HomePage} from '../pages/HomePage.js';
// import Images from '../views/Images';

export default function Router() {
	const location = useLocation();

	useGSAP(
		() => {
			ScrollSmoother.create({
				smooth: 1,
				effects: true,
				smoothTouch: 0.1,
			});
		},
		{
			dependencies: [location],
		}
	);

	return (
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<Routes>
					<Route path="/">
						<Route index element={<HomePage/>}/>
						{/* <Route path="images" element={<Images/>}/> */}
					</Route>
				</Routes>
			</div>
		</div>
	);
}
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from '../layouts/Header.jsx';
import { Homepage } from "../pages/Homepage.jsx";
import { Aboutpage } from "../pages/Aboutpage.jsx";
import Notfound from "../layouts/NotFound.jsx";
import { CustomLink } from '../components/CustomLink.jsx';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
const baseUrl = '.';
// -----------------------------------------------------------------------------
export default function App() {

	return (
		<>
			<div className='page__header'>
				<CustomLink to="/">HOME</CustomLink>
				<CustomLink to="/about">ABOUT</CustomLink>
				{/* <Header baseUrl={baseUrl} /> */}
			</div>
			<div className="page__content">
				{/* <Homepage /> */}
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<Aboutpage />} />
					<Route path="/about" element={<Notfound />} />
				</Routes>
			</div>
		</>
	);
}
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '.';
export const Layout = () => {
	return (
		<>
			<header className='page__header'>
				<Header baseUrl={baseUrl}/>
			</header>

			<main className="page__main-content">
				<div className="main-content"
				     id='wrapper'>
					<div className="main-content__content"
					     id='content'>
						<Outlet/>
					</div>
				</div>
			</main>
		</>
	);
};
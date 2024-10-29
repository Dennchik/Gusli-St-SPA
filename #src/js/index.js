import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from '../js/app/App.js';


const root = createRoot(document.getElementById('page'));

root.render(
	<StrictMode>
		<HashRouter>
			<App/>
		</HashRouter>
	</StrictMode>
);

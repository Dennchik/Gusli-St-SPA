import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TransitionContext = createContext({completed: false});

export const TransitionProvider = ({children}) => {
	const [completed, setCompleted] = useState(false);

	const toggleCompleted = (value) => {
		setCompleted(value);
	};

	return (
		<TransitionContext.Provider
			value={{
				toggleCompleted,
				completed,
			}}
		>
			{children}
		</TransitionContext.Provider>
	);
};
TransitionProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TransitionContext;
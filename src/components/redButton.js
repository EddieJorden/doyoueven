import React from 'react';

export const RedButton = ({
	setWorthy,
	buttonText,
	setWorthyToTrueOrFalse,
}) => (
	<div>
		<button
			style={{
				width: '210px',
				height: '130px',
				fontSize: '50px',
				color: 'white',
				borderRadius: '20px',
				backgroundColor: 'red',
				boxShadow: '3px 3px black',
				fontWeight: 'bold',
				textShadow: '4px 4px black',
				cursor: 'pointer',
				display: 'block',
			}}
			onClick={() => setWorthy(setWorthyToTrueOrFalse)}
		>
			{buttonText}
		</button>
	</div>
);

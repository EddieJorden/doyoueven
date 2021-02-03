import { worthyPage } from './worthyPage.js';
// import { useState } from 'react';

export const worthyButton = (
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
		onClick={() => {
			worthyPage();
			// removeButton();
		}}
	>
		I am worthy
	</button>
);

// const removeButton = () => {
// 	const copy = cloneDeep(worthyButton);
// 	copy.props.style.display = 'none';
// 	setWorthyButton(copy);
// };

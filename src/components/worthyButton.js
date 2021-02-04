// import { worthyPage } from './worthyPage.js';
import { useState } from 'react';

export function WorthyButton() {
	let [isClicked, setIsClicked] = useState(false);

	return (
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
				onClick={() => setIsClicked((isClicked = true))}
			>
				I am worthy
			</button>
		</div>
	);
}

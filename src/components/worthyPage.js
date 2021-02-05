import React from 'react';
import { RedButton } from './redButton.js';

export const WorthyPage = ({ setWorthy }) => (
	<div>
		<div
			style={{
				backgroundColor: 'grey',
				margin: '10px',
				padding: '10px',
				borderRadius: '30px',
				boxShadow: '3px 3px black',
				textShadow: '2px 2px black',
				color: 'white',
				textAlign: 'center',
			}}
		>
			<h1>Congratulations!</h1>
			<h1>if you believe you are worthy</h1>
			<h1>you may call Eddie at 650-218-6940</h1>
			<img
				src="coolerthanyou.jpg"
				alt="Eddie is cooler than you"
				style={{
					width: '100%',
					height: 'auto',
					borderRadius: '10%',
					boxShadow: '4px 4px black',
				}}
			></img>
		</div>
		<div
			style={{
				textAlign: 'center',
				color: 'white',
				fontSize: '25px',
				marginBottom: '10px',
			}}
		>
			<div>if you feel intimidated</div>
			<div>click the not worthy button below to view the criteria again</div>
		</div>
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<RedButton
				setWorthy={setWorthy}
				buttonText="not worthy"
				setWorthyToTrueOrFalse={false}
			/>
		</div>
	</div>
);

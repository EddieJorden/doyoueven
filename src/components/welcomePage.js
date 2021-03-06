import React from 'react';
import { RedButton } from './redButton';

export const WelcomePage = ({ setWorthy }) => {
	return (
		<div>
			<div
				style={{
					fontSize: '30px',
					background: 'grey',
					boxShadow: '3px 3px black',
					borderRadius: '30px',
					margin: '20px',
					padding: '10px',
					textShadow: '2px 2px black',
					color: 'white',
				}}
			>
				<div
					style={{
						fontSize: '50px',
						fontWeight: 'bold',
						marginBottom: '20px',
						textShadow: '4px 4px black',
						textAlign: 'center',
					}}
				>
					Learn to hangout
				</div>

				<ul>
					<li>you don't know how to relax...</li>
					<li>you don't drive manual</li>
					<li>have you even read a book?</li>
					<li>You don't even lift bro</li>
					<li>you don't even know about linux</li>
				</ul>
				<div>
					<div style={{ textAlign: 'center', color: 'white' }}></div>
				</div>
			</div>
			<div
				style={{
					textAlign: 'center',
					color: 'white',
					fontSize: '25px',
					marginBottom: '10px',
				}}
			>
				click this button if you think you are worthy.
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
					buttonText="I am worthy"
					setWorthyToTrueOrFalse={true}
				/>
			</div>
		</div>
	);
};

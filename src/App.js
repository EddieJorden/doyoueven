import './App.css';
import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

function App() {
	const [title, setTitle] = useState(
		<div
			style={{
				fontSize: '30px',
				background: 'grey',
				boxShadow: '3px 3px black',
				borderRadius: '30px',
				margin: '20px',
				padding: '10px',
				textShadow: '2px 2px black',
			}}
		>
			<div
				style={{
					fontSize: '50px',
					fontWeight: 'bold',
					marginBottom: '20px',
					textShadow: '4px 4px black',
				}}
			>
				Reasons why you can't even hang out
			</div>
			<list>
				<li>do you smoke weed?</li>
				<li> you don't drive manual</li>
				<li>have you even tried psilocybin?</li>
				<li>You don't even lift bro</li>
				<li>you don't even know what linux is</li>
			</list>
		</div>
	);

	const buttonClick = () => {
		setTitle(
			<div
				style={{
					backgroundColor: 'grey',
					margin: '10px',
					padding: '10px',
					borderRadius: '30px',
					boxShadow: '3px 3px black',
					textShadow: '2px 2px black',
				}}
			>
				<h1>Congratulations, you are worthy.</h1>
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
		);
	};

	const [worthyButton, setWorthyButton] = useState(
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
				buttonClick();
				removeButton();
			}}
		>
			I am worthy
		</button>
	);

	const removeButton = () => {
		const copy = cloneDeep(worthyButton);
		copy.props.style.display = 'none';
		setWorthyButton(copy);
	};

	// function hideButton() {
	// 	worthyButton.style.display = 'none';
	// }

	console.log(worthyButton);

	return (
		<div className="App">
			<div>
				<div style={{ textAlign: 'center', color: 'white' }}>{title}</div>
			</div>{' '}
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
				{worthyButton}
			</div>
		</div>
	);
}

export default App;

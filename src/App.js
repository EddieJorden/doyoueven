import './App.css';
import { useState } from 'react';
// import { worthyButton } from './components/worthyButton.js';
// import { reasons } from './components/reasons.js';
// import sacredgpurp from './components/images/sacredgpurp.jpeg';

function App() {
	const [title, setTitle] = useState(
		<div
			style={{
				fontSize: '30px',
				background: 'grey',
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

	const worthyButton = (
		<button
			style={{
				width: '210px',
				height: '130px',
				fontSize: '50px',
				color: 'white',
				borderRadius: '20px',
				backgroundColor: 'red',
				fontWeight: 'bold',
				textShadow: '4px 4px black',
				cursor: 'pointer',
			}}
			onClick={() =>
				setTitle(
					<div>
						<h1>Congratulations, you are worthy.</h1>
						<h1>you may call Eddie at 650-218-6940</h1>
						<img
							src="coolerthanyou.jpg"
							alt="Eddie is cooler than you"
							style={{ width: '100%', height: 'auto' }}
						></img>
					</div>
				)
			}
		>
			I am worthy
		</button>
	);

	// const [newButton, setNewButton] = useState('');

	return (
		<div className="App">
			<div>
				<div style={{ textAlign: 'center', color: 'white' }}>{title}</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					// flexDirection: 'column',
					// position: 'relative',
				}}
			>
				{worthyButton}
			</div>
			{/* <button onClick={() => setTitle('wud up...')}>hello?</button> */}
			{/* <button
				onClick={}
			></button>
			{/* <div>{newButton}</div> */}
		</div>
	);
}

export default App;

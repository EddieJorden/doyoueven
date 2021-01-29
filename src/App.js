import './App.css';
import { useState } from 'react';
// import { reasons } from './components/reasons.js';
// import sacredgpurp from './components/images/sacredgpurp.jpeg';

function App() {
	const [title, setTitle] = useState(
		<div>
			<div>Are you worthy?</div>
			<list>
				<li>do you smoke weed?</li>
				<li> you don't drive manual</li>
				<li>have you even tried psilocybin?</li>
			</list>
			<div></div>
		</div>
	);

	const worthyButton = (
		<button
			onClick={() =>
				setTitle(
					<div>
						<h1>Congratulations, you are worthy.</h1>
						<h1>you may call Eddie at 650-218-6940</h1>
						<img
							src="coolerthanyou.jpg"
							alt="Eddie is cooler than you"
							style={{ width: 500 }}
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
				<div>{title}</div>
			</div>
			<div>{worthyButton}</div>
			{/* <button onClick={() => setTitle('wud up...')}>hello?</button> */}
			{/* <button
				onClick={}
			></button> */}
			{/* <div>{newButton}</div> */}
		</div>
	);
}

export default App;

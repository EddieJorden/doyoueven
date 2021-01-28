import './App.css';
import { useState } from 'react';

function App() {
	const [title, setTitle] = useState('elloo.?.');

	// const [newButton, setNewButton] = useState('');

	return (
		<div className="App">
			<h1>{title}</h1>
			<button onClick={() => setTitle('wud up...')}>hello?</button>
			{/* <button
				onClick={}
			></button> */}
			{/* <div>{newButton}</div> */}
		</div>
	);
}

export default App;

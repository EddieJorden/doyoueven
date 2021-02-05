import './App.css';
import React, { useState } from 'react';
import { WorthyPage } from './components/worthyPage.js';

import { WelcomePage } from './components/welcomePage.js';

// import { worthyPage } from './components/worthyPage.js';

function App() {
	const [worthy, setWorthy] = useState(false);
	return (
		<div className="App">
			{!worthy ? (
				<WelcomePage setWorthy={setWorthy} />
			) : (
				<WorthyPage setWorthy={setWorthy} />
			)}
		</div>
	);
}
export default App;

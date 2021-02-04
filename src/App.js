import './App.css';
// import { useState } from 'react';
// import cloneDeep from 'lodash/cloneDeep';
import { welcomePage } from './components/welcomePage.js';
// import { worthyButton } from './components/worthyButton.js';
import { worthyPage } from './components/worthyPage.js';
import { WorthyButton } from './components/worthyButton.js';

function App() {
	return (
		<div className="App">
			<div>
				{/* {isClicked === true ? welcomePage : worthyPage} */}
				{welcomePage}
			</div>
			<div>{WorthyButton}</div>
		</div>
	);
}
export default App;

// import { worthyButton } from './components/worthyButton.js';

import { worthyButton } from './worthyButton';

export const welcomePage = (
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
			<div>
				<div style={{ textAlign: 'center', color: 'white' }}></div>
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
		</div>
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>{worthyButton}</div>
		</div>
	</div>
);

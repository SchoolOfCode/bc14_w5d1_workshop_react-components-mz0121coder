import React from 'react';
import Card from '../Card';
import './App.css';

function App() {
	const buttonText = 'more';
	return (
		<div className='App'>
			<Card title='Title 1' someText={buttonText} />
		</div>
	);
}

export default App;

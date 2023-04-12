import Card from '../Card/index.js';
import './App.css';
import React from 'react';
import Button from '../Button/index.js';

function App() {
	return (
		<div className='App'>
			<Card title='Title 1' someText='This is a card' />
			<Button buttonText='See more' />
		</div>
	);
}

export default App;

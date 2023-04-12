/*Inside index.js, create a functional component that returns a JSX element for your card.*/

import React from 'react';
import Button from '../Button';

function Card(props) {
	return (
		<div className='card'>
			<h3>{props.title}</h3>
			<p>{props.someText}</p>
			<Button buttonText={props.someText} />
			<img
				alt='soc'
				width={'100%'}
				src={'https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg'}
			/>
		</div>
	);
}

export default Card;

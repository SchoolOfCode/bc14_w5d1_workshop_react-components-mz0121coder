/*Inside index.js, create a functional component that returns a JSX element for your card.*/

export default function Card(props) {
	return (
		<div className='card'>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
			<img
				alt='soc'
				width={'100%'}
				src={'https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg'}
			/>
		</div>
	);
}

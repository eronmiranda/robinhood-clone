import { useState } from 'react';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			{/* Header */}
			<div className="app__header">
				<Header />
			</div>
			<div className="app__body">
				<div className="app__container">
					<Newsfeed />
					{/* stats */}
					<Stats />
				</div>
			</div>
			{/* Body */}
			{/* 1:02:22 https://www.youtube.com/watch?v=TxggrQ0nHjY */}
		</div>
	);
}

export default App;

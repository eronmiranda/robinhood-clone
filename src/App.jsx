import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			{/* Header */}
			<div className="app__header">
				<Header />
			</div>
			<div className="app__body"></div>
			{/* Body */}
		</div>
	);
}

export default App;

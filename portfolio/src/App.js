import React from 'react'
import './App.css';
import { Home, About, Work, Contact } from './pages'

function App() {
	return (
		<div className='appContainer'>
			<Home />
    	<About />
    	<Work />
    	<Contact />
		</div>
	);
}

export default App;
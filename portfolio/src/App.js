import React from 'react'
import './App.css';
import { Home, About, Work, Contact } from './pages'

 /* Here all pages are collected and whole website is put together */
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
import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1
const currentDay = new Date().getDate()

// // export - императивный. Потому что это реализация нужного кода
// export const App = () => {
// 	// return html код - декларативный. Потому что мы указываем, что хотим видеть на выходе
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<h2>{currentDay}/{currentMonth}/{currentYear}</h2>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {

	const img = createElement('img', {
		className: 'App-logo',
		src: logo,
		alt: 'logo'
	})
	const code = createElement('code', null, 'src/App.js')
	const p = createElement('p', null, 'Edit ', code, ' and save to reload.')
	const link = createElement('a', {
		className: 'App-link',
		href: 'https://reactjs.org',
		target: '_blank',
		rel: 'noopener noreferrer'
	}, 'Learn React')

	const header = createElement('header', { className: 'App-header' }, img, p, link)
	const div = createElement('div', { className: 'App' }, header)
	return div
}

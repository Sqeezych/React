import logo from './logo.svg';
import './App.css';

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1
const currentDay = new Date().getDate()

// export - императивный. Потому что это реализация нужного кода
export const App = () => {
	// return html код - декларативный. Потому что мы указываем, что хотим видеть на выходе
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h2>{currentDay}/{currentMonth}/{currentYear}</h2>
			</header>
		</div>
	);
};

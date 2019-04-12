'use strict';

const e = React.createElement;

class App extends React.Component
{
	constructor (props)
	{
		super(props);
		this.state = {};
	}

	render()
	{
		return e(Header);
	}
}

const Header = () => {
	return e('div', { id: 'header' },
			[e('h2',null, 'Welcome to my React Drum Machine!'),
			e('p', null, 'This page is my Third Front End Project FreeCodeCamp using React')]
			);
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);
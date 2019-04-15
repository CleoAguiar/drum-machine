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
		return [e(Header), e(DrumMachine), e(Footer)];
	}
}

const Header = () => {
	return e('div', { id: 'header' },
			[e('h2',null, 'Welcome to my React Drum Machine!'),
			e('p', null, 'This page is my Third Front End Project FreeCodeCamp using React')]
			);
};

const DrumMachine = () => {
	return e('div', { id: 'drum-machine' }, e(Display));
};

const Display = () => {
	return e('div', { id: 'display'})
};

const Footer = () => {
	return e('div', { id: 'footer' }, 
		[ String.fromCharCode(169), // copyright symbol &#169;
		  ' 2019 ' ,
		  e('a', {href: 'http://cleoaguiar.github.io'}, 'Cleo Aguiar'), 
		  '. All rights reserved.']
		);
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
	e(App),
	domContainer
);
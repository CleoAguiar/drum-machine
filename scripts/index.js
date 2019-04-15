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
	return e('div', { id: 'display'}, e(PadElements));
};

const PadElements = () => {
	return e('div', { id: 'pad-blank' },
		[e('div', { id: 'Header-1', class: 'drum-pad'}),
		 e('div', { id: 'Header-2', class: 'drum-pad'}),
		 e('div', { id: 'Header-3', class: 'drum-pad'}),
		 e('div', { id: 'Header-4', class: 'drum-pad'}),
		 e('div', { id: 'Header-5', class: 'drum-pad'}),
		 e('div', { id: 'Header-6', class: 'drum-pad'}),
		 e('div', { id: 'Header-7', class: 'drum-pad'}),
		 e('div', { id: 'Header-8', class: 'drum-pad'}),
		 e('div', { id: 'Header-9', class: 'drum-pad'}), ]);
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
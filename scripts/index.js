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
	return e('div', { id: 'drum-machine' }, [e(PadElements), e(Controls)]);
};

const PadElements = () => {
	return e('div', { id: 'pad-blank' },
		[e('div', { id: 'Header-1', class: 'drum-pad'}, [Audio('Q', 'Header-1'), 'Q']),
		 e('div', { id: 'Header-2', class: 'drum-pad'}, [Audio('W', 'Header-2'), 'W']),
		 e('div', { id: 'Header-3', class: 'drum-pad'}, [Audio('E', 'Header-3'), 'E']),
		 e('div', { id: 'Header-4', class: 'drum-pad'}, [Audio('A', 'Header-4'), 'A']),
		 e('div', { id: 'Header-5', class: 'drum-pad'}, [Audio('S', 'Header-5'), 'S']),
		 e('div', { id: 'Header-6', class: 'drum-pad'}, [Audio('D', 'Header-6'), 'D']),
		 e('div', { id: 'Header-7', class: 'drum-pad'}, [Audio('Z', 'Header-7'), 'Z']),
		 e('div', { id: 'Header-8', class: 'drum-pad'}, [Audio('X', 'Header-8'), 'X']),
		 e('div', { id: 'Header-9', class: 'drum-pad'}, [Audio('C', 'Header-9'), 'C']), ]);
};

function Audio (clipId, nameFile) {
	return e('audio', { class: 'clip', id: clipId, src: `https://s3.amazonaws.com/freecodecamp/drums/${nameFile}.mp3` });
};


const Controls = () => {
	return e('div', { id: 'controls-container'}, Display('need improve'));
};

function Display (name) {
	return e('p', { id: 'display' }, name);
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
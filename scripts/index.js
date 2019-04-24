'use strict';

const e = React.createElement;

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://Cev_H2.mp3'
  },
];


const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
};

const inactiveStyle = {
    backgroundColor: '#2c3e50',
    marginTop: 10,
    boxShadow: "3px 3px 5px black"
};


class DrumPad extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            padStyle: inactiveStyle
        };

        this.activatePad = this.activatePad.bind(this);
    }

    activatePad()
    {
        if (this.props.power){
            this.state.padStyle.backgroundColor === 'orange' ?
                this.setState({ padStyle: inactiveStyle }) :
                this.setState({ padStyle: activeStyle });
        }
        else {
            this.state.padStyle.marginTop === 13 ?
                this.setState({ padStyle: inactiveStyle }) :
                this.setState({ padStyle: { 
                                    height: 77,
                                    marginTop: 13,
                                    backgroundColor: '#2c3e50',
                                    boxShadow: '0 3px #2c3e50' } });
        }
    }

    render() {
        return [e('div', { id: this.props.clipId, onClick: 'improve', className: 'drum-pad', style: this.state.padStyle }, 
                    [e('audio', { class: 'clip', id: this.props.keyTrigger , src: this.props.clip } ), this.props.keyTrigger]
                )];
    }
}


class PadBlank extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let padBank;
        this.props.power ?
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return e('div', {id: 'improve1'});
            }) :
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return e('div', {id: 'improve2'});
            })

        return e('div', { id:'pad-blank' }, padBank);
    }
}


class App extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            currentPadBank: bankOne
        };
        
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
    return e('audio', { class: 'clip', id: clipId, src: `https://${nameFile}.mp3` });
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
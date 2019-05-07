'use strict';

const e = React.createElement;

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];


const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
};

const inactiveStyle = {
    backgroundColor: '#404040',
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
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
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

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount()
    {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(key)
    {
        if (key.keyCode === this.props.keyCode)
            this.playSound();
    }

    playSound(s)
    {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.activatePad();
        setTimeout(() => this.activatePad(), 100);
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render() {
        return [e('div', { id: this.props.clipId, onClick: this.playSound, className: 'drum-pad', style: this.state.padStyle }, 
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
                return e(DrumPad, {clipId: padBankArr[i].id, clip: padBankArr[i].url, keyTrigger: padBankArr[i].keyTrigger, keyCode: padBankArr[i].keyCode, updateDisplay: this.props.updateDisplay, power: this.props.power });
            }) :
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return e(DrumPad, {clipId: padBankArr[i].id, clip: '#', keyTrigger: padBankArr[i].keyTrigger, keyCode: padBankArr[i].keyCode, updateDisplay: this.props.updateDisplay, power: this.props.power });
            })

        return e('div', { className:'pad-blank' }, padBank);
    }
}


class App extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            power: true,
            display: String.fromCharCode(160),
            currentPadBank: bankOne
        };

        this.displayClipName = this.displayClipName.bind(this);
        
    }

    displayClipName(name)
    {
        if (this.state.power)
        {
            this.setState({ display: name });
        }
    }

    render()
    {
        return [e(Header), 
                e(PadBlank, {power: this.state.power, updateDisplay: this.displayClipName, currentPadBank: this.state.currentPadBank}), 
                e(Footer)];
    }
}

const Header = () => {
    return e('div', { class: 'header' },
            [e('h2',null, 'Welcome to my React Drum Machine!'),
            e('p', null, 'This page is my Third Front End Project FreeCodeCamp using React')]
            );
};

const Footer = () => {
    return e('div', { class: 'footer' }, 
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
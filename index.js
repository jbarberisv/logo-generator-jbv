const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const {Circle, Triangle, Square} = require('./lib/shapes');
const { switchAll } = require('rxjs');
const { log } = require('console');

function generateLogo(parameters) {
    switch (parameters.shape) {
        case 'Circle':
            const circleLogo = new Circle.generate(parameters.text , parameters.textColor, parameters.color);
            break;
        case 'Triangle':
        
        break;

        case 'Square':
        
        break;

        default:
            console.log('Pls insert a Shape');
            break;
    }
    
}

function questions () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Insert logo text? (3 characters max)'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color keyword (Or hexadecimal number)',
            default: 'white'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['Circle', 'Square', 'Triangle'],
            default: 'Circle'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter shape color keyword (Or hexadecimal number)',
            default: 'blue'
        },

    ])
    .then((answers) => {
        console.log(answers)
  
        return generateLogo(answers);
  
  
  
      })
}

questions()
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const Circle = require('./lib/shapes');
const Triangle = require('./lib/shapes');
const Square = require('./lib/shapes');
const { log } = require('console');

function generateLogo(parameters) {
    console.log(parameters.shape);
    switch (parameters.shape) {
        case 'Circle':
            const circleLogo = new Circle(parameters.text , parameters.textColor, parameters.color);
            return circleLogo.generate();
            
        case 'Triangle':
            const triangleLogo = new Triangle(parameters.text , parameters.textColor, parameters.color);
            return triangleLogo.generate();


        case 'Square':
            const squareLogo = new Square(parameters.text , parameters.textColor, parameters.color);
            return squareLogo.generate();

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
      .then((data) => {
        console.log(data);
        fs.writeFile('./examples/logo.svg', data,(err)=> {
          if(err){
            console.log('error',err); 
          }
          console.log('SVG Logo generated!');
        })
      })

}

questions()
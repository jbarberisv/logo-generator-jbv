const { Circle, Triangle, Square } = require('./shapes');

const text = "yes";
const textColor = "yellow";
const color = "blue";

describe('Shapes', () => {
    test('Circle shape generates correctly', () => {
        const shape = new Circle(text, textColor, color);
        expect(shape.generate()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="blue" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">yes</text>

        </svg>
        `);
    });

    test('Triangle shape generates correctly', () => {
        const shape = new Triangle(text, textColor, color);
        expect(shape.generate()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,20 280,180 20,180" fill="blue" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">yes</text>

        </svg>
        `);
  });

});





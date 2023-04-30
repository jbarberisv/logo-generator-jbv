class Circle {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    generate() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${this.color}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>
        `;
        }
    }

class Triangle {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }

    generate() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,20 280,180 20,180" fill="${this.color}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>
        `;
        
        }
    }

class Square {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    generate() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
            <rect x="50" y="50" width="200" height="100" fill="${this.color}" />

            <text x="150" y="100" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>

        `;
        }
    }

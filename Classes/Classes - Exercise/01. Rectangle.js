// Write a class Rectangle for a rectangle object. It needs to have a width (Number), height (Number) and color (String) properties, 
// which are set from the constructor and a calcArea() method, that calculates and returns the rectangle’s area.
// Input
// The color property should start with a capital letter.
// The constructor function will receive valid parameters.
// Output
// The calcArea() method should return a number.
// Submit the class definition as is, without wrapping it in any function.


class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }


    get width() {
        return this._width;
    }


    set width(value) {
        if (typeof value !== 'number') {
            return new TypeError('The value must be a number.')
        }

        this._width = value;
    }


    get height() {
        return this._height;
    }

    set height(value) {
        if (typeof value !== 'number') {
            return new TypeError('The value must be a number.')
        }

        this._height = value;
    }

    get color() {
        return this._color[0].toUpperCase() + this._color.slice(1);
    }

    set color(value) {
        if (typeof value !== 'string') {
            return new TypeError('The value must be a string.')
        }

        this._color = value;
    }

    calcArea(){
        return this._height * this._width;
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

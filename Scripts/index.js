console.log('Hello');

var Animal = (function () {
    function Animal(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    Animal.prototype.showInfo = function () {
        console.log('Name: ' + this.name + '\nNumber of legs: ' + this.legs);
    };
    return Animal;
})();

window.onload = function () {
    var penguin = new Animal('Penguin', 2);
    penguin.showInfo();

    var dog = new Animal('Dog', 4);
    dog.showInfo();
};

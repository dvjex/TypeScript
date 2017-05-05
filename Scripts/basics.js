var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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

var TwoLegs = (function (_super) {
    __extends(TwoLegs, _super);
    function TwoLegs(name) {
        _super.call(this, name, 2);
    }
    return TwoLegs;
})(Animal);
var FourLegs = (function (_super) {
    __extends(FourLegs, _super);
    function FourLegs(name) {
        _super.call(this, name, 4);
    }
    return FourLegs;
})(Animal);

window.onload = function () {
    var penguin = new Animal('Penguin', 2);
    penguin.showInfo();
    var ping = new TwoLegs('Ping the Penguin');
    ping.showInfo();

    var dog = new Animal('Dog', 4);
    dog.showInfo();
    var cat = new FourLegs('Billy Cat');
    cat.showInfo();
};

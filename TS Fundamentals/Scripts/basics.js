var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    Animal.prototype.logInfo = function () {
        console.log('Name: ' + this.name + '\nNumber of legs: ' + this.legs);
    };

    Animal.prototype.getInfo = function () {
        return 'Name: ' + this.name + '\nNumber of legs: ' + this.legs + '\n';
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

var Echo = (function () {
    function Echo(msg) {
        this.echoMsg = msg;
    }
    Echo.prototype.echoText = function () {
        return this.echoMsg + '\n';
    };
    return Echo;
})();

function inheritanceExample() {
    var inheritanceText = 'Inheritance:\n';

    var penguin = new Animal('Penguin', 2);
    penguin.logInfo();
    inheritanceText += penguin.getInfo();
    var ping = new TwoLegs('Ping the Penguin');
    ping.logInfo();
    inheritanceText += ping.getInfo();

    var dog = new Animal('Dog', 4);
    dog.logInfo();
    inheritanceText += dog.getInfo();
    var billy = new FourLegs('Billy Cat');
    billy.logInfo();
    inheritanceText += billy.getInfo();

    var inheritance = document.createElement('div');
    inheritance.innerText = inheritanceText;
    document.body.appendChild(inheritance);
}
;

window.onload = function () {
    inheritanceExample();
    var br = document.createElement('br');
    document.body.appendChild(br);
    genericExample();
};

function genericExample() {
    var genericText = 'Generic:\n';

    var str = new Echo('Echo this');
    genericText += str.echoText();

    var num = new Echo(42);
    genericText += num.echoText();

    var generic = document.createElement('div');
    generic.innerText = genericText;
    document.body.appendChild(generic);
}
;

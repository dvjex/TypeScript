class Animal{
	legs: number;
	name: string;
	
	constructor(name: string, legs: number){
		this.name = name;
		this.legs = legs;
	}
	
	logInfo(){
		console.log('Name: '+this.name+'\nNumber of legs: '+this.legs);
	}
	
	getInfo(){
		return 'Name: '+this.name+'\nNumber of legs: '+this.legs+'\n';
	}
}

class TwoLegs extends Animal {
	constructor(name: string){
		super(name, 2);
	}
}
class FourLegs extends Animal {
	constructor(name: string){
		super(name, 4);
	}
}

class Echo<T>{
	echoMsg: T;
	constructor(msg: T){
		this.echoMsg = msg;
	}
	echoText(){
		return this.echoMsg+'\n';
	}
}

function inheritanceExample(){
	var inheritanceText: string = 'Inheritance:\n';
	
	var penguin = new Animal('Penguin', 2);
	penguin.logInfo();
	inheritanceText += penguin.getInfo();	
	var ping = new TwoLegs('Ping the Penguin');
	ping.logInfo();
	inheritanceText += ping.getInfo();
	
	var dog = new Animal('Dog',4);
	dog.logInfo();
	inheritanceText += dog.getInfo();
	var billy = new FourLegs('Billy Cat');
	billy.logInfo();
	inheritanceText += billy.getInfo();
	
	var inheritance = document.createElement('div');
	inheritance.innerText = inheritanceText;
	document.body.appendChild(inheritance);
};

window.onload = function(){
	inheritanceExample();
	var br = document.createElement('br');
	document.body.appendChild(br);
	genericExample();
};

function genericExample(){
	var genericText: string = 'Generic:\n';
	
	var str = new Echo<string>('Echo this');
	genericText += str.echoText();
	
	var num = new Echo<number>(42);
	genericText += num.echoText();
	
	var generic = document.createElement('div');
	generic.innerText = genericText;
	document.body.appendChild(generic);
};
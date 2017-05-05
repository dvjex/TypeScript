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

window.onload = function(){
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
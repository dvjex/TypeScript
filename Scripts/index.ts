console.log('Hello');

class Animal{
	legs: number;
	name: string;
	
	constructor(name: string, legs: number){
		this.name = name;
		this.legs = legs;
	}
	
	showInfo(){
		console.log('Name: '+this.name+'\nNumber of legs: '+this.legs);
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
	var penguin = new Animal('Penguin', 2);
	penguin.showInfo();
	var ping = new TwoLegs('Ping the Penguin');
	ping.showInfo();
	
	var dog = new Animal('Dog',4);
	dog.showInfo();
	var cat = new FourLegs('Billy Cat');
	cat.showInfo();
};
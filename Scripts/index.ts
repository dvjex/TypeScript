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

window.onload = function(){
	var penguin = new Animal('Penguin', 2);
	penguin.showInfo();
	
	var dog = new Animal('Dog',4);
	dog.showInfo();
};
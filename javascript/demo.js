function add(a,b){
    console.log(a+b);
}

add(2,3);

var train1=["item1",23,"item3"];

console.log(train1);

var Person= {}
Person.name="himank";
Person.age=22;

console.log(Person);


console.log(Math.min(1,2,3));


var car={
    price:100,
    displayprice:function(){
        console.log(this.price);
    }
}
car.displayprice();

class Car{
	constructor(color,speed){
		this.color=color;
		this.speed=speed;
	}

	turboOn(){
		console.log("turbo is on");
	}
}

const car1=new Car("red",20);
car1.turboOn();

var typeofsent= "template literal";
var sent= `This is a
${typeofsent}
sentence
`
console.log(sent);


// testing in javascript using expect. similar to junit

function addnum(a,b){
	return a+b;
}

expect(addnum(2,3)).toBe(5);
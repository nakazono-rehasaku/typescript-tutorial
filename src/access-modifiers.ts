export {};

class Person {
	name: string;
	age: number;

	// constructorの戻り値の型は指定しない
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	profile(): string {
		return `name: ${this.name}, age: ${this.age}`;
	}
}
let taro = new Person('taro', 32);
console.log(taro.profile());
// let hanako = new Person();

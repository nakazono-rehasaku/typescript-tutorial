export {};

// signature でどのような型データをうけとるのか、制約をかけることができる
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
	console.log(typeof value);
	if (typeof value === 'number') {
		return value * 2;
	} else if (typeof value === 'string') {
		return value + value;
	} else {
		throw '型を確認してください';
	}
}

console.log(double(100));
console.log(double('Go '));
console.log(double(true));

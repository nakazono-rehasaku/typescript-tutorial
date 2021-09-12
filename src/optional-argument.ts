export {};

//ポイントは任意引数は引数名の最後に?をつけること
let bmi: (height: number, weight: number, printable?: boolean) => number = (
	height: number,
	weight: number,
	printable?: boolean
): number => {
	const bmi: number = weight / (height * height);

	if (printable) {
		console.log({ bmi });
	}
	return bmi;
};

bmi(1.78, 86);

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.78, 86, false)

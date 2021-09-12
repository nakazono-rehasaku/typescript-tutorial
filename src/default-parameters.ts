export {};

const nextYearSalary = (currentSalaly: number, rate: number = 1.1): number => {
	return currentSalaly * rate;
};

console.log(nextYearSalary(1000));

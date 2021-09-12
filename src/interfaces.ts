export {};

// エイリアスなのでイコールで代入が必要
type ObjectType = {
  name: string;
  age: number;
}

// イコールは不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface= {
  name: "ham-san",
  age: 43
}
export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsh: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlater = {
//   throwingSpeed: number; 
//   battingAverage: number;
// }

// ここがポイント＆でつなぐことで既存の型を継承して新しい型を作成できる
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.386
}
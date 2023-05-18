interface IUser {
  UId: number,
  name: string,
  birth: Date,
  gender?: 'male'|'female',
  weight?: number,
  height?: number,
  level?: number,
  maxHR?: number,
  aetHR?: number,
  aetTempo?: number,
};

const myProfile: IUser = {
  UId: 1,
  name: 'Artyom Striganov',
  birth: new Date(1997, 9, 18),
};

console.log(myProfile);
export {}
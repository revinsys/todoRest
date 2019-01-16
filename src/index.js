import { Model } from './models/main';

const myModel = new Model([
  { name: "test", check: true, pos: 2 },
  { name: "test 2", check: false, pos: 3 },
]);

myModel.create({ name: "test 3", check: false, pos: 1 });

const res1 = myModel.find({}, "pos");
myModel.update({ name: "test" }, { name: "new name" });
const res2 = myModel.find({}, "name");

console.log(res1, res2);
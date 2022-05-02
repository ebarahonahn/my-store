const username:string = "edgar";

const sum = (a:number, b:number) => {
  return a + b;
}

sum(1,3);

class Person{
  constructor(public age:number, public lastName: string){}
}

const nico = new Person(15,"Barahona");
nico.age;

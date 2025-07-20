var name = 'Global';

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log('1:', this.name);

    setTimeout(function () {
      console.log('2:', this.name);
    }, 0);

    setTimeout(() => {
      console.log('3:', this.name);
    }, 0);
  }
}

const p = new Person('Alice');
const say = p.sayHi;

say();                // ① Global Global  Global
p.sayHi();            // ② Alice Global Alice
p.sayHi.call({ name: 'Bob' }); // ③Bob  Global Bob
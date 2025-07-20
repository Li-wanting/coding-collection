var name = 'Global';

const obj = {
  name: 'Obj',
  sayName: function() {
    console.log('1:', this.name);
    setTimeout(function() {
      console.log('2:', this.name);
    }, 100);

    setTimeout(() => {
      console.log('3:', this.name);
    }, 200);
  }
};

obj.sayName();

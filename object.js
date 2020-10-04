const person = {
  firstName: 'arvind',
  lastName: 'kumar',
  age: 29,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName());

console.log(person.age);


function express() {
  return {
    use: function (middleware) {

    },
    get: function (path, fn) {
      // some how the library access the req param
      // perform some logic or check
      // finally calls the callback fn
      fn('req', 'res');
    },

  };
}

const app = express();

app.get('/users', function (req, res) {

});



// person obj in es6

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
}

let p1 = new Person('anurag', 'kumar');
console.log(p1);

class AdminPerson extends Person {
  constructor(firstName, lastName, isAdmin) {
    super(firstName, lastName);
    this.isAdmin = isAdmin;
  }
}

let ap1 = new AdminPerson('arvind', 'kumar', true);
console.log(ap1);

class Options {
  constructor(color, thickness) {
    this.color = color;
    this.thickness = thickness;
  }
}

class Graph {
  constructor(option) {
    this.option = option;
  }

  draw = function () {
    console.log('From graph draw function', this.option.color, this.option.thickness);
  }
}

let options = new Options('red', '2cm');
let g = new Graph(options);

g.draw()

console.log(g)
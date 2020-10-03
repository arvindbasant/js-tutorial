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
      fn(req, res);
    },

  };
}

const app = express();

app.get('/users', function (req, res) {

});
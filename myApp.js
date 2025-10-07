// Load environment variables
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ✅ Define Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// ✅ Create Model
const Person = mongoose.model("Person", personSchema);

// ==== No modifiques lo que sigue hasta que FreeCodeCamp lo pida ====

const createAndSavePerson = (done) => {
  // Creamos una nueva persona usando el modelo Person
  const person = new Person({
    name: "Tomás Saavedra",
    age: 25,
    favoriteFoods: ["pizza", "hamburguesa", "sushi"]
  });

  // Guardamos la persona en la base de datos
  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  { name: "Carlos", age: 30, favoriteFoods: ["tacos", "empanadas"] },
  { name: "Lucía", age: 22, favoriteFoods: ["sushi", "ramen"] },
  { name: "Tomás", age: 25, favoriteFoods: ["pizza", "hamburguesa"] }
];


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};


const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};




const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};



const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  done(null /*, data*/);
};

// ✅ Export model for FreeCodeCamp tests
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

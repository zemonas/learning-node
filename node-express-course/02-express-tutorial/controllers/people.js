let { people } = require("../data");

const createPerson = (req, res) => {
  const { id, name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "WTF are you doing" });
  }
  const newPeople = people.push({ id, name });
  res.status(201).json({ success: true, data: name });
};

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePeople,
};

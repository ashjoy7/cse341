const awesomeFunction = (req, res, next) => {
    res.json('Awesome person');
};

const returnanotherPerson = (req, res, next) => {
    res.json('SUper awesome person');
};

module.exports = {awesomeFunction, returnanotherPerson};
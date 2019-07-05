const string = require('./string');

const Libby = {
    string: string
}

module.exports = Libby;

var str = 'mineaaa';

var caps = Libby.string.capitalize(str);
console.log(caps);
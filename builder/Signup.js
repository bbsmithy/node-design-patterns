const User = require('./User');
const UserPref = require('./UserPref');

class Signup {
    async create({ name, email, age, photo, nickname, favouriteToics, isSME, isModerator, isAdmin }) {
        const newUser = new User(name, email, age, photo, nickname, favouriteToics, isSME, isModerator, isAdmin);
        await new UserPref(newUser, nickname, favouriteToics, isSME, isModerator, isAdmin);
    }
}

module.exports = new Signup();
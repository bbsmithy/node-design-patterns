const Signup = require('./Signup');

class SignupBuilder {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    setNick(name) {
        this.nickname = name;
        return this;
    }

    setPhoto(photo) {
        this.photo = photo;
        return this;
    }

    setFavTopics(topics) {
        this.favouriteToics = topics;
        return this;
    }

    setIsSME(isSME) {
        this.isSME = isSME;
        return this;
    }

    setIsModerator(isModerator) {
        this.isModerator = isModerator;
        return this;
    }

    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
        return this;
    }

    create() {
        Signup.create(this);
    }

}

module.exports = SignupBuilder;
// In the builder pattern, we are trying to avoid telescope constructors.
// Telescope are a long list of different types of contructors E.G
// public class Pizza {
//     public Pizza(String base) {}
//     public Pizza(String base, String sauce) {}
//     public Pizza(String base, String sauce, String topping) {}
//     public Pizza(String base, String sauce, String topping, String cheese) {}
//     public Pizza(String base, String sauce, String topping, String cheese, String garnish) {}
// }
// With the builder pattern we pass the base parameters to the constrcutor
// And then step by step set the other parameters.
// We then call create to create the Signup object in the case before.
// This is a more readable and maintainable way of creating objects that have a lot of parameters.
const SignupBuilder = require('./SignupBuilder');

new SignupBuilder('John Doe', 25, 'bean.smith77@gmail.com')
    .setNick('Bean')
    .setPhoto('bean.jpg')
    .setFavTopics(['Node.js', 'React', 'Angular'])
    .setIsSME(['Node.js'])
    .setIsModerator(true)
    .setIsAdmin(true)
    .create();
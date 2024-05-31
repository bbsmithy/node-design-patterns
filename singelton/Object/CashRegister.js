let cash = 0; // private variable

const CashRegister = {
    credit(amount) {
        cash += amount;
        return cash
    },
    debit(amount){
        cash -= amount;
        return cash
    },
    balance() {
        console.log(cash);
    }
}

// module.exports caches the result of the first require call
// subsequent require calls return the cached result
// This is why when requiring CashRegister twice with Till and Till1 in App.js
// the cash variable is shared between the two instances because they are the same instance

module.exports = CashRegister;
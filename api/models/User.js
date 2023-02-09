const Model = require("./Model");

class User extends Model {
    get name(){
        return `${this.surname} ${this.first_name}` + (this.other_name ? ` ${this.other_name}` : '')
    }
}

module.exports = User
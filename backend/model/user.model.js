const SQL = require('../db');

const UserModel = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
    this.mail = user.mail;
}

UserModel.create = (user,result) => {
    var name = user.name;
    var password = user.password;
    var mail = user.mail;
    SQL.query('INSERT INTO user (nom, mail, password, created_at) VALUES ("'+ name +'", "'+ mail +'", "'+ password +'", NOW())' , (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        };
        result(null, res);
    });
}

module.exports = UserModel;
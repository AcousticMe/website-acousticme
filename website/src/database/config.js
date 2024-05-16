const mysql = require("mysql2");


const mySqlConfig = {
    host: 'localhost',
    database: 'acousticMe',
    user: 'root',
    password: '17131',
    port: 3306
};

function execute(instruction) {

    return new Promise(function (resolve, reject) {
        const conection = mysql.createConnection(mySqlConfig);

        conection.connect();

        conection.query(instruction, (error, result) => {

            conection.end();

            if (error) {
                reject(error);
            }
            
            resolve(result);
        });
        
        conection.on('error', function (error) {
            return (error.sqlMessage);
        });
    });
}

module.exports = {
    execute
};
const mysql = require("mysql2");


const mySqlConfig = {
    host: "127.0.0.1",
    database: "acousticMe",
    user: "userremote",
    password: "Miguel@123",
    port: 3307
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
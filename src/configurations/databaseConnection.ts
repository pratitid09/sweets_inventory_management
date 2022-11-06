import { rejects } from "assert";
import { resolve } from "path";
import { DB_NAME } from "./constants";

const mysql = require('mysql2');

const databaseConfig = {
    host: "localhost",
    database: DB_NAME,
    user: "root",
    password: "Dbpwd#123"
};

let _connection = mysql.createConnection(databaseConfig);

export const connectToDatabase =  () => {
    return new Promise((resolve, reject) => {
        _connection.connect((err: any) => {
            if(err) {
                createDbWithConnection();
            }
            // console.log("connection :", _connection);
            resolve (_connection);
        });
    })
   
}

const createDbWithConnection = async () => {
_connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Dbpwd#123"
    });
    return new Promise((resolve, reject) => 
    _connection.query("CREATE DATABASE sweet_nepal", (err: any, result: any) => {
        if(err)
            reject (err);
        resolve (_connection);
        // console.log("database create");
    })
    )
   
}

export  { _connection };


import {Client}  from 'pg';
const parkingdb = new Client({
    port:5432,
    host:'localhost',
    password:'Cutrico712.',
    user:'postgres',
    database:'parking_db'
})
parkingdb.conect();
export default parkingdb;
const mysql = reuire('mysql');

const db = mysql.createPool({
    host: 'webclientcomputing.cygucr0vxgxr.us-east-2.rds.amazonaws.com',
    user: 'user',
    password: 'ahn01016014',
    prot: '3306',
    database: 'user'
})

module.exports = db;
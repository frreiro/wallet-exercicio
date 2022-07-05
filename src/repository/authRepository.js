import connection from "../database.js"

async function checkUser(email) {
    return await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
}

async function insertUser(name, email, hashedPassword) {
    return await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

export default { checkUser, insertUser }
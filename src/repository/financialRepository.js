import connection from "../database.js";
async function insertTransaction(user, value, type) {
    return await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [user.id, value, type]
    );
}

async function getUserTransactions(user) {
    return await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
    );

}

export default { insertTransaction, getUserTransactions }
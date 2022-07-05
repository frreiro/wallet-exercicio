import authRepository from "../repository/authRepository.js";


export async function userExist(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.sendStatus(422);
    }
    try {

        const existingUsers = authRepository.checkUser(email);

        if (existingUsers.rowCount > 0) {
            return res.sendStatus(409);
        }
        next();
    } catch (e) {
        res.sendStatus(500)
    }
}


export async function checkUser(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.sendStatus(422);
    }
    try {
        const { rows } = await authRepository.checkUser(email);
        const [user] = rows;
        res.locals.user = user;
        next();
    } catch (error) {
        res.sendStatus(500)

    }

}
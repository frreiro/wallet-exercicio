
import authServices from "../services/authServices.js";

export async function singUp(req, res) {
    authServices.insertUser(req.body);
    res.sendStatus(201);
}

export async function singIn(req, res) {
    const { password } = req.body;
    const { user } = res.locals
    const token = authServices.checkPassword(user, password);
    res.send({
        token,
    });
}

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repository/authRepository.js";

function checkPassword(user, password) {
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw { type: "Unauthourized" };
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );

    return token;
}


function insertUser(body) {
    const { name, email, password } = body;
    const hashedPassword = bcrypt.hashSync(password, 12);
    authRepository.insertUser(name, email, hashedPassword);
}

export default { checkPassword, insertUser }



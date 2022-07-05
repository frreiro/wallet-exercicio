
export default function handleError(error, req, res, next) {
    console.log(error)
    if (error.type === "Unprocessable Entity") return res.sendStatus(422);
    if (error.type === "Not Found") return res.sendStatus(404);
    if (error.type === "Unauthourized") return res.sendStatus(401);
    else return res.sendStatus(500);
}
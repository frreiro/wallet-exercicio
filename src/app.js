import cors from "cors";
import express from "express";

import authRouter from "./routers/authRouter.js";
import financialRouter from "./routers/financialRouter.js";
import handleError from "./handleError/handleError.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(financialRouter);
app.use(handleError);


export default app;

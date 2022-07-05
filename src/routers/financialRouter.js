import { Router } from "express";
import { getFinancialEvents, getTotalFinancialEvents, setFinancialEvents } from "../controllers/financialController.js";
import { tokenValidate } from "../middlewares/financialMiddleware.js";

const financialRouter = Router();

financialRouter.post("/financial-events", tokenValidate, setFinancialEvents);

financialRouter.get("/financial-events", tokenValidate, getFinancialEvents);

financialRouter.get("/financial-events/sum", tokenValidate, getTotalFinancialEvents);

export default financialRouter;
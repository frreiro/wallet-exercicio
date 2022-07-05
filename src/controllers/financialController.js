import financialRepository from "../repository/financialRepository.js";
import financialServices from "../services/financialServices.js";


export async function setFinancialEvents(req, res) {
    const { user } = res.locals;
    const { value, type } = req.body;
    financialServices.checkTypeAndValue(value, type);
    financialRepository.insertTransaction(user, value, type)
    res.sendStatus(201);
}

export async function getFinancialEvents(req, res) {
    const { user } = res.locals;
    const events = await financialRepository.getUserTransactions(user)
    res.send(events.rows);
}

export async function getTotalFinancialEvents(req, res) {
    const { user } = res.locals
    const events = await financialRepository.getUserTransactions(user)
    const sum = financialServices.sumTransactions(events);
    res.send({ sum });
}
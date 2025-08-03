const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({message: 'Problem Controller is alive'});
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        console.log("🚀 ~ addProblem ~ error:", error)
        next(error);
    }
}

function getProblem(req, res) {

}

function getProblems(req, res) {

}

function deleteProblem(req, res) {
    
}

function updateProblem(req, res) {

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController,
}
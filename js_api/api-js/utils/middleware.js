const unknownEndpoint = (req, res) => {
    res.status(400).send({ error: "unknown endpoint" });
}

// const errorHandler = (err, req, res, next) => {
//     console.error(err.message);

//     if (err.message === "CastError") {
//         return res.status(400).send({ error: "malformatted id" });
//     } else if (err.message === "ValidationError") {
//         return res.status(400).json({ error: err.message });
//     } else if (err.message = "JsonWebTokenError") {
//         res.status(401).json({ error: " invalid token" });
//     }

//     next(err);
// }

module.exports = {
    unknownEndpoint,
    // errorHandler,
}
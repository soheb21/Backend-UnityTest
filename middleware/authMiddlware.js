const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (token) {
            token = token.split('Bearer ')[1]
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(501).send({ message: "Token is Invalid", success: false })
                } else {
                    next();
                }
            })
        }
        else {
            res.status(401).send({ message: "please add Token", success: false })
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "please add Token with header", success: false })
    }
}
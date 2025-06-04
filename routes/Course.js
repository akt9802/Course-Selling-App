const { Router } = require('express');
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({
        message : "backend is working good buddy !!"
    })
});

courseRouter.get("/preview", (req, res) => {

});

module.exports = {
    courseRouter : courseRouter
}
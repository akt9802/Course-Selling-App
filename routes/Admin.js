const { Router } = require('express');
const adminRouter = Router();


adminRouter.post('/signup',(req,res) => {
    
})

adminRouter.post('/signin',(req,res) => {
    
})

// adminRouter.use(adminMiddleware);    >>>>>>>>> We can use admin middleware

adminRouter.post('/course',(req,res) => {

})

adminRouter.put("/course", (req, res) => {

});

adminRouter.get('/course/bulk',(req,res) => {
    
})

module.exports = {
    adminRouter : adminRouter
}
const { Router } = require("express");
const { userMiddleware } = require("../middleware/user.middleware");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const courseId = req.body.courseId;

    // Optionally, check if course exists
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await purchaseModel.create({
      userId,
      courseId,
    });

    res.json({ message: "Course purchased successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

courseRouter.get("/preview", async (req, res) => {
  //   res.json({ message: "Not implemented yet" });
  const courses = await courseModel.find({}); // this means simply give all the courses
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};

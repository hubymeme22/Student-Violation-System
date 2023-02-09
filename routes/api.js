import { Router } from "express";
import login from "./api/mock-login.js";
import student from "./api/mock-student-data.js";
import summary from "./api/mock-summary.js";

const router = Router();
router.get('/', (req, res) => {
    console.log(req.cookies)
    res.json({'api-status': 'working'});
});

router.use('/student', student);
router.use('/login', login);
router.use('/summary', summary);

export default router;
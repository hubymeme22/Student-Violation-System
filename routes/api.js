import { Router } from "express";
import login from "./api/login.js";
import student from "./api/student-data.js";
import summary from "./api/mock-summary.js";

const router = Router();
router.get('/', (req, res) => {
    console.log(req.cookies)
    res.json({'api-status': 'working'});
});

router.use('/student', student);
router.use('/login', login);
router.use('/summary', summary);

////////////////////////////
//  CRUD FUNCTIONALITIES  //
////////////////////////////
// // these crud functionalutues needs faculty access only
// router.use('/violation/create');
// router.use('/violation/update');
// router.use('/violation/delete');

// // These crud functionalities needs admin access
// router.use('/student/create');
// router.use('/student/delete');
// router.use('/student/update');

// router.use('/faculty/create');
// router.use('/faculty/delete');
// router.use('/faculty/update');

export default router;
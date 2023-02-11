import { Router } from "express";

const summary = Router();
summary.get('/', (req, res) => {
    res.json({
        violationCount: 32,
        studentsCount: 1250,
        monthSummary: [12, 11, 2, 0, 3, 23, 1, 3, 0, 0, 11, 12]
    });
});

export default summary;
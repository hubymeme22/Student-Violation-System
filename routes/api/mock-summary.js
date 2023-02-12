import { Router } from "express";

const summary = Router();
summary.get('/', (req, res) => {
    res.json({
        violationCount: 32,
        studentsCount: 1250,
        monthSummary: [
            {'month': 'January', 'violations': 32},
            {'month': 'February', 'violations': 12},
            {'month': 'March', 'violations': 43},
            {'month': 'April', 'violations': 13},
            {'month': 'May', 'violations': 2},
            {'month': 'June', 'violations': 2},
            {'month': 'July', 'violations': 1},
            {'month': 'August', 'violations': 56},
            {'month': 'September', 'violations': 12},
            {'month': 'October', 'violations': 13},
            {'month': 'November', 'violations': 2},
            {'month': 'December', 'violations': 3}
        ]
    });
});

export default summary;
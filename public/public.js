const {Router} = require('express');
const router = Router();

//routes
router.get('/', (req,res) => {
    const data ={
        "name": "yeison Andres",
        "website":"prueba.com"
    }
    res.json(data);
});

module.exports = router;
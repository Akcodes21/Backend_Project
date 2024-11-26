const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();
const authorizeRoles = require("../middleware/roleMiddleware")



// Router1: Only Admin
router.get("/admin", verifyToken, authorizeRoles("admin"), (req,res) => {
    res.json({message: `Welcome Admin`});
});

// Router 2: Both Admin and Manger
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req,res) => {
    res.json({message: `Welcome Manger`});
});    

// ROuter 3: All can access

router.get("/user", verifyToken,authorizeRoles("admin", "manager", "user"), (req,res) => {
    res.json({message: `Welcome User`});
});

module.exports = router;
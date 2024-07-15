const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/createUser', userController.createUser);
router.get('/userById/:id', authMiddleware, userController.getUserById);
router.get('/all', authMiddleware, userController.getAllUsers);
router.put('/updateUser/:id', authMiddleware, userController.updateUser);
router.delete('/deleteUser/:id', authMiddleware, userController.deleteUser);

module.exports = router;

import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
// router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;
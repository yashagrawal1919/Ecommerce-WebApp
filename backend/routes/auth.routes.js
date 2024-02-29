import express from 'express'
import { registerUser } from '../controllers'

const router = express.Router();

// Route for registering a new user
router.post('/register', registerUser)

export const authRouter = router;
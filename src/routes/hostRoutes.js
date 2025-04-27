// src/routes/hostRoutes.js

import express from 'express';
import { getHostInfo } from '../controllers/hostController.js';  // Import controller function

const router = express.Router();

// Define the route for getting host information
router.get('/', getHostInfo);

export default router;

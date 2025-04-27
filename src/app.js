// src/app.js

import express from "express";
import { config } from "./config.js"; // Import configuration
import hostRoutes from "./routes/hostRoutes.js"; // Import host routes

const app = express();

// Middleware setup (optional)
app.use(express.json());

// Register routes
app.use("/", hostRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app; // Export for testing purposes

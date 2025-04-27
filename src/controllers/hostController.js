// src/controllers/hostController.js

import os from "os";

export const getHostInfo = (req, res) => {
  try {
    const hostInfo = {
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      uptime: os.uptime(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
    };
    res.json(hostInfo); // Send host info as JSON response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch host information" });
  }
};

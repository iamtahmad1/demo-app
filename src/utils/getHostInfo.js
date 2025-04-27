// src/utils/getHostInfo.js

import os from "os";

export const getHostInfo = () => {
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
};

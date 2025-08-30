import express from "express";
import { registerAgifyHandler } from "./agify/agifyHandler.js";
import { fetchAgeWithAgify } from "./agify/fetchAgeServices.js";

/**
 * Initializes and starts the Express server.
 * @param port - The port number to listen on (default: 8000)
 */
export function startServer(port: number = 8000): void {
  const app = express();
  app.use(express.json({ limit: "5mb" }));

  // Register our endpoint
  registerAgifyHandler(app, fetchAgeWithAgify);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// TODO 1: build and start the server, and try out some requests. Investigate the code!
// Start the server
startServer(8000);

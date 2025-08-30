import express, { Express } from "express";
import { registerAgifyHandler } from "./agify/agifyHandler.js";
import { fetchAgeWithAgify } from "./agify/fetchAgeServices.js";

/**
 * Class representing the backend server application.
 */
export class ServerApp {
  public app: Express;
  private port: number;

  /**
   * Creates a new ServerApp instance.
   *
   * @param port - The port number the server listens on (default: 8000).
   */
  constructor(port: number = 8000) {
    this.app = express();
    this.app.use(express.json({ limit: "5mb" }));
    this.port = port;
    this.registerHandlers();
  }

  /**
   * Registers all route handlers for the server.
   */
  private registerHandlers() {
    // This is where you would pass in a mock source, eg mockFetchAge
    registerAgifyHandler(this.app, fetchAgeWithAgify);
  }

  /**
   * Starts the Express server on the configured port.
   */
  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`);
    });
  }

  /**
   * Returns the underlying Express app instance.
   *
   * @returns The Express application.
   */
  public getApp(): Express {
    return this.app;
  }
}

const server = new ServerApp(8000);
server.start();
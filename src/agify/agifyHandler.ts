import { Express, Request, Response } from "express";
import { fetchAgeWithAgify } from "./fetchAgeServices.js";
import { PersonSchema } from "./PersonType.js";

/**
 * Registers the `/agify` endpoint.
 *
 * @param app - Express application instance.
 * @param fetchAge - Optional dependency-injected function for fetching weather data.
 */
export function registerAgifyHandler(
  app: Express,
  fetchAge = fetchAgeWithAgify
) {

  // TODO : Change "/agify" to something else. Rebuild, rerun, and experiment with the server. What happened?
  app.get("/agify", async (req: Request, res: Response) => {

    // Validate request body using PersonSchema, but only require 'name' for input
    const parseResult = PersonSchema.omit({ age: true }).safeParse({
      name: req.query.name
    });

    if (!parseResult.success) {
      return res.status(200).json({ name: req.query.name, age: null });
    }

    const { name } = parseResult.data;

    // Fetch the age using the injected function
    const age = await fetchAge(name);
    if (age === null) {
      return res.status(404).json({ error: `Age not found for name "${name}"` });
    }

    // Validate the response using PersonSchema before sending
    const personResult = PersonSchema.safeParse({ name, age });
    if (!personResult.success) {
      return res.status(500).json({ error: "Invalid response format" });
    }

    return res.status(200).json({ name, age });
  });
}

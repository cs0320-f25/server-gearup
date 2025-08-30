import { z } from "zod";

/* In other files, you could add more functions that fetch age using other means,
such as a hardcoded hashmap, etc. Then you could use pass those functions into the
registerAgifyHandler in server to provide alternative age fetching methods. 
See an example function in the mockFetchAge.ts file. */

/**
 * Fetches age data from Agify API for a name.
 *
 * - Fetches data from the API.
 * - Returns the age if it was found, null if not.
 *
 * @param name - Name to fetch age data for.
 * @returns Age of the person or null if not found.
 */
export async function fetchAgeWithAgify(name: String) {
  let age: number | null = null;

  try {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();
    age = data.age || null;
  } catch (err) {
    console.error("Agify fetch error:", err);
  }

  return age;
}
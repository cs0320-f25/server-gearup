import { z } from "zod";

/**
 * Returns hardcoded age every time.
 *
 * @param name - Name to fetch age data for.
 */
export async function mockFetchAge(name: String) {
  return 30; 
}


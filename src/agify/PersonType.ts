import { z } from "zod";

// TODO 4: This Zod schema doesn't seem very defensive. Fix it!

/**
 * Zod schema defining a name and age.
 */
export const PersonSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"), // Ensures name is a non-empty string
  age: z.number().int().positive("Age must be a positive integer"), // Ensures age is a positive integer
});

/**
 * Type for a validated person.
 */
export type Person = z.infer<typeof PersonSchema>;
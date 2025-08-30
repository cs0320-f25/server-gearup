import { describe, it, expect, vi } from "vitest";
import { fetchAgeWithAgify } from "../fetchAgeServices";
import { PersonSchema } from "../PersonType";
import { mockFetchAge } from "../mockFetchAge";

describe("mockFetchAge", () => {
  it("should fetch hardcoded age", async () => {
    const age = await mockFetchAge("John");
    expect(age).toBe(30);
    const parsed = PersonSchema.safeParse({ name: "John", age });
    expect(parsed.success).toBe(true);
  });
});

// TODO 3: Take a look at how we validate the response in this test
// The average age of Johns could change over time, so how do we test this endpoint?
describe("realFetchAge", () => {
  it("should fetch real age from API", async () => {
    const age = await fetchAgeWithAgify("John");
    const parsed = PersonSchema.safeParse({ name: "John", age });
    expect(parsed.success).toBe(true);
  });
});
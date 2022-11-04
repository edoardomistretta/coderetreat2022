import { smoking } from "@app/index";

describe("Smoke test", () => {
  it("should smoke", () => {
    expect(smoking).toBe(true);
  });
});

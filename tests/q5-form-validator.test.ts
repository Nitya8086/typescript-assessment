import { createFormValidator } from "../src/questions/q5-form-validator";

describe("Question 5: Form Validator", () => {
  const rules = {
    email: [
      (value: string) => (!value.includes("@") ? "Invalid email" : undefined),
      (value: string) => (value.length < 5 ? "Too short" : undefined),
    ],
    password: [(value: string) => (value.length < 8 ? "Password too short" : undefined)],
  };

  it("should validate multiple fields", () => {
    const validator = createFormValidator(rules);
    const result = validator.validate({
      email: "test",
      password: "123",
    });

    expect(result.email.error).toBe("Invalid email");
    expect(result.password.error).toBe("Password too short");
  });

  it("should handle valid input", () => {
    const validator = createFormValidator(rules);
    const result = validator.validate({
      email: "test@example.com",
      password: "password123",
    });

    expect(result.email.error).toBeUndefined();
    expect(result.password.error).toBeUndefined();
  });
});

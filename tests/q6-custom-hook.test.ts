import { useAsync } from "../src/questions/q6-custom-hook";

describe("Question 6: Custom Hook", () => {
  it("should handle successful async operations", async () => {
    const hook = useAsync<string>();
    const promise = Promise.resolve("success");

    await hook.execute(promise);
    expect(hook.state.data).toBe("success");
    expect(hook.state.loading).toBe(false);
    expect(hook.state.error).toBe(null);
  });

  it("should handle errors", async () => {
    const hook = useAsync<string>();
    const error = new Error("test error");
    const promise = Promise.reject(error);

    await hook.execute(promise);
    expect(hook.state.data).toBe(null);
    expect(hook.state.loading).toBe(false);
    expect(hook.state.error).toBe(error);
  });

  it("should reset state", () => {
    const hook = useAsync<string>();
    hook.reset();
    expect(hook.state).toEqual({
      data: null,
      loading: false,
      error: null,
    });
  });
});

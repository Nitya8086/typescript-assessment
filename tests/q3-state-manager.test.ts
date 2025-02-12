import { createStateManager } from "../src/questions/q3-state-manager";

interface TestState {
  count: number;
  text: string;
  isActive: boolean;
}

describe("Question 3: State Manager", () => {
  it("should handle partial updates", () => {
    const manager = createStateManager<TestState>({
      count: 0,
      text: "",
      isActive: false,
    });

    manager.setState({ count: 1 });
    expect(manager.getState()).toEqual({
      count: 1,
      text: "",
      isActive: false,
    });
  });

  it("should handle function updates", () => {
    const manager = createStateManager<TestState>({
      count: 0,
      text: "",
      isActive: false,
    });

    manager.setState((prev) => ({ count: prev.count + 1 }));
    expect(manager.getState().count).toBe(1);
  });
});

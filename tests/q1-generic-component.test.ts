import { createComponent } from "../src/questions/q1-generic-component";

interface TestProps {
  title: string;
  count: number;
}

describe("Question 1: Generic Component Creator", () => {
  it("should handle props correctly", () => {
    const component = createComponent<TestProps>();
    component.setProps({ title: "Test", count: 1 });
    const result = component.build();

    expect(result.props.title).toBe("Test");
    expect(result.props.count).toBe(1);
  });

  it("should throw error when building without props", () => {
    const component = createComponent<TestProps>();
    expect(() => component.build()).toThrow("Props not set");
  });
});

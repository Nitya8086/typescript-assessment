import { createEventHandler } from "../src/questions/q2-event-handler";

describe("Question 2: Event Handler", () => {
  it("should handle mouse events", () => {
    const handler = createEventHandler<HTMLButtonElement>();
    const mockEvent = new MouseEvent("click");

    handler.onClick(mockEvent);
    expect(handler.getLastEvent()).toBe(mockEvent);
  });

  it("should maintain event history", () => {
    const handler = createEventHandler<HTMLButtonElement>();
    const event1 = new MouseEvent("click");
    const event2 = new MouseEvent("click");

    handler.onClick(event1);
    handler.onClick(event2);
    expect(handler.getAllEvents()).toHaveLength(2);
  });
});

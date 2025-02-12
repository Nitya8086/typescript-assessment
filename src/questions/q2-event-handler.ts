/**
 * Question 2: Event Handler Type Safety
 *
 * Implement a type-safe event handler that:
 * 1. Correctly types the HTML element
 * 2. Handles mouse events properly
 * 3. Maintains event history
 */
export function createEventHandler<T extends HTMLElement>() {
  const eventHistory: Event[] = [];

  return {
    onClick: (event: MouseEvent) => {
      eventHistory.push(event);
    },
    getLastEvent: () => eventHistory[eventHistory.length - 1],
    getAllEvents: () => eventHistory,
  };
}

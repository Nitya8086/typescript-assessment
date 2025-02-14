/**
 * Question 2: Event Handler Type Safety
 *
 * Implement a type-safe event handler that:
 * 1. Correctly types the HTML element
 * 2. Handles mouse events properly
 * 3. Maintains event history
 */
export function createEventHandler<T extends HTMLElement>() {
  let eventHistory: MouseEvent[] = []; 

  return {
    handleEvent(event: MouseEvent, element: T) {
      console.log(`Event: ${event.type} on ${element.tagName}`);
      eventHistory.push(event); 
    },
    getHistory() {
      return eventHistory; 
    },
  };
}

/**
 * Question 3: State Manager
 *
 * Implement a type-safe state manager that:
 * 1. Handles partial updates
 * 2. Preserves immutability
 * 3. Provides state history
 */
export function createStateManager<T extends object>(initialState: T) {
  let currentState = initialState;
  const history: T[] = [initialState];

  return {
    getState: () => currentState,
    setState: (updater: Partial<T> | ((prev: T) => Partial<T>)) => {
      const update = typeof updater === "function" ? updater(currentState) : updater;
      currentState = { ...currentState, ...update };
      history.push(currentState);
    },
    getHistory: () => history,
  };
}

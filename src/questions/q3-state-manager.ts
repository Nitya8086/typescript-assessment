/**
 * Question 3: State Manager
 *
 * Implement a type-safe state manager that:
 * 1. Handles partial updates
 * 2. Preserves immutability
 * 3. Provides state history
 */
export function createStateManager<T extends object>(initialState: T) {
  let state: T = { ...initialState }; 
  let history: T[] = [{ ...state }]; 
  return {
    getState(): T {
      return { ...state }; 
    },
    updateState(partialState: Partial<T>) {
      state = { ...state, ...partialState }; 
      history.push({ ...state }); 
    },
    getHistory(): T[] {
      return history.map((entry) => ({ ...entry })); 
    },
  };
}

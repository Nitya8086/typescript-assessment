/**
 * Question 6: Custom Hook Implementation
 *
 * Create a custom hook that:
 * 1. Manages async state with proper typing
 * 2. Handles loading, error, and success states
 * 3. Provides retry functionality
 * 4. Implements proper cleanup
 */

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useAsync<T>() {
  // TODO: Implement the hook logic
}

import { ApiResponse } from "../types";

/**
 * Question 4: Async Data Fetching
 *
 * Create a type-safe fetch wrapper that:
 * 1. Properly handles API responses with correct typing
 * 2. Implements error handling
 * 3. Provides retry mechanism for failed requests
 * 4. Includes timeout support
 */

import { ApiResponse } from "../types";

export async function fetchWithRetry<T>(
  url: string,
  options?: {
    retries?: number;
    timeout?: number;
  }
): Promise<ApiResponse<T>> {
  const retries = options?.retries ?? 3; 
  const timeout = options?.timeout ?? 5000; 

  async function fetchData(attempt: number): Promise<ApiResponse<T>> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data: T = await response.json();
      return { success: true, data }; 

    } catch (error) {
      if (attempt < retries) {
        console.warn(`Retrying (${attempt + 1}/${retries}) due to error:`, error);
        return fetchData(attempt + 1); 
      }

      return { success: false, error: (error as Error).message }; 
    }
  }

  return fetchData(0);
}

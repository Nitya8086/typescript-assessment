import { ApiResponse } from '../types';

/**
 * Question 4: Async Data Fetching
 * 
 * Create a type-safe fetch wrapper that:
 * 1. Properly handles API responses with correct typing
 * 2. Implements error handling
 * 3. Provides retry mechanism for failed requests
 * 4. Includes timeout support
 */

export async function fetchWithRetry<T>(
    url: string,
    options?: {
        retries?: number;
        timeout?: number;
    }
): Promise<ApiResponse<T>> {
    // TODO: Implement retry logic and timeout handling
    const response = await fetch(url);
    const data = await response.json();

    return {
        data,
        status: response.status,
        message: response.statusText
    };
}

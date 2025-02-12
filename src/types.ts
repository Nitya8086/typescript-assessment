export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

export type ValidationRule = (value: string) => string | undefined;

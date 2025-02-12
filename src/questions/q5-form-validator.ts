import { ValidationRule, FormField } from "../types";

/**
 * Question 5: Form Validation
 *
 * Implement a type-safe form validator that:
 * 1. Validates multiple fields with different rules
 * 2. Returns typed validation results
 * 3. Supports custom validation rules
 */
export function createFormValidator(rules: Record<string, ValidationRule[]>) {
  return {
    validate: (values: Record<string, string>) => {
      const result: Record<string, FormField> = {};

      for (const [field, fieldRules] of Object.entries(rules)) {
        const value = values[field] || "";
        const errors = fieldRules.map((rule) => rule(value)).filter((error) => error !== undefined);

        result[field] = {
          value,
          error: errors[0],
          touched: true,
        };
      }

      return result;
    },
  };
}

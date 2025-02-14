import { ValidationRule, FormField } from "../types";
export function createFormValidator(rules: Record<string, ValidationRule[]>) {
  return function validateForm(formData: Record<string, any>) {
    const errors: Record<string, string[]> = {}; 
    for (const field in rules) {
      const fieldRules = rules[field];
      const value = formData[field];
      const fieldErrors: string[] = [];
      fieldRules.forEach((rule) => {
        const errorMessage = rule.validate(value);
        if (errorMessage) {
          fieldErrors.push(errorMessage);
        }
      });
      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };
}

/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

export const formatDate = (dateInput: Date, options = {}) => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  return date.toLocaleString('en-US', { ...options });
};

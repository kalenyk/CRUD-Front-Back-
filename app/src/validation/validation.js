export const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const max_name_length = maxLength(20);
export const max_description_length = maxLength(100);
export const number = value => value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
    value && value < min ? `Price must be at least ${min}` : undefined;
export const minPrice = minValue(0.1);
export const tooExpensive = value =>
    value && value > 1000000000 ? "Price too high" : undefined;
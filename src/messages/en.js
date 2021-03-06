export default {
  accepted: 'This field must be accepted',
  alpha: 'This field may only contain letters',
  alphaNum: 'This field may only contain letters and numbers',
  alphaNumDash: 'This field may only contain letters, numbers, dashes and underscores',
  array: 'This field must be an array',
  between: {
    array: 'This field must have between {min} and {max} items',
    numeric: 'This field must be between {min} and {max}',
    string: 'This field must be between {min} and {max} characters'
  },
  boolean: 'This field must be true or false',
  email: 'This field must be a valid email address',
  max: {
    array: 'This field may not have more than {max} items',
    numeric: 'This field may not be greater than {max}',
    string: 'This field may not be greater than {max} characters'
  },
  min: {
    array: 'This field must have at least {min} items',
    numeric: 'This field must be at least {min}',
    string: 'This field must be at least {min} characters'
  },
  numeric: 'This field must be a number',
  required: 'This field is required',
  slug: 'This field may only contain lowercase letters, numbers and dashes',
  string: 'This field must be a string'
}

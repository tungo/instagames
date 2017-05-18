export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';
export const CLEAR_FORM_ERRORS = 'CLEAR_FORM_ERRORS';


export const receiveFormErrors = (form, errors) => ({
  type: RECEIVE_FORM_ERRORS,
  form,
  errors
});

export const clearFormErrors = (form) => ({
  type: CLEAR_FORM_ERRORS,
  form
});
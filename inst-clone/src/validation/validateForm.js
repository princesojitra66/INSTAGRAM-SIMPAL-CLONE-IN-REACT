function validateForm(values) {

  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone must be 10 digits";
  }

  return errors;
}

export default validateForm;
const validatePersonal = (values) => {
  const response = {};
  const emailRegex = /\S+@\S+\.\S+/;

  !values?.name ? (response.name = "") : (response.name = true);

  !values?.email ? (response.email = "") :values?.email && !emailRegex.test(values.email) ? (response.email = 'invalid_email') :   (response.email = true);

  !values?.message ? (response.message = "") : (response.message = true);

  return response;
};

export default validatePersonal;

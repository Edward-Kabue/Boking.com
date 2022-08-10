export const createError = (status, message) => {
  const err = new Error();
  err.Status = status;
  err.Message = message;
  return err;
};

/* Fetch does not trow error, this helps us to use catch  */
export const handleResponse = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

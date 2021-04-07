const API_URL = "https://api-demo.booknooklearning.com/";
export const loginUser = async (email, password) => {
  const body = { email, password };
  const response = await fetch(API_URL + "tutors/authenticate", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);

  localStorage.setItem("token", jsonResponse.token);
  return jsonResponse;
};

export const getStudentList = async () => {
  const response = await fetch(API_URL + "schools/578/students", {
    method: "GET",
    headers: { Authorization: localStorage.getItem("token")},
  });
  return await response.json();
};

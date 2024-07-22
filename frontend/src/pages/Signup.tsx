import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

const Signup = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form method="post">
        <h1>Signup</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Signup"}
        </button>
      </Form>
    </div>
  );
};

export default Signup;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  } else if (!response.ok) {
    throw new Error("Failed to signup");
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
}

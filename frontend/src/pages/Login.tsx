import { Form, useActionData, useNavigation } from "react-router-dom";

type loginDataFeedback = {
  errors: {
    email: string | undefined;
    password: string | undefined;
  };
  message: string | undefined;
};

const Login = () => {
  const data = useActionData() as loginDataFeedback;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form method="post">
        <h1 className="font-extrabold text-4xl text-gun-metal p-10">Login</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className="block p-2 ">
          <label htmlFor="email" className="p-2">
            Email
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="block p-2">
          <label htmlFor="password" className="p-2">
            Password
          </label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          className="bg-battleship-gray my-6 text-gun-metal rounded-xl py-2 px-8 hover:opacity-90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Login"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

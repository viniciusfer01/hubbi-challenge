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
    <Form method="post">
      <h1 className="font-extrabold text-4xl text-yellow p-10">Login</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li className="text-yellow" key={err}>
              {err}
            </li>
          ))}
        </ul>
      )}
      {data && data.message && <p className="text-yellow">{data.message}</p>}
      <div className="block p-2 ">
        <label htmlFor="email" className="mr-8 p-2 text-yellow">
          Email
        </label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="block p-2">
        <label htmlFor="password" className="p-2 text-yellow">
          Password
        </label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        className="bg-white px-4 py-2 rounded-lg text-black font-extrabold hover:text-gun-metal hover:opacity-90 mt-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Login"}
      </button>
    </Form>
  );
};

export default Login;

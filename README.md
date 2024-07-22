# This is a challenge for a job application @Hubbi

## How to try the project

- Visit the deployed project [here](https://hubbi-challenge.vercel.app/)

## How to run the project

- clone the project
- cd backend
- run `npm install`
- run `npm start`

- cd frontend
- run `npm install`
- run `npm run dev`

## The API

The API is a simple express server that serves a list of ships. The API has a few endpoints:
"/" - serves a homepage
"/login" - serves a login page
"/ships" - serves a list of ships
"/ships/:id" - serves a single ship (restricted to authenticated users)
"/characters" - serves a list of characters
"/characters/:id" - serves a single character (restricted to authenticated users)

## The challenge

Create a simple React application that fetches data from an API and displays it. The application should have the following features:

- A list of items fetched from the API
- Tailwind CSS for styling
- Authentication using JWT
- Access to the Ships API should be restricted to authenticated users

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

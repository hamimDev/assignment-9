import React from "react";

const Blog = () => {
  return (
    <div className="h-screen mt-14 container mx-auto lg:mt-32 text-black pt-10">
      <div>
      <h1 className="flex">
        <p className="mr-2 text-2xl font-semibold">Question:</p>{" "}
        <p className="text-xl font-normal">When should you use context api?</p>
      </h1>

      <h1 className="flex mt-3">
        <p className="mr-2 text-2xl font-semibold">Answer:</p>{" "}
        <p className="text-xl font-normal">
          The Context API in React is used in situations where you need to share
          data between components without having to pass props manually through
          every level of the component tree. Here are some scenarios where using
          the Context API is appropriate: Global Data: When your application
          requires data that is used by many components across different parts
          of the application, such as user authentication status, theme
          preferences, or language settings. Avoiding Prop Drilling: To avoid
          "prop drilling," where you pass props through multiple levels of
          nested components just to reach a deeply nested component that needs
          the data. Theme and Styling: When you want to provide components
          access to theme or styling information without explicitly passing it
          down through props. User Authentication: When you need to manage user
          authentication state across your application and provide access to
          this state in various components. Internationalization (i18n): When
          you want to provide translations or internationalization settings to
          different parts of your application without passing them explicitly as
          props. However, it's important to use the Context API judiciously.
          Overusing context can make your application more difficult to
          understand and maintain, especially if you end up with deeply nested
          contexts or overly complex context providers. Also, keep in mind that
          the Context API is not a replacement for component composition and
          prop passing altogether. It should be used for managing global or
          shared state in your application, while local state and prop passing
          are still appropriate for managing component-specific state and data.
        </p>
      </h1>
      </div>
      <div>
      <h1 className="flex mt-10">
        <p className="mr-2 text-2xl font-semibold">Question:</p>{" "}
        <p className="text-xl font-normal">what is react custom hooks?</p>
      </h1>

      <h1 className="flex mt-3">
        <p className="mr-2 text-2xl font-semibold">Answer:</p>{" "}
        <p className="text-xl font-normal">
        React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
        </p>
      </h1>
      </div>
      <div>
      <h1 className="flex mt-10">
        <p className="mr-2 text-2xl font-semibold">Question:</p>{" "}
        <p className="text-xl font-normal">what is useref and usememo?</p>
      </h1>

      <h1 className="flex mt-3">
        <p className="mr-2 text-2xl font-semibold">Answer:</p>{" "}
        <p className="text-xl font-normal">
        The useRef hook can create a mutable reference to an element or value that persists across component renders. The useMemo hook can optimize performance by memoizing the result of a computationally expensive function, and the useCallback hook can memoize a function to optimize the performance of a component.
        </p>
      </h1>
      </div>
    </div>
  );
};

export default Blog;

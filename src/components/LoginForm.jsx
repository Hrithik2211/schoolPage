const LoginForm = () => {
return (
  <div className="flex justify-end p-6">
    <div className="w-full max-w-sm bg-white rounded shadow-lg p-6">
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 mb-4 w-full text-black"
      />
      <input
        type="text"
        placeholder="Enter your class"
        className="border p-2 mb-4 w-full text-black"
      />
      <button className="bg-orange-500 text-white p-2 w-full">Login</button>
    </div>
  </div>
);
};

export default LoginForm;

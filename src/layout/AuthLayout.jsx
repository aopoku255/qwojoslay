const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F6F9FC] min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full shadow-2xl px-12 py-16 bg-white rounded-lg mx-4 lg:mx-0">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

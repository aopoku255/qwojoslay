const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F6F9FC] h-screen">
      <div className="max-w-lg py-16 mx-auto shadow-2xl px-12 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

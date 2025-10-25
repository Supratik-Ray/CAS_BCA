import { Outlet } from "react-router-dom";

function AuthPage() {
  return (
    <div className="p-10 pt-30 w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-bold text-blue-900">Login / SignUp</h1>
      <Outlet />
    </div>
  );
}

export default AuthPage;

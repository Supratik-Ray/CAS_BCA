import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-5">
      <h1 className="text-5xl">Page Not Found 404</h1>
      <Link
        to={"/cas_bca.sit"}
        className="text-blue-600 hover:text-blue-700 hover:cursor-pointer text-lg"
      >
        Go back to home page &rarr;
      </Link>
    </div>
  );
}

export default NotFoundPage;

import { Link, Outlet } from "react-router";
import { paths } from "../config/router";

function Root() {
  return (
    <main className="flex flex-col h-screen w-screen">
      <nav className="my-4 flex justify-center">
        <div className="flex gap-4 border border-foreground px-4 py-2 rounded-full">
          {paths.map((route) => (
            <Link key={route.path} to={route.path}>
              <span className="inline-block hover:-translate-y-0.5 transition-transform duration-200">
                {route.Component.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </main>
  );
}

export default Root;

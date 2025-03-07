import { NavLink } from "react-router-dom";

type NavButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export function NavButton({
  to,
  children,
  className = "cursor-pointer rounded-md transition-all ease-in-out bg-black px-4 py-2 text-white hover:shadow-lg font-bold",
  activeClassName = "",
}: NavButtonProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${className} ${isActive ? activeClassName : ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

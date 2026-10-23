import { NavLink } from "react-router";
import type { FC } from "react";

type Props = {
    name: string;
    path: string;
    onClick?: () => void;
    className?: string;
};

export const AppNavLink: FC<Props> = ({
    name,
    path,
    onClick,
    className = "",
}) => {
    return (
        <NavLink
            onClick={onClick}
            to={path}
            end={path === "/"}
            className={({ isActive }) => {
                const isHashLink = path.includes("#");

                const isCurrentActive = isHashLink
                    ? location.hash === path.slice(1)
                    : isActive && !location.hash;

                return [
                    isCurrentActive ? "active" : "",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ");
            }}
        >
            {name}
        </NavLink>
    );
};
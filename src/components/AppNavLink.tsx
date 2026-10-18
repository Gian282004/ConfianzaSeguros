import { NavLink } from "react-router";

import type { FC } from "react";

type Props = {
    name: string;
    path: string;
    onClick?: () => void;
};

export const AppNavLink:FC<Props>=({name, path, onClick}) =>
{
    return (
        
                                <NavLink
                                    onClick={onClick}
                                    to={path}
                                    end={path === "/"}

                                    className={({ isActive }) => {
                                        if (path.includes("#")) {
                                            return location.hash === path.slice(1)
                                                ? "active"
                                                : "";
                                        }

                                        return isActive && !location.hash ? "active" : "";
                                    }}
                                >
                                    {name}
                                </NavLink>
    )
}
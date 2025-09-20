import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { type UserModel } from "../context/user.props";

function RequireAuth({ children }: { children: ReactNode })
{
    let isLogined = false;
    const usersStore: UserModel[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (usersStore?.length)
    {
        isLogined = Boolean(usersStore.find((item) => item.isLogined));
    }

    if (!isLogined)
    {
        return <Navigate to={ '/login' } replace/>
    }

    return children;
}

export default RequireAuth;
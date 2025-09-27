import { useEffect, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUsers, type UserModel } from "../store/userSlice";

function RequireAuth({ children }: { children: ReactNode })
{
    let isLogined = false;
    const usersStore: UserModel[] = JSON.parse(localStorage.getItem('users') || '[]');
    const dispatchUsers = useDispatch();

    useEffect(() => {
        dispatchUsers(setUsers(usersStore));
    });

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
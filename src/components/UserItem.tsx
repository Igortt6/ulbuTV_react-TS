import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {

    return (
        <div style={{ padding: 15, marginBottom: 5, border: '1px solid gray' }}>
            {user.id}. {user.name} проживає в місті {user.address.city} на вулиці {user.address.street}
        </div>
    )
}
export default UserItem;
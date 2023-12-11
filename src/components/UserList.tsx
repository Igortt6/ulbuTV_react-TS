import { FC } from "react";
import { IUser } from "../types/types";

interface UserListProps {
    users: IUser[];

}
const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <>
            {users.map(user =>
                <div key={user.id} >
                    {user.id}. {user.name} проживає в місті {user.address.city} на вулиці {user.address.street}
                </div>
            )}
        </>
    )
}
export default UserList;
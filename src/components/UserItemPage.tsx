import { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface UserItemPageParams {
    id: string;
    [ключ: string]: string | undefined;
}

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();



    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id);
            setUser(response.data);
        } catch (error) {
            alert(error)
        }
    };

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.address.city} {user?.address.street} {user?.address.zipcode}</p>
        </div>
    )
}
export default UserItemPage;
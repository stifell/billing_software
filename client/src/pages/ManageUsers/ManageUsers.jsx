import { useEffect, useState } from 'react';
import { fetchUsers } from '../../service/UserService.js';
import UsersForm from '../../components/UsersForm/UsersForm';
import UsersList from '../../components/UsersList/UsersList';
import './ManageUsers.css';
import toast from 'react-hot-toast';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true);
                const response = await fetchUsers();
                setUsers(response.data);
            } catch (error) {
                console.error(error);
                toast.error("Не удается найти пользователей");
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    return (
        <div className="users-contrainer text-light">
            <div className="left-column">
                <UsersForm setUsers={setUsers} />
            </div>
            <div className="right-column">
                <UsersList users={users} setUsers={setUsers} />
            </div>
        </div>
    )
}

export default ManageUsers;
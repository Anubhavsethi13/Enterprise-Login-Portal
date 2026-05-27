import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../services/userService";
import "../styles/users.css";
import toast from "react-hot-toast";
import Modal from "../components/Modal";
import DataTable from "../components/DataTable";

function Users() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [editingUserId, setEditingUserId] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers(page);

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUser = async () => {
    try {
      if (editingUserId) {
        await updateUser(
          editingUserId,

          {
            name,
            email,
            password,
          },
        );

        toast.success("User Updated Successfully");
      } else {
        await createUser({
          name,
          email,
          password,

          admin_id: 1,
        });

        toast.success("User Added Successfully");
      }

      fetchUsers();

      setName("");
      setEmail("");
      setPassword("");

      setEditingUserId(null);
    } catch (error) {
      console.log(error);

      toast.error("Operation Failed");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);

      fetchUsers();

      toast.success("User Deleted Successfully");
    } catch (error) {
      console.log(error);

      toast.error("Failed to Delete User");
    }
  };

  const handleEditUser = (user) => {
    setName(user.name);

    setEmail(user.email);

    setPassword("");

    setEditingUserId(user.id);

    setShowModal(true);
  };

  return (
    <Layout>
      <h1>Users Management</h1>

      <input
        type="text"
        placeholder="Search users..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="open-modal-btn"
        onClick={() => {
          setEditingUserId(null);

          setName("");

          setEmail("");

          setPassword("");

          setShowModal(true);
        }}
      >
        Add User
      </button>

      {showModal && (
        <Modal
          title={editingUserId ? "Edit User" : "Add User"}
          onClose={() => {
            setShowModal(false);

            setEditingUserId(null);
            setShowModal(false);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleAddUser}
            disabled={!name || !email || !password}
          >
            {editingUserId ? "Update User" : "Add User"}
          </button>
        </Modal>
      )}

      <DataTable
        columns={["ID", "Name", "Email"]}
        data={users.filter((user) => {
          return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })}
        renderActions={(user) => (
          <>
            <button className="edit-btn" onClick={() => handleEditUser(user)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => {
                const confirmDelete = window.confirm(
                  "Are you sure you want to delete this user?",
                );

                if (confirmDelete) {
                  handleDeleteUser(user.id);
                }
              }}
            >
              Delete
            </button>
          </>
        )}
      />

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </Layout>
  );
}

export default Users;

import { useState } from "react";

import Layout from "../components/Layout";

import DataTable from "../components/DataTable";

import "../styles/masters.css";

function Masters() {
  const [masters, setMasters] = useState([
    {
      id: 1,
      master: "Role Management",
      category: "Admin",
    },

    {
      id: 2,
      master: "Permission Control",
      category: "Security",
    },
  ]);

  const [masterName, setMasterName] = useState("");

  const [category, setCategory] = useState("");

  const handleAddMaster = () => {
    if (!masterName || !category) return;

    const newMaster = {
      id: masters.length + 1,

      master: masterName,

      category,
    };

    setMasters([...masters, newMaster]);

    setMasterName("");

    setCategory("");
  };

  const handleDelete = (id) => {
    setMasters(masters.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="masters-page">
        <div className="page-header">
          <h1>Masters Management</h1>
        </div>

        <div className="master-form">
          <input
            type="text"
            placeholder="Master Name"
            value={masterName}
            onChange={(e) => setMasterName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <button onClick={handleAddMaster}>Add Master</button>
        </div>

        <DataTable
          columns={["ID", "Master", "Category"]}
          data={masters}
          renderActions={(item) => (
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          )}
        />
      </div>
    </Layout>
  );
}

export default Masters;

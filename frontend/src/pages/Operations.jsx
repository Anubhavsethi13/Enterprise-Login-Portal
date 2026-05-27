import { useState } from "react";

import Layout from "../components/Layout";

import DataTable from "../components/DataTable";

import "../styles/operations.css";

function Operations() {
  const [operations, setOperations] = useState([
    {
      id: 1,
      operation: "Create User",
      status: "Active",
    },

    {
      id: 2,
      operation: "Delete User",
      status: "Active",
    },

    {
      id: 3,
      operation: "Update Permission",
      status: "Inactive",
    },
  ]);

  const [operationName, setOperationName] = useState("");

  const [status, setStatus] = useState("Active");

  const handleAddOperation = () => {
    if (!operationName) return;

    const newOperation = {
      id: operations.length + 1,

      operation: operationName,

      status,
    };

    setOperations([...operations, newOperation]);

    setOperationName("");

    setStatus("Active");
  };

  const handleDelete = (id) => {
    setOperations(operations.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="operations-page">
        <div className="page-header">
          <h1>Operations Management</h1>
        </div>

        <div className="operation-form">
          <input
            type="text"
            placeholder="Operation Name"
            value={operationName}
            onChange={(e) => setOperationName(e.target.value)}
          />

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Active</option>

            <option>Inactive</option>
          </select>

          <button onClick={handleAddOperation}>Add Operation</button>
        </div>

        <DataTable
          columns={["ID", "Operation", "Status"]}
          data={operations}
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

export default Operations;

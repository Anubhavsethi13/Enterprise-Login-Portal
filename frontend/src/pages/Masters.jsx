import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";
import {
  getMasters,
  createMaster,
  deleteMaster,
} from "../services/masterService";
import "../styles/masters.css";

function Masters() {
  const [masters, setMasters] = useState([]);
  const [masterName, setMasterName] = useState("");
  const [description, setDescription] = useState("");

  const loadMasters = async () => {
    try {
      const data = await getMasters();
      setMasters(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMasters();
  }, []);

  const handleAddMaster = async () => {
    if (!masterName || !description) return;

    try {
      await createMaster({
        name: masterName,
        description: description,
      });

      setMasterName("");
      setDescription("");

      loadMasters();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMaster(id);
      loadMasters();
    } catch (error) {
      console.log(error);
    }
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
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleAddMaster}>Add Master</button>
        </div>

        <DataTable
          columns={["ID", "Name", "Description"]}
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

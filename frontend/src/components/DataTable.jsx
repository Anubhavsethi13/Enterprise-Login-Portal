function DataTable({
  columns,

  data,

  renderActions,
}) {
  return (
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={col}>{item[col.toLowerCase()]}</td>
              ))}

              <td>{renderActions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

import "./Inventory.scss";
import data from "../../constants/data.json";
import React, { useState } from "react";

const Inventory = () => {
  const [rows, setRows] = useState(data);

  const [newRow, setNewRow] = useState({
    laptopNumber: "",
    purchaseDate: "",
    yearAge: "",
    issuedTo: "",
    department: "",
    brand: "",
    processor: "",
    windows: "",
    office365: "",
    activeDir: "",
  });

  const [editRow, setEditRow] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showSave, setShowSave] = useState(false);

  const isFormFilled = () => {
    return Object.values(newRow).every((val) => val !== "");
  };

  const tableToCSV = () => {
    const headers = Object.keys(rows[0]).join(",");
    const csvData = rows.map((row) => Object.values(row).join(",")).join("\n");
    downloadCSVFile(`${headers}\n${csvData}`);
  };

  const downloadCSVFile = (csvData) => {
    const csvFile = new Blob([csvData], { type: "text/csv" });
    const tempLink = document.createElement("a");
    tempLink.download = "table.csv";
    const url = window.URL.createObjectURL(csvFile);
    tempLink.href = url;
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRow((prevState) => ({ ...prevState, [name]: value }));
  };

  const onRowClick = (index) => {
    setEditRow(index);
    setNewRow(rows[index]);
    setIsAdding(true);
    setShowSave(true);
  };

  const onSave = () => {
    const newRows = [...rows];
    newRows[editRow] = newRow;
    setRows(newRows);
    setNewRow({
      laptopNumber: "",
      purchaseDate: "",
      yearAge: "",
      issuedTo: "",
      department: "",
      brand: "",
      processor: "",
      windows: "",
      office365: "",
      activeDir: "",
    });

    setEditRow(null);
    setShowSave(false);
    setIsAdding(false);
  };

  const onAdd = () => {
    if (isFormFilled()) {
      setRows([...rows, newRow]);
      setIsAdding(false);
      setNewRow({
        laptopNumber: "",
        purchaseDate: "",
        yearAge: "",
        issuedTo: "",
        department: "",
        brand: "",
        processor: "",
        windows: "",
        office365: "",
        activeDir: "",
      });
      setShowSave(false);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const onDelete = (index, event) => {
    event.stopPropagation();
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };
  return (
    <div className="inventory">
      {/* <div className="inventory__inv-header"></div> */}
      <div className="inventory__content">
        <div className="inventory__content__inv-table">
          {rows.length === 0 ? (
            <p>There are no items to display.</p>
          ) : (
            <table className="inventory__content__inv-table__table-content">
              <thead>
                <tr>
                  {Object.keys(rows[0]).map((key) => (
                    <th key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} onClick={() => onRowClick(index)}>
                    {Object.values(row).map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                    <td className="delete-button-cell">
                      <button
                        className="btn-delete"
                        type="button"
                        onClick={(event) => onDelete(index, event)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <button type="button" onClick={tableToCSV}>
                Download CSV
              </button>
            </table>
          )}
        </div>
        <div className="inventory__content__inv-inputs">
          <form>
            {/* <input
              className="inventory__content__inv-inputs__txt-inputs"
              type="text"
              name="laptopNumber"
              placeholder="Laptop Number"
              value={newRow.laptopNumber}
              onChange={handleInputChange}
              disabled={!isAdding}
            /> */}
            {/* <label>Purchase Date</label>
            <input
              className="inventory__content__inv-inputs__txt-inputs"
              type="date"
              name="purchaseDate"
              placeholder="Purchase Date"
              value={newRow.purchaseDate}
              onChange={handleInputChange}
              disabled={!isAdding}
            /> */}
            {Object.keys(newRow).map((key) => (
              <input
                className="inventory__content__inv-inputs__txt-inputs"
                key={key}
                type="text"
                name={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                value={newRow[key]}
                onChange={handleInputChange}
                disabled={!isAdding}
              />
            ))}
            {isAdding ? (
              <button
                type="button"
                onClick={onAdd}
                className="inventory__content__inv-inputs__btn-inputs"
              >
                Add
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="inventory__content__inv-inputs__btn-inputs"
              >
                Add Row
              </button>
            )}
            {editRow !== null && showSave && (
              <button
                type="button"
                onClick={onSave}
                className="inventory__content__inv-inputs__btn-inputs"
              >
                Save
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

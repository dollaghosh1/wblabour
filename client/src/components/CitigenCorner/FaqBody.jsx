import React from "react";

export default function InlineStyledTable() {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f4f4f4",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };

  const trHover = {
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  };

  return (
    <div className="about-us">
      <div className="banner-inner">
          <img className="d-block w-100" src="/src/assets/images/innerbanner.jpg" alt="inner-banner" />
        </div>
    <div className="container">   
        <div className="row">
            <div className="col-md-12">
                <table style={tableStyle}>
                <thead>
                    <tr>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                    <tr key={row.id} style={trHover}>
                        <td style={tdStyle}>{row.id}</td>
                        <td style={tdStyle}>{row.name}</td>
                        <td style={tdStyle}>{row.age}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
 </div>
  );
}

import React, { Component } from "react";

class PatientDetail extends React.Component {
  state = {
    data: [
      {
        Name: "Prakash Singh",
        Age: 21,
        Weight: 53,
        Symptoms: "Fever",
        Phone: "9987654321",
        Address: "Patna, Bihar",
      },
      {
        Name: "Naresh Singh",
        Age: 21,
        Weight: 53,
        Symptoms: "Fever",
        Phone: "9987654321",
        Address: "Patna, Bihar",
      },
      {
        Name: "Naresh Singh",
        Age: 21,
        Weight: 53,
        Symptoms: "Fever",
        Phone: "9987654321",
        Address: "Patna, Bihar",
      },
      {
        Name: "Naresh Singh",
        Age: 21,
        Weight: 53,
        Symptoms: "Fever",
        Phone: "9987654321",
        Address: "Patna, Bihar",
      },
    ],
  };
  render() {
    return (
      <div className="list">
        <table>
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Symptoms</th>
            <th>Phone</th>
            <th>Address</th>
          </thead>
          <tbody>
            {this.state.data.map((m) => {
              return (
                <tr>
                  <td>{m.Name}</td>
                  <td>{m.Age}</td>
                  <td>{m.Weight}</td>
                  <td>{m.Symptoms}</td>
                  <td>{m.Phone}</td>
                  <td>{m.Address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientDetail;

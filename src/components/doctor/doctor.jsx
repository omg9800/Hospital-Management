import React, { Component } from "react";
import PatientDetail from "../patientDetails";
class Doctor extends React.Component {
  render() {
    return (
      <div>
        <div className="doctor-main">
          <PatientDetail />
        </div>
      </div>
    );
  }
}

export default Doctor;

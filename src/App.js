import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import "./components/style.scss";
import { Button } from "@material-ui/core";
import { Switch, Route } from "react-router";
import Home from "./components/home";
import Menu from "./components/staff/menu";
import Admin from "./components/admin/main";
import Doctor from "./components/doctor/doctor";
import Staff from "./components/staff/menu";
import StaffProfile from "./components/staff/staffProfile";
import AddPatient from "./components/staff/addPatient";
import ViewPatient from "./components/patientDetails";
import AdminMenu from "./components/admin/adminMenu";
import DoctorMenu from "./components/admin/doctorsMenu";
import StaffMenu from "./components/admin/staffMenu";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/staff" component={Staff} />
          <Route path="/staff-profile" exact component={StaffProfile} />

          <Route path="/" exact component={Home} />
          <Route path="/logout" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

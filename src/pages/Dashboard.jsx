import React from "react";
import "./Dashboard.css";
import GroupsIcon from "@mui/icons-material/Groups";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <main>
        <section className="dashboard-header">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h4>Dashboard</h4>
              {/* <button onClick={handleClickOpen}>Create Group</button> */}
            </div>
          </div>
        </section>
        <section className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card">
                <Link to={"/Groups"} className="d-flex align-items-center justify-content-center flex-column">
                  <GroupsIcon />
                    <h6>Groups</h6>
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="card d-flex align-items-center justify-content-centerx">
                  <CardMembershipIcon />
                  <h6>Members</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="card d-flex align-items-center justify-content-centerx">
                  <BugReportIcon />
                  <h6>Reports</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default Dashboard;

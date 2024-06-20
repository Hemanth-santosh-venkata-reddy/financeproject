import React from "react";
import "./GroupsDetails.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const GroupsDetails = () => {
  return (
    <>
      <section className="GroupsDetails">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card my-3">
                <div className="card-header">Group Details</div>
                <div className="card-body">
                  <h6 className="mb-4">Group Name:</h6>
                  <div className="row">
                    <div className="col-4">
                      <h6>Start Date:</h6>
                    </div>
                    <div className="col-4">
                      {" "}
                      <h6>End Date:</h6>
                    </div>
                    <div className="col-4">
                      <h6>Amount Date:</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Members in Group</div>
                <div className="card-body">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with segmented dropdown button"
                    />

                    <label class="input-group-text" for="inputGroupSelect02">
                      Add Members
                    </label>
                  </div>

                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Transctions</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Hemanth</td>
                        <td>9133877465</td>
                        <td>Sucess</td>
                        <td>Done</td>
                        <td>
                          <ModeEditIcon className="me-3" />
                          <DeleteIcon />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>guru</td>
                        <td>9133877465</td>
                        <td>Sucess</td>
                        <td>Done</td>
                        <td>
                          <ModeEditIcon className="me-3" />
                          <DeleteIcon />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>vinay</td>
                        <td>9133877465</td>
                        <td>Sucess</td>
                        <td>Done</td>
                        <td>
                          <ModeEditIcon className="me-3" />
                          <DeleteIcon />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>sreenath</td>
                        <td>9133877465</td>
                        <td>Sucess</td>
                        <td>Done</td>
                        <td>
                          <ModeEditIcon className="me-3" />
                          <DeleteIcon />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupsDetails;

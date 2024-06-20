import React, { useState } from "react";
import "./Groups.css";
import { Form } from "../components/Form.jsx";
import { styled } from "@mui/material/styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AddIcon from "@mui/icons-material/Add";
import { GroupForm } from "../components/GroupForm.jsx";

const Groups = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);
  const [formData, setformData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const redirecttoGroupsDetails = () => {
    navigate("/GroupsDetails");
  };

  const handleDelete = (id) => {
    setValues(values.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsUpdate(true);
    setOpen(true);
    setformData({ ...values.filter((item) => item.id == id)[0] });
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      <section className="group-header">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <GroupForm open={open} close={setOpen}>
              <Form
                formData={formData}
                setformData={setformData}
                setValues={setValues}
                setOpen={setOpen}
                handleEdit={handleEdit}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                editId={editId}
              />
            </GroupForm>
            <h2>Groups</h2>
            <button
              className="d-flex align-items-center justify-content-center gap-1"
              onClick={() => {
                setIsUpdate(false);
                handleClickOpen();
                setformData({});
              }}
            >
              <AddIcon />
              Create Group
            </button>
          </div>
        </div>
      </section>
      <section className="group">
        <div className="container">
          <div className="row">
            {values.map((item) => (
              <div key={item.id} className="col-3 mb-2">
                <div onClick={() => redirecttoGroupsDetails()} className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="m-0">
                        Group Name:
                        {item.groupName}
                      </h5>
                      <div className="d-flex align-items-center justify-content-center">
                        <ModeEditIcon
                          className="me-2"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleEdit(item.id);
                          }}
                        />
                        <DeleteIcon
                          onClick={(event) => {
                            event.stopPropagation();
                            handleDelete(item.id);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2">
                    <h5>Current:3rd Month</h5>
                    <h5>Requested Member:</h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <p>Members</p>
                      <p>(10)</p>
                    </div>
                    <Box sx={{ flexGrow: 1, mb: 2 }}>
                      <BorderLinearProgress variant="determinate" value={20} />
                    </Box>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0">{item.groupStartDate}</p>
                      <p className="m-0">2/10 Months</p>
                      <p className="m-0">{item.groupEndDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Groups;

export const Form = ({
  formData,
  setformData,
  setValues,
  setOpen,
  isUpdate,
  setIsUpdate,
  editId
}) => {
  const handleChange = (event) => {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handlecreategroupdata = () => {
    if (isUpdate) {
      setValues((prev) => prev.map((data) => data.id === editId ? { ...prev, ...formData } : data))
    }
    else {
      const newData = { ...formData, id: Math.random() };
      setValues((prevdata) => [...prevdata, newData]);
    }
    setformData({});
    setOpen(false);
    setIsUpdate(false);
  };

  return (
    <>
      <form className="w-100">
        <h6 className="text-center">Enter Group Details</h6>

        <label htmlFor="" className="w-100">
          Group Name
        </label>
        <input
          type="text"
          name="groupName"
          value={formData.groupName}
          onChange={handleChange}
        />
        <label htmlFor="" className="w-100">
          Start Date
        </label>
        <input
          type="date"
          name="groupStartDate"
          value={formData.groupStartDate}
          onChange={handleChange}
        />

        <label htmlFor="" className="w-100">
          End Date
        </label>
        <input
          type="date"
          name="groupEndDate"
          value={formData.groupEndDate}
          onChange={handleChange}
        />

        <label htmlFor="" className="w-100">
          No Of Positions
        </label>
        <input
          type="number"
          name="positions"
          value={formData.positions}
          onChange={handleChange}
        />

        <label htmlFor="" className="w-100">
          Amount
        </label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <div className="w-100 d-flex align-items-center justify-content-end">
          <button className="btn" onClick={handlecreategroupdata}>
            {isUpdate ? "updategroup" : "creategroup"}
          </button>
        </div>
      </form>
    </>
  );
};

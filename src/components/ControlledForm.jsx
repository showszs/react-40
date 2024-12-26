import { useState } from "react";

function ControlledForm() {
  const [checkData, setCheckData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkData);
  };

  const handleChange = (e) => {
    setCheckData(e.target.value);
  };

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="input-text">
          <input
            type="text"
            value={checkData}
            onChange={handleChange}
            name="input-text"
            id="input-text"
            className="form-control"
            placeholder="useState"
          />
        </label>
      </div>
    </form>
  );
}

export default ControlledForm;

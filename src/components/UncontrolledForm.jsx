import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="input-text">
          <input
            type="text"
            name="input-text"
            id="input-text"
            className="form-control"
            placeholder="UseRef"
            ref={inputRef}
          />
        </label>
      </div>
      <button type="submit " className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default UncontrolledForm;

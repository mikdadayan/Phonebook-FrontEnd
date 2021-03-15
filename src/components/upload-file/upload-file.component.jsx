import React from "react";

const UploadFile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileInput = document.querySelector("#upload_file");
    const formData = new FormData();

    formData.append("data", fileInput.files[0]);

    const options = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:5000/api/contacts/upload", options);
  };

  return (
    <form className="measure center mt6" onSubmit={handleSubmit}>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Upload File</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="upload_file">
            Choose File
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="file"
            name="data"
            id="upload_file"
            required
          />
        </div>
      </fieldset>
      <div className="">
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
        >
          Upload File
        </button>
      </div>
    </form>
  );
};

export default UploadFile;

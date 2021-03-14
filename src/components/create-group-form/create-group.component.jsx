import React, { useState } from "react";
import { connect } from "react-redux";

import { createGroup } from "../../redux/contact/contact.action";

const CreateGroup = ({ createGroup }) => {
  const [group_name, setGroupName] = useState("");
  const handleAddGroup = (e) => {
    e.preventDefault();
    createGroup(group_name);
    setGroupName("");
  };

  return (
    <form className="measure center mt6" onSubmit={handleAddGroup}>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Create Group</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="group_name">
            Group Name
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="group_name"
            id="group_name"
            value={group_name}
            onChange={(event) => setGroupName(event.target.value)}
            required
          />
        </div>
      </fieldset>
      <div className="">
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
        >
          Add Group
        </button>
      </div>
    </form>
  );
};

export default connect(null, { createGroup })(CreateGroup);

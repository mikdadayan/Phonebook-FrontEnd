import React, { useState } from "react";
import { connect } from "react-redux";
import { createContact } from "../../redux/contact/contact.action";
// import "./404-page.css";

const CreateContact = ({ groups, createContact }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [contactGroups, setContactGroups] = useState([]);
  const handleAddContact = (e) => {
    e.preventDefault();
    createContact({ first_name, last_name, phone_number, contactGroups });
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setContactGroups([]);
  };

  const handleSelectChange = (e) => {
    let selected = [];
    for (let option of e.target.options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }

    setContactGroups(selected);
  };
  return (
    <form className="measure center" onSubmit={handleAddContact}>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Create Contact</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="first_name">
            First Name
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="first_name"
            value={first_name}
            id="first_name"
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="last_name"
            id="last_name"
            value={last_name}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="phone_number">
            Phone Number
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="+374YYXXXXXX"
            value={phone_number}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6 mv2" htmlFor="groups">
            Select Groups
          </label>
          <p className="f6 light-red">
            * Hold down the Ctrl (windows) or Command (Mac) button to select
            multiple options.
          </p>
          <select
            onChange={handleSelectChange}
            name="groups"
            id="groups"
            multiple
            className="b pa2 input-reset ba bg-transparent w-100"
            size="3"
          >
            {groups.map((group) => (
              <option key={group._id} value={group._id}>
                {group.group_name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <div className="">
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  groups: state.contact.groups,
});

export default connect(mapStateToProps, { createContact })(CreateContact);

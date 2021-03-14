import React, { useState } from "react";
import { connect } from "react-redux";
import { searchContact, getContacts } from "../../redux/contact/contact.action";

const Search = ({ searchContact, getContacts }) => {
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    searchContact(name, phone_number);
  };

  const handleCancelFilter = (e) => {
    e.preventDefault();
    getContacts();
    setName("");
    setPhoneNumber("");
  };
  return (
    <form className="measure left mt1" onSubmit={handleSearch}>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">
            Name
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="John"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="phone_number">
            Phone Number
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="+374YYXXXXXX"
            value={phone_number}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
      </fieldset>
      <div className="">
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
        >
          Search
        </button>
        <button
          onClick={handleCancelFilter}
          className="b ml4 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        >
          Cancel Filter
        </button>
      </div>
    </form>
  );
};

export default connect(null, { searchContact, getContacts })(Search);

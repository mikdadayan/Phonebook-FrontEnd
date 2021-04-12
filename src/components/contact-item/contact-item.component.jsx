import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, editContact } from "../../redux/contact/contact.action";

const ContactItem = ({
  deleteContact,
  editContact,
  contact: { _id, first_name, last_name, phone_number, groups },
}) => {
  const groupsNames = groups.map((group) => group.group_name).join("|");
  // const groupsId = groups.map((group) => group._id);
  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteContact(_id);
  };

  const handleEditClick = () => {
    editContact({ _id, first_name, last_name, phone_number, groupsNames });
  };
  return (
    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc w2 w3-ns v-mid"></div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">
          {" "}
          {first_name + " " + last_name}{" "}
        </h1>
        <h1 className="f6 f5-ns fw6 lh-title black mv1">{phone_number}</h1>

        <h2 className="f6 fw4 mt0 mb0 black-60">Groups: {groupsNames}</h2>
      </div>
      <div className="dtc v-mid">
        <div className="w-100 tr">
          <Link to="/edit-contact" onClick={handleEditClick}>
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">
              Edit
            </button>
          </Link>
          <button
            className="f6 button-reset hot-pink ba b--black-10 dim pointer pv1 black-60 ml2"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default connect(null, { deleteContact, editContact })(ContactItem);

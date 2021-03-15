import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGroup, editGroup } from "../../redux/contact/contact.action";

const GroupItem = ({ group: { _id, group_name }, deleteGroup, editGroup }) => {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteGroup(_id);
  };

  const handleEditClick = () => {
    editGroup({ _id, group_name });
  };
  return (
    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc w2 w3-ns v-mid"></div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0"> {group_name} </h1>
      </div>
      <div className="dtc v-mid">
        <div className="w-100 tr">
          <Link to="/edit-group" onClick={handleEditClick}>
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

export default connect(null, { deleteGroup, editGroup })(GroupItem);

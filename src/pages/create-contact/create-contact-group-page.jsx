import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateContact from "../../components/create-contact-form/create-contact-form.component";
import CreateGroup from "../../components/create-group-form/create-group.component";
import UploadFile from "../../components/upload-file/upload-file.component";

import { getContacts, getGroups } from "../../redux/contact/contact.action";

const CreateContactAndGroup = ({ getContacts, getGroups }) => {
  useEffect(() => {
    getContacts();
    getGroups();
  });
  return (
    <main className="pa4 black-80">
      <CreateContact />
      <CreateGroup />
      <UploadFile />
    </main>
  );
};

export default connect(null, { getContacts, getGroups })(CreateContactAndGroup);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import ContactItem from "../../components/contact-item/contact-item.component";
import GroupItem from "../../components/group-item/group-item.component";
import Search from "../../components/search/search.component";
import { getContacts, getGroups } from "../../redux/contact/contact.action";
// import "./404-page.css";

const Contacts = ({ getContacts, getGroups, contacts, groups }) => {
  useEffect(() => {
    getContacts();
    getGroups();
  }, []);
  return (
    <main className="mw9 center ph3-ns">
      <Search />
      <div className="cf ph2-ns">
        <div className="fl w-60 pa2">
          <a
            class="f6 link dim ba bw2 ph3 pv2 mb2 dib dark-green"
            target="_blank"
            href="http://localhost:5000/api/contacts/download"
          >
            Download Contacts Into CSV File
          </a>
          <h1 className="f4 fw6 ph0 mh0">Contacts</h1>
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </div>
        <div className="fr w-30 pa2">
          <h1 className="f4 fw6 ph0 mh0">Groups</h1>
          {groups.map((group) => (
            <GroupItem key={group._id} group={group} />
          ))}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
  groups: state.contact.groups,
});

export default connect(mapStateToProps, { getContacts, getGroups })(Contacts);

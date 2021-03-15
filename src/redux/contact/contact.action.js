import ContactActionTypes from "./contact.types";

const {
  CREATECONTACT_SUCCESS,
  CONTACTSLOAD_SUCCESS,
  CONTACTSLOAD_FAIL,
  REMOVECONTACT_SUCCESS,
  GROUPSLOAD_SUCCESS,
  REMOVEGROUP_SUCCESS,
  CREATEGROUP_SUCCESS,
  SEARCH_SUCCESS,
  EDITCONTACT_SUCCESS,
  UPDATECONTACT_SUCCESS,
  EDITGROUP_SUCCESS,
  UPDATEGROUP_SUCCESS,
} = ContactActionTypes;

export const getContacts = () => async (dispatch) => {
  try {
    const respone = await fetch("http://localhost:5000/api/contacts/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await respone.json();
    if (respone.status === 200) {
      const allContacts = data.contactsAll;
      dispatch({
        type: CONTACTSLOAD_SUCCESS,
        payload: allContacts,
      });
    }
  } catch (error) {
    dispatch({
      type: CONTACTSLOAD_FAIL,
    });
    alert(error.message);
  }
};

export const getGroups = () => async (dispatch) => {
  try {
    const respone = await fetch("http://localhost:5000/api/groups/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await respone.json();
    if (respone.status === 200) {
      const groups = data.groups;
      dispatch({
        type: GROUPSLOAD_SUCCESS,
        payload: { groups },
      });
    }
  } catch (error) {
    alert(error.message);
  }
};

export const createContact = ({
  first_name,
  last_name,
  phone_number,
  contactGroups,
}) => async (dispatch) => {
  try {
    const respone = await fetch("http://localhost:5000/api/contacts/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone_number,
        groups: contactGroups,
      }),
    });
    const data = await respone.json();
    if (respone.status === 201) {
      const newContact = data.newContact;
      dispatch({
        type: CREATECONTACT_SUCCESS,
        payload: { newContact },
      });
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const createGroup = (group_name) => async (dispatch) => {
  try {
    const respone = await fetch("http://localhost:5000/api/groups/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group_name,
      }),
    });
    const data = await respone.json();
    if (respone.status === 201) {
      const newGroup = data.group;
      dispatch({
        type: CREATEGROUP_SUCCESS,
        payload: { newGroup },
      });
    }
  } catch (error) {
    alert(error.message);
  }
};

export const editContact = (contact_item) => async (dispatch) => {
  try {
    dispatch({
      type: EDITCONTACT_SUCCESS,
      payload: { contact_item },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const editGroup = (group_item) => async (dispatch) => {
  try {
    dispatch({
      type: EDITGROUP_SUCCESS,
      payload: { group_item },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const updateContact = ({
  _id,
  first_name,
  last_name,
  phone_number,
  contactGroups,
}) => async (dispatch) => {
  try {
    const respone = await fetch(`http://localhost:5000/api/contacts/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone_number,
        groups: contactGroups,
      }),
    });
    const data = await respone.json();
    if (respone.status === 200) {
      const updatedContact = data.updatedContact;
      dispatch({
        type: UPDATECONTACT_SUCCESS,
        payload: { updatedContact },
      });
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const updateGroup = ({ _id, group_name }) => async (dispatch) => {
  try {
    const respone = await fetch(`http://localhost:5000/api/groups/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group_name,
      }),
    });
    const data = await respone.json();
    if (respone.status === 201) {
      const updatedGroup = data.updatedGroup;
      dispatch({
        type: UPDATEGROUP_SUCCESS,
        payload: { updatedGroup },
      });
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  try {
    const respone = await fetch(
      `http://localhost:5000/api/contacts/${contactId}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await respone.json();
    if (respone.status === 202) {
      dispatch({
        type: REMOVECONTACT_SUCCESS,
        payload: { contactId },
      });
      alert(data.message);
    }
  } catch (error) {
    dispatch({
      type: CONTACTSLOAD_FAIL,
    });
    alert(error.message);
  }
};

export const deleteGroup = (groupId) => async (dispatch) => {
  try {
    const respone = await fetch(`http://localhost:5000/api/groups/${groupId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await respone.json();
    if (respone.status === 202) {
      dispatch({
        type: REMOVEGROUP_SUCCESS,
        payload: { groupId, contacts: data.contacts },
      });
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const searchContact = (name, phone_number) => async (dispatch) => {
  try {
    const respone = await fetch(
      `http://localhost:5000/api/contacts/search?phone_number=${phone_number}&name=${name}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await respone.json();
    if (respone.status === 200) {
      const contacts = data.contacts;
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { contacts },
      });
    }
  } catch (error) {
    alert(error.message);
  }
};

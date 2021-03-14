import ContactActionTypes from "./contact.types";

const {
  CREATECONTACT_SUCCESS,
  CREATECONTACT_FAIL,
  CONTACTSLOAD_SUCCESS,
  CONTACTSLOAD_FAIL,
  REMOVECONTACT_SUCCESS,
  REMOVECONTACT_FAIL,
  GROUPSLOAD_SUCCESS,
  REMOVEGROUP_SUCCESS,
  GROUPSLOAD_FAIL,
  CREATEGROUP_SUCCESS,
  SEARCH_SUCCESS,
} = ContactActionTypes;

const INITIAL_STATE = {
  contacts: [],
  groups: [],
  contactItem: {},
};

const contactReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACTSLOAD_SUCCESS:
      return { ...state, contacts: payload };
    case CREATECONTACT_SUCCESS:
      return { ...state, contacts: state.contacts.concat(payload.newContact) };
    case REMOVECONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== payload.contactId
        ),
      };

    case GROUPSLOAD_SUCCESS:
      return { ...state, groups: payload.groups };
    case CREATEGROUP_SUCCESS:
      return { ...state, groups: state.groups.concat(payload.newGroup) };
    case REMOVEGROUP_SUCCESS:
      return {
        ...state,
        contacts: payload.contacts,
        groups: state.groups.filter((group) => {
          return group._id !== payload.groupId;
        }),
      };
    case CONTACTSLOAD_FAIL:
      return { ...state, contacts: [] };
    case REMOVECONTACT_FAIL:
      return state;
    case SEARCH_SUCCESS:
      return { ...state, contacts: payload.contacts };
    default:
      return state;
  }
};

export default contactReducer;

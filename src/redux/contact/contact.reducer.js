import ContactActionTypes from "./contact.types";

const {
  CREATECONTACT_SUCCESS,
  CONTACTSLOAD_SUCCESS,
  CONTACTSLOAD_FAIL,
  REMOVECONTACT_SUCCESS,
  REMOVECONTACT_FAIL,
  GROUPSLOAD_SUCCESS,
  REMOVEGROUP_SUCCESS,
  CREATEGROUP_SUCCESS,
  SEARCH_SUCCESS,
  EDITCONTACT_SUCCESS,
  UPDATECONTACT_SUCCESS,
  EDITGROUP_SUCCESS,
  UPDATEGROUP_SUCCESS,
} = ContactActionTypes;

const INITIAL_STATE = {
  contacts: [],
  groups: [],
  contactItem: {},
  groupItem: {},
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

    case EDITCONTACT_SUCCESS:
      return { ...state, contactItem: payload.contact_item };
    case EDITGROUP_SUCCESS:
      return { ...state, groupItem: payload.group_item };
    case UPDATECONTACT_SUCCESS:
      return {
        ...state,
        contactItem: {},
        contacts: state.contacts.map((contact) => {
          if (contact._id === payload.updatedContact._id) {
            return payload.updatedContact;
          } else {
            return contact;
          }
        }),
      };
    case UPDATEGROUP_SUCCESS:
      return {
        ...state,
        groupItem: {},
        groups: state.groups.map((group) => {
          if (group._id === payload.updatedGroup._id) {
            return payload.updatedGroup;
          } else {
            return group;
          }
        }),
      };
    case SEARCH_SUCCESS:
      return { ...state, contacts: payload.contacts };
    case REMOVECONTACT_FAIL:
      return state;
    default:
      return state;
  }
};

export default contactReducer;

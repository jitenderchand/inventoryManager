import {
  ADD_OBJECT_FIELD_TYPE,
  ADD_OBJECT_TYPE,
  MODIFY_OBJECT_TYPE_VALUE
} from '../actions';
import uniq from 'lodash/uniq';

export const defaultState = {
  byId: {},
  allIds: []
};

export const objectTypesReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ADD_OBJECT_TYPE: {
      const id = action.payload;
      const model = {
        id,
        name: " ",
        titleFieldId: null,
        fieldIds: []
      }
      return {
        ...state,
        byId: { ...state.byId, [id]: model },
        allIds: uniq([...state.allIds, id])
      };
    }
    case MODIFY_OBJECT_TYPE_VALUE: {
      const { id, name, value } = action.payload;
      const oldState = {...state.byId[id]};
      oldState[name] = value;
      return {
        ...state,
        byId: { ...state.byId, [id]: {...oldState} }
      };
    }
    case ADD_OBJECT_FIELD_TYPE: {
      const { id, objectTypeId } = action.payload;
      const oldState = {...state.byId[objectTypeId]};
      oldState.fieldIds = [...oldState.fieldIds, id];
      return {
        ...state,
        byId: { ...state.byId, [objectTypeId]: {...oldState} }
      };
    }
    default:
      return state;
  }
};

export const getObjectTypeByIdSelector = (state) => {
  return state.objectTypes.byId;
};

export const getAllObjectTypeIdsSelector = (state) => {
  return state.objectTypes.allIds;
};

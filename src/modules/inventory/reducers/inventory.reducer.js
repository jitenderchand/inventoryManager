import uniq from 'lodash/uniq';
import {
  ADD_INVENTORY
} from '../actions';


export const defaultState = {
  byId: {},
  allIds: []
};

export const inventoryReducer = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ADD_INVENTORY: {
      const { id, objectTypeId, title, fields } = action.payload;
      const model = {
        id,
        objectTypeId,
        title,
        fields
      }
      return {
        ...state,
        byId: { ...state.byId, [id]: model },
        allIds: uniq([...state.allIds, id])
      };
    }
    default:
      return state;
  }
};

export const getInventoryByIdSelector = (state) => {
  return state.inventory.byId;
};

export const getAllInventoryIdsSelector = (state) => {
  return state.inventory.allIds;
};

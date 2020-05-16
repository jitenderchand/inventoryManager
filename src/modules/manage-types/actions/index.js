import { createAction } from 'redux-actions';

export const ADD_OBJECT_TYPE =
  'objector.add.inventory.type';
export const addObjectType = createAction(
  ADD_OBJECT_TYPE
);


export const MODIFY_OBJECT_TYPE_VALUE =
  'objector.modify.object.type.value';

export const modifyObjectTypeValues = createAction(
  MODIFY_OBJECT_TYPE_VALUE
);


export const ADD_OBJECT_FIELD_TYPE =
  'objector.add.object.field.type';

export const addObjectFieldType = createAction(
  ADD_OBJECT_FIELD_TYPE
);

export const MODIFY_OBJECT_FIELD_TYPE =
  'objector.modify.object.field.type';

export const modifyObjectFieldType = createAction(
  MODIFY_OBJECT_FIELD_TYPE
);

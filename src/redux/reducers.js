import { addSyntheticTrailingComment } from "typescript";
import { siteSchema as initialState } from "../schemas/index";
import {
  ADD_ELEMENT_TO_SYSTEM,
  UPDATE_SCHEMA_TABLE,
  UPDATE_TABLE,
  UPDATE_FORM
} from "./constants";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT_TO_SYSTEM:
      state.elementsEfficent.set(parseInt(action.payload.id), action.payload);
      return {
        ...state
      };
    case UPDATE_TABLE:
      state.elementsEfficent.set(
        parseInt(action.payload.id),
        action.payload.tableData
      );
      return {
        ...state
      };
    case UPDATE_SCHEMA_TABLE:
      state.elementsEfficent.set(parseInt(action.payload.id), {
        ...state.elementsEfficent.get(parseInt(action.payload.id)),
        schema: action.payload.schema
      });

      return {
        ...state
      };
    case UPDATE_FORM:
      state.elementsEfficent.set(action.payload.id, action.payload.form);
      return {
        ...state
      };
    default:
      return state;
  }
};

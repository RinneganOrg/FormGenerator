import { addSyntheticTrailingComment } from "typescript";
import { siteSchema as initialState } from "../schemas/index";
import {
  ADD_ELEMENT_TO_SYSTEM,
  UPDATE_SCHEMA_TABLE,
  UPDATE_TABLE,
  UPDATE_FORM,
} from "./constants";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT_TO_SYSTEM:
      state.elementsEfficent.set(parseInt(action.payload.id), action.payload);
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case UPDATE_TABLE:
      let newElementsArray = [...state.elements];
      let elementsIndexTable = newElementsArray.findIndex(
        (element) => element.id === action.payload.id
      );
      newElementsArray[elementsIndexTable] = action.payload.tableData;
      state.elementsEfficent.set(
        parseInt(action.payload.id),
        action.payload.tableData
      );
      return {
        ...state,
        elements: newElementsArray,
      };
    case UPDATE_SCHEMA_TABLE:
      let elementsArray = [...state.elements];
      let indexOfTable = elementsArray.findIndex(
        (element) => element.id === action.payload.id
      );
      state.elementsEfficent.set(parseInt(action.payload.id), {
        ...state.elementsEfficent.get(parseInt(action.payload.id)),
        schema: action.payload.schema,
      });
      elementsArray[indexOfTable].schema = [...action.payload.schema];
      return {
        ...state,
        elements: elementsArray,
      };
    case UPDATE_FORM:
      let newElementsArray2 = [...state.elements];
      let elementsIndexForm = newElementsArray2.findIndex(
        (element) => element.id === action.payload.id
      );
      state.elementsEfficent.set(action.payload.id, action.payload.form);
      newElementsArray2[elementsIndexForm] = action.payload.form;
      return {
        ...state,
        elements: newElementsArray2,
      };
    default:
      return state;
  }
};

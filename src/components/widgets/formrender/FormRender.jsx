import React from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_FORM } from "../../../redux/constants";

function FormRender({ id }) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.elementsEfficent.get(id));
  const uiSchema = useSelector((state) =>
    state.elementsEfficent.get(id)
  ).uiSchema;
  const data = useSelector((state) => state.elementsEfficent.get(id)).data;
  const schema = useSelector((state) => state.elementsEfficent.get(id)).schema;

  const updateForm = (data) => {
    const newObjectForm = Object.assign(form);
    newObjectForm.data = data;
    dispatch({
      type: UPDATE_FORM,
      payload: { id: id, form: newObjectForm },
    });
  };
  return (
    <div>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => updateForm(data)}
      />
    </div>
  );
}

export default FormRender;

export const getValueOfSpecifedTable = (specifedTable, siteSchema) => {
  const specifedTableFromState = siteSchema?.elementsEfficent?.get(
    specifedTable.id
  );

  const rowIndexOfSpecifedTable = specifedTableFromState?.data.findIndex(
    (row) => parseInt(row?.key) === parseInt(specifedTable?.key)
  );

  return specifedTableFromState.data[rowIndexOfSpecifedTable][
    specifedTable.dataIndex
  ];
};

export const getValuesOfAColumn = (details, siteSchema) => {
  const id = details?.id;
  const dataIndex = details?.dataIndex;

  if (!siteSchema.elementsEfficent) return;
  const specifedTable = Object.assign(siteSchema?.elementsEfficent?.get(id));
  const values = [];
  specifedTable.data.forEach((row) => {
    values.push(Object.assign(row[dataIndex]));
  });
  return values;
};

export const insertTableIntoRedux = (
  siteSchema,
  TablesSchemas,
  addNewElement,
  element
) => {
  if (siteSchema?.elementsEfficent.has(element.id) === false) {
    const payload = {
      type: "table",
      id: element.id,
      nameTable: element.nameTable,
      defaultValues: [...TablesSchemas[element.nameTable].initialData],
      data: [...TablesSchemas[element.nameTable].initialData],
      schema: Object.assign(TablesSchemas[element.nameTable].schema),
      getColumns: element.getColumns,
      footers: TablesSchemas[element.nameTable].footers
        ? [...TablesSchemas[element.nameTable].footers]
        : [],
      generalValidation: TablesSchemas[element.nameTable].generalValidation
    };
    if (TablesSchemas[element.nameTable].visibility?.length > 0) {
      payload.visibility = [...TablesSchemas[element.nameTable]?.visibility];
    }
    addNewElement(payload);
  }
};

export const insertInputIntoRedux = (InputsSchemas, element, addNewElement) => {
  const payload = {
    type: "input",
    id: element.id,
    nameTable: element.nameInput,
    default: Object.assign(InputsSchemas[element.nameInput].data),
    data: Object.assign(InputsSchemas[element.nameInput].data),
    uiSchema: Object.assign(InputsSchemas[element.nameInput].uiSchema),
    schema: Object.assign(InputsSchemas[element.nameInput].schema)
  };

  addNewElement(payload);
};

export const insertHtmlIntoRedux = (element, addNewElement) => {
  const payload = {
    ...element
  };
  addNewElement(payload);
};

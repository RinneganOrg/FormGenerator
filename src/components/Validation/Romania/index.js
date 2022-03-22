export function Validation1(elementsEfficent) {
  //check if the surface of romanian counties is lower than Romania's Surface
  const TableCountries = elementsEfficent.get(1);
  const TableCountiesOfRomania = elementsEfficent.get(4);
  const sumofCountiesSurface = TableCountiesOfRomania.data.reduce(
    (prev, current) => prev + parseInt(current.surface),
    0
  );

  if (TableCountries.data[0].surface < sumofCountiesSurface)
    return {
      error: true,
      errorMessage: `Surface of romania counties is bigger than romania's surface, comparing ${TableCountries.data[0].surface} with ${sumofCountiesSurface}. Elements id: 1 and 4`
    };
  return {
    error: false
  };
}

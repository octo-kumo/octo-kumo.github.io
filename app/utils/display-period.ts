export default (milliseconds: number, significantFigures: number = 2): string => {
  const units = [
    { label: 'ns', value: 1e-6 },
    { label: 'ms', value: 1 },
    { label: 's', value: 1000 },
    { label: 'min', value: 60000 },
    { label: 'h', value: 3600000 },
    { label: 'd', value: 86400000 },
    { label: 'y', value: 31536000000 },
  ];

  let unit = units[0];

  for (const currentUnit of units) {
    if (milliseconds >= currentUnit.value) {
      unit = currentUnit;
    } else {
      break;
    }
  }

  const value = unit.label === 'ns'
    ? Math.round(milliseconds / unit.value).toString()
    : (milliseconds / unit.value).toFixed(significantFigures);
  return `${value} ${unit.label}`;
};
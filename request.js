import { fromJS } from 'immutable';

export const request = fromJS({
  filter: [{ type: 'CAT', hash: 'ABCD45434' }],
  rnf: {
    rows: [
      {
        uid: '1020',
        name: { mode: 'manual', manual: 'RAIN' },
        costs: { mode: 'manual', manual: 10 },
      },
      {
        uid: '2030',
        name: { mode: 'auto', auto: 'TV' },
        costs: { mode: 'auto', auto: 10 },
      },
      {
        uid: '3040',
        name: { mode: 'auto', auto: 'BBC' },
        costs: { mode: 'manual', auto: 10 },
      },
    ],
    columns: [
      { uid: '5060', name: { mode: 'auto', auto: 'Shed.1' } },
      { uid: '6070', name: { mode: 'auto', auto: 'Shed.2' } },
      { uid: '7080', name: { mode: 'auto', auto: 'Shed.3' } },
      { uid: '8090', name: { mode: 'auto', auto: 'Shed.4' } },
    ],
    quantity: {
      // rows/columns
      1020: { 5060: 10, 7080: 12 },
      3040: { 6070: 11, 7080: 4 },
    },
  },
});

export const getColumns = (data) => {
  return data.get('columns');
};

export const getRows = (data) => {
  return data.get('rows');
};

export const getData = (data) => {
  return data.get('quantity');
};

export const getColumnName = (column) => {
  const name = column.get('name');
  return name.get(name.get('mode'));
};

export const getCostsName = (column) => {
  const name = column.get('costs');
  return name.get(name.mode);
};

const HEADER_COLUMN_UID = 'header';
const HEADER_COLUMN_NAME = 'Vehicles';
const COSTS_COLUMN_UID = 'costs';
const COSTS_COLUMN_NAME = 'costs';

export const getColumnsDef = (data) => {
  let columns = getColumns(data);
  columns = columns.unshift(fromJS({
    uid: COSTS_COLUMN_UID,
    name: { mode: 'auto', auto: COSTS_COLUMN_NAME },
  }));
  
  columns = columns.unshift(fromJS({
    uid: HEADER_COLUMN_UID,
    name: { mode: 'auto', auto: HEADER_COLUMN_NAME },
  }));

  return columns.map((column) => {
    return {
      field: column.get('uid'),
      colId: column.get('uid'),
      headerName: getColumnName(column),
    };
  });
};

export const getRowData = (data) => {
  const sectionData = getData(data);
  const columns = getColumns(data);
  const rows = getRows(data);
  console.log('columns', columns);
  console.log('rows', rows);

  return rows.map((row) => {
    const rows = {};
    console.log('r', row);
    row[HEADER_COLUMN_UID] = getColumnName(row);
    row[COSTS_COLUMN_UID] = getCostsName(row);
    columns.map((column, columnIndex) => {
      row[column.uid] = sectionData[row.uid]
        ? sectionData[row.uid][column.uid]
        : '';
    });
    return row;
  });
};

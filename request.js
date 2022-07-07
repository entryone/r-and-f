import { fromJS } from 'immutable';

export const getRnF = (data) => {
  return data.get('rnf');
};

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
  return name.get(name.get('mode'));
};

const HEADER_COLUMN_UID = 'header';
const HEADER_COLUMN_NAME = 'Vehicles';
const HEADER_COLUMN_WIDTH = 300;

const COSTS_COLUMN_UID = 'costs';
const COSTS_COLUMN_NAME = 'costs';
const COSTS_COLUMN_WIDTH = 150;

export const getColumnsDef = (data) => {
  let columns = getColumns(data);
  columns = columns.unshift(
    fromJS({
      width: COSTS_COLUMN_WIDTH,
      uid: COSTS_COLUMN_UID,
      name: { mode: 'auto', auto: COSTS_COLUMN_NAME },
    })
  );

  columns = columns.unshift(
    fromJS({
      width: HEADER_COLUMN_WIDTH,
      uid: HEADER_COLUMN_UID,
      name: { mode: 'auto', auto: HEADER_COLUMN_NAME },
    })
  );

  return columns.map((column) => {
    return {
      width: column.get('width', 150),
      field: column.get('uid'),
      colId: column.get('uid'),
      headerName: getColumnName(column),
    };
  });
};

export const getRowData = (data) => {
  const sectionData = getData(data);
  const columns = getColumns(data);
  let rows = getRows(data);

  

  rows = rows
    .map((row) => {
      let _row = fromJS({});
      _row = _row.set(HEADER_COLUMN_UID, getColumnName(row));
      _row = _row.set(COSTS_COLUMN_UID, getCostsName(row));
      columns.map((column, columnIndex) => {
        _row = _row.set(
          column.get('uid'),
          getValue(data, row.get('uid'), column.get('uid'))
        );
      });
      return _row;
    })
    return rows.toJS()
};

export const getValue = (data, rowUid, columnUid) => {
  return data.getIn(['quantity', rowUid, columnUid]);
};

//MODIFICATORS

export const addRows = (data, newRows) => {
  return data.update('rows', (rows) => {
    return rows.concat(fromJS(newRows));
  });
};

export const addColumn = (data, column) => {
  return data.update('columns', (columns) => {
    return columns.push(fromJS(schedule));
  });
};

export const removeColumn = (data, columnUid) => {
  return data.update('columns', (columns) => {
    return columns.filter(column => column.get('uid') !== columnUid);
  });
};

export const updateValue = (data, rowUid, columnUid, value) => {
  return data.setIn(['quantity', rowUid, columnUid], value);
};

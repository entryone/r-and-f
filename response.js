import { fromJS } from 'immutable';

export const getColumns = (data) => {
  return data.get('columns');
};

export const getRows = (data) => {
  return data.get('rows');
};

export const getData = (data, sectionIndex) => {
  return data.getIn(['sections', sectionIndex, 'data']);
};

export const getColumnName = (column) => {
  const name = column.get('name');
  return name.get(name.get('mode'));
};

const HEADER_COLUMN_UID = 'header';
const HEADER_COLUMN_NAME = 'Vehicles';

export const getColumnsDef = (data) => {
  let columns = getColumns(data);
  columns = columns.unshift(
    fromJS({
      width: 450,
      uid: HEADER_COLUMN_UID,
      name: { mode: 'auto', auto: HEADER_COLUMN_NAME },
    })
  );
  return columns
    .map((column) => {
      return fromJS({
        width: column.get('width', 150),
        field: column.get('uid'),
        colId: column.get('uid'),
        headerName: getColumnName(column),
      });
    })
    .toJS();
};

export const getRowData = (data) => {
  const sectionData = getData(data, 0);
  const columns = getColumns(data);
  const rows = getRows(data);

  return sectionData
    .map((dataRow, rowIndex) => {
      let row = fromJS({});
      row = row.set(HEADER_COLUMN_UID, getColumnName(rows.get(rowIndex)));
      columns.map((column, columnIndex) => {
        row = row.set(column.get('uid'), dataRow.getIn([columnIndex, 'v'], ''));
      });
      return row;
    })
    .toJS();
};

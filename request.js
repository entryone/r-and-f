export const request = {
    filter: [{type: 'CAT', hash: "ABCD45434"}],
    rnf: {
        rows: [
            {uid: "1020", name: {mode: 'manual'}, costs: {mode: 'manual', manual: 10}},
            {uid: "2030", name: {mode: 'auto', auto: "TV"}, costs: {mode: 'auto', auto: 10}},
            {uid: "3040", name: {mode: 'auto', auto: "BBC"}, costs: {mode: 'manual', auto: 10}}
        ],
        columns: [
            {uid: '5060', name: {mode: 'auto', auto: "Shed.1"}},
            {uid: '6070', name: {mode: 'auto', auto: "Shed.2"}},
            {uid: '7080', name: {mode: 'auto', auto: "Shed.3"}},
            {uid: '8090', name: {mode: 'auto', auto: "Shed.4"}}
        ],
        quantity: { // rows/columns
            "1020": {"5060": 10, "7080": 12},
            "3040": {"6070": 11, "7080": 4}
        }
    }
}


export const getColumns = (data) => {
    return data.columns;
  };
  
  export const getRows = (data) => {
    return data.rows;
  };
  
  export const getData = (data) => {
    return data.quantity;
  };
  
  export const getColumnName = (column) => {
    const name = column.name;
    return name[name.mode];
  };
  
  const HEADER_COLUMN_UID = 'header'
  const HEADER_COLUMN_NAME = 'Vehicles'
  
  export const getColumnsDef = (data) => {
    const columns = getColumns(data);
    columns.unshift({
      uid: HEADER_COLUMN_UID,
      name: {mode: 'auto', auto: HEADER_COLUMN_NAME}
    })
    return columns.map((column) => {
      return {
        field: column.uid,
        colId: column.uid,
        headerName: getColumnName(column),
      };
    });
  };
  
  export const getRowData = data => {
    const sectionData = getData(data)
    const columns = getColumns(data);
    const rows = getRows(data);
    console.log('columns', columns)
    console.log('rows', rows)

    return rows.map(row => {
        const rows = {}
        columns.map((column, columnIndex) => {
            row[column.uid] = sectionData[row.uid] ? sectionData[row.uid][column.uid]?.v : ''
        })
        return row
    })
    
    /*return sectionData.map((dataRow, rowIndex) => {
      const row = {}
      row[HEADER_COLUMN_UID] = getColumnName(rows[rowIndex])
      columns.map((column, columnIndex) => {
          row[column.uid] = dataRow[columnIndex]?.v
      })
      return row
    })*/
  };
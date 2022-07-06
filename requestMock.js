import { fromJS } from 'immutable'

export const requestMock = fromJS({
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
      1020: { 5060: 10, 7080: 12 },
      3040: { 6070: 11, 7080: 4 },
    },
  })
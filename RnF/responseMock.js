import { fromJS } from 'immutable'

export const responseMock = fromJS({
  rows: [
    { uid: '12abcd56', name: { mode: 'auto', auto: 'rows.1' } },
    { uid: '23abcd57', name: { mode: 'auto', auto: 'rows.2' } },
    { uid: '34abcd58', name: { mode: 'auto', auto: 'rows.3' } },
  ],
  columns: [
    { uid: '5060', name: { mode: 'auto', auto: 'Shed.1' } },
    { uid: '6070', name: { mode: 'auto', auto: 'Shed.2' } },
    { uid: '6071', name: { mode: 'auto', auto: 'Shed.3' } },
    { uid: '6072', name: { mode: 'auto', auto: 'Shed.4' } },
  ],
  sections: [
    {
      data: [
        [{ v: 10 }, { v: 20 }, { v: 30 }, { v: 40, c: 'lb' }],
        [{ v: 100 }, { v: 200 }, { v: 300 }, { v: 401 }],
        [{ v: 10.8 }, { v: 20.9 }, { v: 30.3 }, { v: 40.1 }],
      ],
    },
  ],
})
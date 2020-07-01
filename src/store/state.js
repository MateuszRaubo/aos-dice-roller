const state = {
  toHitOptions: [
    {
      text: '+2',
      value: '2',
    },
    {
      text: '+3',
      value: '3',
    },
    {
      text: '+4',
      value: '4',
    },
    {
      text: '+5',
      value: '5',
    },
    {
      text: '+6',
      value: '6',
    },
    {
      text: '+7',
      value: '7',
    },
  ],
  hitModOptions: [
    {
      text: '-3',
      value: ['+', '3'],
    },
    {
      text: '-2',
      value: ['+', '2'],
    },
    {
      text: '-1',
      value: ['+', '1'],
    },
    {
      text: '0',
      value: ['+', '0'],
    },
    {
      text: '+1',
      value: ['-', '1'],
    },
    {
      text: '+2',
      value: ['-', '2'],
    },
    {
      text: '+3',
      value: ['-', '3'],
    },
  ],
  hitOn6: [
    {
      text: 'Do nothing',
      value: '0',
    },
    {
      text: '1 extra hit roll',
      value: '1r',
    },
    {
      text: '1 extra hit',
      value: '1h',
    },
    {
      text: '2 extra hits',
      value: '2h',
    },
    {
      text: 'Auto wound',
      value: 'auto',
    },
    {
      text: 'Deal 1 mortal wound instead of normal wound',
      value: '1m',
    },
    {
      text: 'Deal their damage as mortal wound',
      value: 'dm',
    },
  ],
  rerollsOptions: [
    {
      text: 'No',
      value: '0',
    },
    {
      text: 'Hit rolls of 1',
      value: '1',
    }, {
      text: 'Failed hit rolls',
      value: 'miss',
    },
  ],
};

export default state;
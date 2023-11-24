import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'pat4Rf1s2QfBrJ2aE.9076d6c8d2712e4f28eb6f21e8278465e2d7af6c86bf3715793c4319120ddb62' }).base(
  'appgXtQByGQw5vxnL'
);

export default base;
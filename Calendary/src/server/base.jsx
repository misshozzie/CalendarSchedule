import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'pat4Rf1s2QfBrJ2aE.7590d395798a87b333ddd5d7deb553fab50fc58144c8b23a571c00fa88fec7d7' }).base(
  'appgXtQByGQw5vxnL'
);

export default base;
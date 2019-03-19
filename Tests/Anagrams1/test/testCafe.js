


const {Selector} = require('testcafe');
test('Write a word', async (t) =>{
  await t
      .typeText('#input', 'steal')
      .click('#findButton');
  await t
      .expect(Selector('#PostHere').innerText).contains('least slate stale steal');
});



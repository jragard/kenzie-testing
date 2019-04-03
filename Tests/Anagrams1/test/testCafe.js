const {Selector} = require('testcafe');
const inputField = '#input',
    button = '#findButton',
    results = '#results';


test(`Should have a text input element with an ID of "${inputField.replace('#', '')}"`, async (t) => {
  await t
      .expect(Selector(inputField).exists).eql(true, `Page did not contain an html element with an ID of "${inputField.replace('#', '')}"`)
});

test(`Should have an button element with an ID of "${button.replace('#', '')}"`, async (t) => {
  await t
      .expect(Selector(button).exists).eql(true, `Page did not contain an html element with an ID of "${button.replace('#', '')}"`)
});

test(`Should have an html element with an ID of "${results.replace('#', '')}"`, async (t) => {
  await t
      .expect(Selector(results).exists).eql(true, `Page did not contain an html element with an ID of "${results.replace('#', '')}"`)
});

test('Should correctly return anagrams of " "', async (t) =>{
  await t
      .typeText(inputField, ' ')
      .click(button);
  await t
      .expect(Selector(results).innerText).eql('');
});

test('Should correctly return anagrams of "steal"', async (t) =>{
  await t
      .typeText(inputField, 'steal')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('least')
      .expect(Selector(results).innerText).contains('slate')
      .expect(Selector(results).innerText).contains('stale')
      .expect(Selector(results).innerText).contains('steal')
});

test('Should correctly return anagrams of  "help"', async (t) =>{
  await t
      .typeText(inputField, 'help')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('help');
});

test('Should correctly return anagrams of "listen"', async (t) =>{
  await t
      .typeText(inputField, 'listen')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('listen')
      .expect(Selector(results).innerText).contains('silent')
      .expect(Selector(results).innerText).contains('tinsel')
});

test('Should correctly return anagrams of "restful"', async (t) =>{
  await t
      .typeText(inputField, 'restful')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('fluster')
      .expect(Selector(results).innerText).contains('restful')
});

test('Should correctly return anagrams of "forth"', async (t) =>{
  await t
      .typeText(inputField, 'forth')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('forth')
      .expect(Selector(results).innerText).contains('froth')
});

test('Should correctly return anagrams of "dairy"', async (t) =>{
  await t
      .typeText(inputField, 'dairy')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('dairy')
      .expect(Selector(results).innerText).contains('diary')
});

test('Should correctly return anagrams of "reserve"', async (t) =>{
  await t
      .typeText(inputField, 'reserve')
      .click(button);
  await t
      .expect(Selector(results).innerText).contains('reserve')
      .expect(Selector(results).innerText).contains('reverse')
});


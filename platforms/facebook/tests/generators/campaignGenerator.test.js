const campaignGenerator = require('../../generators/campaignGenerator')

test('Generators a name', () => {
  let context = {name: 'hello'}
  campaignGenerator.generateName(context)
  expect(context.campaign_name).toBe('hello_DOOM')
});
const campaignValidator = require('../../validators/campaignValidator')

test('Passes validation', () => {
  let context = {name: 'Doom'}
  let errors = campaignValidator.validate(context)
  expect(errors).toStrictEqual({})
})

test('Validates missing name', () => {
  let context = {}
  let errors = campaignValidator.validate(context)
  expect(errors.name).toBe("reqired");
});
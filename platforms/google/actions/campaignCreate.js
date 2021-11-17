const campaignValidator = require('../validators/campaignValidator')
const campaignGenerator = require('../generators/campaignGenerator')
const campaignStore = require('../stores/campaignStore')

function ValidationException(errors) {
  this.message = 'Validation no good!';
  this.name = 'ValidationException';
  this.errors = errors;
}

module.exports = class campaignCreate{
  static process(context){
    // Validation
    let errors = campaignValidator.validate(context)
    if(Object.keys(errors).length !== 0){
      throw new ValidationException(errors)
    }
    
    // Generate required info
    campaignGenerator.generateName(context)
    campaignGenerator.generateURL(context)
    
    // Precist object
    campaignStore.save(context)
    
    return 'Campaign created!';
  }
}
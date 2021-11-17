module.exports = class campaignValidator{
  static validate(context){
    var errors = {};
    
    // Needs a name
    this.validateName(errors, context)
    
    return errors;
  }

  static validateName(errors, context){
    if (!('name' in context)){
      errors['name'] = 'reqired'
    }
  }

}
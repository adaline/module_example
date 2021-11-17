module.exports = class campaignGenerator{
  static generateName(context){
    context.campaign_name = `${context['name']}_DOOM`
  }

  static generateURL(context){
    context.url = `http://taxfix.de?cname=${encodeURIComponent(context['campaign_name'])}`
  }

}
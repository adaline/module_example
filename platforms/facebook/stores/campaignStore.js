module.exports = class campaignStore{
  static async save(context){
    // ORM model mock
    let campaignRecord = {};

    // Map context fileds to ORM record
    campaignRecord.reference_name = context.name;
    campaignRecord.name = context.campaign_name;
    campaignRecord.url = context.url;
    campaignRecord.metadata = {
      facebook_attribute_x: context.name,
      facebook_attribute_x: context.name
    }

    // Here is where would save to DB, deal with ORM errors etc
    // campaignRecord.save()

    // For now lets just log the resulting record to console
    console.log(campaignRecord)
  }
}
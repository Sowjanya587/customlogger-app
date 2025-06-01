const { getMarketingCloudToken } = require('./services/marketingCloudAuth');

(async () => {
  const token = await getMarketingCloudToken();
  // Now you can use this token for further API calls to Marketing Cloud
})();


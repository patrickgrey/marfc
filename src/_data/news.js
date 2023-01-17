const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  let url = 'http://18.134.178.95/wp-json/wp/v2/news';

  // returning promise

  let data = await EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });

  // console.log(data);

  return data;
};

const request = require('request');
const breed = process.argv.slice(2).join(' ');
const urlReq = 'https://api.thecatapi.com/v1/breeds/search?q=' + encodeURIComponent(breed);

request(urlReq, (error,response,body) => {
  if (response.statusCode === 404) {
    console.log('Hmmmm..I couldn\'t reach requested URL. Lets try again by ckecking our url.');
    return false;
  }
  // console.log(error);
  // console.log(body);
  // console.log(typeof(body));
  // convert string to JSON object > serialization
  const data = JSON.parse(body);
  //Breed not found
  if (Object.keys(body).length === 2) {
    console.log('The requested breed was not found...');
    return false;
  }
  console.log(data[0].description);
});
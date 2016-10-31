var chardet = require('chardet');
var request = require('request');

var targets = [
  'http://yahoo.co.jp',
  'https://saiyo-page.com/hanamaru/',
  'http://charset.7jp.net'
]

targets.forEach(function(url) {
  request.get({
    url: url,
    encoding: null
  },function(error, response, data){
    console.log(chardet.detect(data.slice(0, 1024)) + ': ' + url);
  });
});

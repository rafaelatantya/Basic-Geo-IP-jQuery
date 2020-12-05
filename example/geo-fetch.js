var userIpAddrFinal = "";
var userIPInfo = "";

$.get('https://www.cloudflare.com/cdn-cgi/trace', function (ipData) {

  const userIpAddr = String(ipData).match(/ip=.+/gm); // convert to str and return only "ip=xxx.xxx.xxx.xxx"
  const userIpAddr2 = userIpAddr[0].match(/[^ip=]/gm); //return xxx.xxx.xxx.xxx (array)
  userIpAddrFinal = String(userIpAddr2).replace(/\,/gm, ""); //convert array to str

});

const settings = {
  "async": false,
  "crossDomain": true,
  "url": `https://freegeoip.app/json/${userIpAddrFinal}`,
  "method": "GET"
};

$.ajax(settings).done(function (ipInfo) {
  userIPInfo = ipInfo;
});

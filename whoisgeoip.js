'use strict'
const whois = require('node-xwhois');
 
const host1 = '100percentfedup.com';
//const host2 = '8.8.8.8';
 
whois.geoInit('./geoip/', {
    ip2location: {
        db    : 'ip2location.bin',
        source: ['IP2LOCATION-LITE-DB5.IPV6.BIN', 'IP2LOCATION-LITE-DB5.BIN']
    },
    maxMind  : {city: 'GeoLiteCity.dat',   org: 'GeoIPASNum.dat'  },
    maxMindv6: {city: 'GeoLiteCityv6.dat', org: 'GeoIPASNumv6.dat'},
    maxMind2 : 'GeoLite2-City.mmdb'
})
.then(() => {
    whois.hostInfo(host1)
    .then(data => console.log(`${host1} info:\n`, 
    
    JSON.stringify(data, null, 4)))
    .catch(err => console.log(err));
 
    
})
.catch(err => console.log(err));
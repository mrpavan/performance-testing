import {check} from 'k6';
import http from 'k6/http';

const URL = 'https://dummyjson.com/products/1'
// const SEARCH_URL = 'https://dummyjson.com/products/search?q=phone'


var params = {
    Headers: {
        'Content-Type': 'application/json',
        // 'Authorization':'Bearer your key or bearer tokens for the api endpoint'
    },
};

// Simple Get request for 5 concuerrent in 3 s

export let options = {
    vus: 5,
    duration: '30s'
}


export default function () {
    let res = http.get(URL, params);
    // console.log(res)
    check(res, {
        'is status 200': (r) => r.status ===200
    });
}

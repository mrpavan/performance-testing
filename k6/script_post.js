import {check, sleep} from 'k6';
import http from 'k6/http';

const LOGINURL= 'https://dummyjson.com'

// for Load testing post request to api : 10  concurrent users (vus) for 10 seconds (duration of test) 
export let options = {
    vus: 1,
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% request must complete in 500 ms
        http_req_failed: ['rate<0.1'], //less than 10% of request can fail
    }
};

export default function () {
    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    });


    let headers = {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${ACCESSTOKEN}`,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    }

    let response = http.post(`${LOGINURL}/auth/login`, payload, {headers: headers});
    // console.log(response);

    check(response, {
        'status is 200': (r) => r.status ===200,     
    });

    sleep(1); // wait for 1 secnd before sending another one

}

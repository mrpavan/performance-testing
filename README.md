# Performance-Testing
Performance & Load Testing your web services is crucial with APIs becoming more prevalent in usage and required through testing for handling adhoc and busrt loads thoughout the product lifecycle. K6.io is one such tool from well known opensource team graphna labs that enables basic to advance testing sceraios for the developers to test their API's and identify any potential blockages across the service by writing tests in their well known scripting language 'javascript'.  

1. How to use?
- for mac os with homebrew package manager 
    ```
    brew install k6
    ```

- for linux or debian follow these steps
    ```
    sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
    echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
    sudo apt-get update
    sudo apt-get install k6
    ```
 - refer k6 documentation for additional options [k6](https://k6.io/docs/get-started/installation/)

 2. Get started
 To perform testing on your web application & apis; create new script file for example ***script.js*** and use below sample code  


 ```
    import http from 'k6/http';
    import { sleep } from 'k6';

    export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    }

 ```

3. To run the tests ``` k6 run script.js``` where script.js is the file name in step 2 above.

4. For running multiple users or simultaneous users use ``` k6 run --vus 5 --duration 30s script.js``` this refers to 5 virtual users for the duration of 30 seconds. Add or change numbers based on what you are trying to acheive.

4. Results are displayed upon compeletion with required metrices for users broadly classifed into 2
    - As summary statistics, in an end-of-test summary report.
    - In granular details, with measurements for every data point across test (and timestamps)
5. Sample Result
    ```
    k6 run script.js               

            /\      |‾‾| /‾‾/   /‾‾/   
        /\  /  \     |  |/  /   /  /    
        /  \/    \    |     (   /   ‾‾\  
    /          \   |  |\  \ |  (‾)  | 
    / __________ \  |__| \__\ \_____/ .io

    execution: local
        script: script.js
        output: -

    scenarios: (100.00%) 1 scenario, 5 max VUs, 33s max duration (incl. graceful stop):
            * default: 5 looping VUs for 3s (gracefulStop: 30s)


        ✓ is status 200

        checks.........................: 100.00% ✓ 229       ✗ 0  
        data_received..................: 171 kB  51 kB/s
        data_sent......................: 11 kB   3.2 kB/s
        http_req_blocked...............: avg=5.93ms   min=0s      med=1µs     max=274.66ms p(90)=1µs      p(95)=2µs     
        http_req_connecting............: avg=307.8µs  min=0s      med=0s      max=14.61ms  p(90)=0s       p(95)=0s      
        http_req_duration..............: avg=63.94ms  min=20.68ms med=27.11ms max=631.63ms p(90)=225.53ms p(95)=265.03ms
        { expected_response:true }...: avg=63.94ms  min=20.68ms med=27.11ms max=631.63ms p(90)=225.53ms p(95)=265.03ms
        http_req_failed................: 0.00%   ✓ 0         ✗ 229
        http_req_receiving.............: avg=2.63ms   min=31µs    med=1.69ms  max=150.95ms p(90)=4.16ms   p(95)=4.98ms  
        http_req_sending...............: avg=125.95µs min=25µs    med=85µs    max=3.84ms   p(90)=195µs    p(95)=256.2µs 
        http_req_tls_handshaking.......: avg=4.11ms   min=0s      med=0s      max=192.15ms p(90)=0s       p(95)=0s      
        http_req_waiting...............: avg=61.19ms  min=19.64ms med=24.84ms max=483.35ms p(90)=221.64ms p(95)=264.26ms
        http_reqs......................: 229     68.051105/s
        iteration_duration.............: avg=70.72ms  min=20.83ms med=27.3ms  max=632.3ms  p(90)=230.74ms p(95)=274.83ms
        iterations.....................: 229     68.051105/s
        vus............................: 5       min=5       max=5
        vus_max........................: 5       min=5       max=5


    running (03.4s), 0/5 VUs, 229 complete and 0 interrupted iterations
    default ✓ [======================================] 5 VUs  3s
    ```

6. There are some samples for http methods like get, put, post and one may refer to code in k6 folder of this repo. I have used [dummyjson.com](https://dummyjson.com/) for api requests and response assertions and request url's may be updated to suit your needs before executing the scripts. Feel free to modify and use it as needed.
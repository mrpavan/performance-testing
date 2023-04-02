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

4. For running multiple users or simultaneous users use ``` k6 run --vus 10 --duration 30s script.js``` this refers to 10 users for the duration of 30 seconds. Add or change numbers based on what you are trying to acheive.

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
            script: script_put.js
            output: -

        scenarios: (100.00%) 1 scenario, 1 max VUs, 35s max duration (incl. graceful stop):
                * default: 1 looping VUs for 5s (gracefulStop: 30s)


            ✓ status is 200

            checks.........................: 100.00% ✓ 3        ✗ 0  
            data_received..................: 8.1 kB  1.5 kB/s
            data_sent......................: 854 B   160 B/s
            http_req_blocked...............: avg=38.1ms   min=1µs      med=1µs      max=114.31ms p(90)=91.44ms  p(95)=102.88ms
            http_req_connecting............: avg=5.12ms   min=0s       med=0s       max=15.36ms  p(90)=12.28ms  p(95)=13.82ms 
        ✗ http_req_duration..............: avg=734.85ms min=658.14ms med=707.15ms max=839.25ms p(90)=812.83ms p(95)=826.04ms
            { expected_response:true }...: avg=734.85ms min=658.14ms med=707.15ms max=839.25ms p(90)=812.83ms p(95)=826.04ms
        ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 3  
            http_req_receiving.............: avg=137.33µs min=95µs     med=112µs    max=205µs    p(90)=186.4µs  p(95)=195.7µs 
            http_req_sending...............: avg=270.99µs min=180µs    med=209µs    max=424µs    p(90)=381µs    p(95)=402.49µs
            http_req_tls_handshaking.......: avg=19.12ms  min=0s       med=0s       max=57.38ms  p(90)=45.9ms   p(95)=51.64ms 
            http_req_waiting...............: avg=734.44ms min=657.83ms med=706.76ms max=838.72ms p(90)=812.33ms p(95)=825.52ms
            http_reqs......................: 3       0.563446/s
            iteration_duration.............: avg=1.77s    min=1.65s    med=1.82s    max=1.83s    p(90)=1.83s    p(95)=1.83s   
            iterations.....................: 3       0.563446/s
            vus............................: 1       min=1      max=1
            vus_max........................: 1       min=1      max=1


        running (05.3s), 0/1 VUs, 3 complete and 0 interrupted iterations
        default ✓ [======================================] 1 VUs  5s
    ```

6. There are some samples for http methods like get, put, post and one may refer to code in k6 folder of this repo. I have used [dummyjson.com](https://dummyjson.com/) for api requests and response assertions and request url's may be updated to suit your needs before executing the scripts. Feel free to modify and use it as needed.
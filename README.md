# HNGX STAGE 1 TASK FOR BACKEND TRACK

Takes slack_name and track as a query paramerter and use is to format the json response

Apart from the slack_name and track, the other info are hardcode.
the time and are dynamic, always the current time

## Setup

```bash
git clone https://github.com/jojothomas1515/hngx-stage1.git

cd hngx-stage1

yarn

yarn start
```

# Test

```bash
curl localhost:80/?slack_name=yourname\&track=your_track
```

## response
output should be same as the one below
```json
{
  "slack_name":"yourname",
"current_day":"Friday",
"utc_time":"2023-09-08T06:56:08.302Z",
"track":"your_track",
"github_file_url":"https://github.com/jojothomas1515/hngx-stage1/index.js",
"github_repo_url":"https://github.com/jojothomas1515/hngx-stage1",
"status_code":200
}
```

# FEELING LASY?

Go ahead and test with the hosted version

https://hngx-task1-a8e3.onrender.com/?slack_name=slack_name&track=your_track

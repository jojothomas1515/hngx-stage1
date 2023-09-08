#!/usr/bin/node

import express from "express";

let app = express()

app.get("/api", (req, res, next) => {
  // getting the slack name from the query
  let slackName = req.query.slack_name
  // getting the track from the query param
  let track = req.query.track
  let date = new Date()
  res.json(
    {
      "slack_name": slackName,
      // To get the day name
      "current_day": date.toLocaleString("en-US", { weekday: "long" }),

      "utc_time": date.toISOString(),
      "track": track,
      "github_file_url": "https://github.com/jojothomas1515/hngx-stage1/index.js",
      "github_repo_url": "https://github.com/jojothomas1515/hngx-stage1",
      "status_code": res.statusCode
    }
  )
})
// getting the port from env or defaulting to 80
const port = process.env.PORT | 80
app.listen(port,
  () => {
    console.log(`listening on port ${port}`)
  })



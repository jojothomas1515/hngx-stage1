#!/usr/bin/node

import express from "express";
import dt from "date-and-time";

let app = express()

app.get("/", (req, res, next) => {
  let slackName = req.query.slack_name
  let track = req.query.track
  let date = new Date()
  res.json(
    {
      "slack_name": slackName,
      "current_day": date.toLocaleString("en-US", { weekday: "long" }),
      "utc_time": date.toISOString(),
      "track": track,
      "github_file_url": "https://github.com/jojothomas1515/hngx-stage1/index.js",
      "github_repo_url": "https://github.com/jojothomas1515/hngx-stage1",
    }
  )
})
app.listen(5000)



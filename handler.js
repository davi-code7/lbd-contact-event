const SnsSqsSlq = require("sns-sqs-slq-code7");

("use strict");

module.exports.contactEvent = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  console.log("message:", message);

  const snsSqsSlq = new SnsSqsSlq.default();

  await snsSqsSlq.publishToTopic(
    "sns-process-sent-event",
    JSON.stringify(message),
    "process",
    "event",
    "arn:aws:sns:us-east-1:742104988707:sns-process-sent-event.fifo"
  );
};

import { describeAuthorizationRules } from "jinaga";
import { authorization, model } from "./model";

const postData = describeAuthorizationRules(model, authorization);
const url = process.argv[2];
const bearerToken = process.argv[3];

// POST the authorization rules to the replicator.
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
    "Authorization": `Bearer ${bearerToken}`
  },
  body: postData
}).then(response => {
  if (response.status === 201) {
    console.log("Authorization rules updated.");
  } else {
    console.log(`Error updating authorization rules: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
});
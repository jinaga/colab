import { JinagaBrowser } from "jinaga";

export const j = JinagaBrowser.create({
  httpEndpoint: process.env.REACT_APP_JINAGA_REPLICATOR_URL,
});
import { JinagaBrowser } from "jinaga";

export const j = JinagaBrowser.create({
  httpEndpoint: process.env.JINAGA_REPLICATOR_URL,
});
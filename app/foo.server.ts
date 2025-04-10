import { domainToASCII } from "node:url";

export function fooTest() {
  return domainToASCII("español.com");
}

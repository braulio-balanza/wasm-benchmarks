import { stopRun } from "../../utils/utils.js";
import init, { nbody } from "./pkg/nbody.js"
(async function main() {
    await init()
    await nbody()
    await stopRun({log: "*DONE*"})
})();

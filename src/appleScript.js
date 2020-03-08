const ps = require("child_process");

const F2_1 = "113";
const F2_2 = "120";
const COMMAND = "command down";
const OSASCRIPT = "osascript -e ";

const performOSAScriptCommand = command => {
  const result = ps.execSync(OSASCRIPT + command);
  console.log(result.toString("utf-8"));
};

const targetDisplayModeActivate = () => {
  performOSAScriptCommand(
    `'tell application "System Events" to keystroke ${F2_2} using {${COMMAND}}'`
  );
  console.log(`Performed keystroke COMMAND+F2`);
};

module.exports = {
  targetDisplayModeActivate
};

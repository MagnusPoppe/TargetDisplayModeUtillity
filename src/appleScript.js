const ps = require("child_process");


const performOSAScriptCommand = command => {
  const result = ps.execSync(`osascript -e '${command}'`);
  console.log(result.toString("utf-8"));
};

const targetDisplayModeActivate = () => {
  const cmd = `tell application "System Events" to key code 144 using command down`
  performOSAScriptCommand(cmd)
  console.log(`Performed keystroke COMMAND+F2`);
};

module.exports = {
  targetDisplayModeActivate
};

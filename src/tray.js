const { Menu, Tray, globalShortcut, nativeImage } = require("electron");
const { targetDisplayModeActivate } = require("./appleScript");

const APP_ICON_PATH = "./public/imac.png";
const SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE = "CommandOrControl+F2";

const initiateTrayMenu = () => {
  const trayIcon = nativeImage.createFromPath(APP_ICON_PATH);
  const tray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate([
    {
      click: targetDisplayModeActivate,
      label: "Use iMac as a display",
      type: "normal"
    }
  ]);
  tray.setToolTip("Simple tool for using iMac as a display");
  tray.setContextMenu(contextMenu);
  return tray;
};

const registerKeyboardShortcut = () => {
  const ret = globalShortcut.register(
    SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE,
    targetDisplayModeActivate
  );
  console.log(
    "Registerd shortcut: ",
    SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE,
    ret
  );
};

module.exports = {
  initiateTrayMenu,
  registerKeyboardShortcut
}
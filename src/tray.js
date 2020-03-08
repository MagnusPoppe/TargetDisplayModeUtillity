const { app, Menu, Tray, globalShortcut } = require("electron");
const { targetDisplayModeActivate } = require("./appleScript");

const SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE = "CommandOrControl+F10";
let tray = null;

app.on("ready", () => {
  tray = new Tray("./public/imac.png");
  const contextMenu = Menu.buildFromTemplate([
    {
      click: () => targetDisplayModeActivate(),
      label: "Use iMac as a display",
      type: "normal"
    }
  ]);
  tray.setToolTip("Simple tool for using iMac as a display");
  tray.setContextMenu(contextMenu);

  const ret = globalShortcut.register(
    SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE,
    () => {
      targetDisplayModeActivate();
    }
  );
  console.log("Registerd shortcut: ", SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE, ret);
});

app.on("will-quit", () => {
  // Unregister a shortcut.
  globalShortcut.unregister(SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE);
});

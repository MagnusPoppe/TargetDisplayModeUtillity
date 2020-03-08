const {initiateTrayMenu, registerKeyboardShortcut} = require("./tray.js");

app.on("ready", () => {
    initiateTrayMenu();
    registerKeyboardShortcut();
});


app.on("will-quit", () => {
    globalShortcut.unregister(SHORTCUT_FOR_ACTIVATING_DISPLAY_MODE);
});

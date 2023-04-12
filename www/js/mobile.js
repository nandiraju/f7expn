document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  if (app.device.android) {
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#111");
  } else {
    StatusBar.overlaysWebView(true);
    StatusBar.styleLightContent(); //Use the lightContent statusbar (light text, for dark backgrounds).
  }
  checkAndSetTheme();
  if (navigator.network.connection.type == Connection.NONE) {
    alert(
      "Internet connection required. Please check your connection and try again.",
      null,
      "No Network Connection",
      "Close"
    );
    return;
  } else {
    //deviceReadyStartProcessing();
    //return;
  }
}

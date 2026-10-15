// 12 AM Countdown - Scriptable widget (iPhone Lock Screen + Home Screen, iOS 16+)
// 1) Put your website link below. Tapping the widget opens it.
const SITE_URL = "https://YOUR-SITE.netlify.app";

const now = new Date();
const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
const family = config.widgetFamily || "accessoryRectangular";

const BLUE = new Color("#4f8cff");
const ICE = new Color("#9cc2ff");

const w = new ListWidget();
w.url = SITE_URL;
w.refreshAfterDate = midnight; // ask iOS to rebuild the widget right after midnight

// iOS's own live timer: it ticks every second without the widget being redrawn.
function timer(parent, size, color) {
  const t = parent.addDate(midnight);
  t.applyTimerStyle();
  t.font = Font.boldMonospacedSystemFont(size);
  t.textColor = color;
  t.minimumScaleFactor = 0.5;
  return t;
}

if (family === "accessoryInline") {
  const t = w.addDate(midnight);
  t.applyTimerStyle();
} else if (family === "accessoryCircular") {
  w.addAccessoryWidgetBackground = true;
  const t = timer(w, 13, Color.white());
  t.centerAlignText();
} else if (family === "accessoryRectangular") {
  const label = w.addText("12 AM");
  label.font = Font.mediumSystemFont(10);
  label.textOpacity = 0.7;
  timer(w, 26, Color.white());
  const sub = w.addText("until midnight");
  sub.font = Font.systemFont(9);
  sub.textOpacity = 0.7;
} else {
  // Home Screen sizes (small / medium / large)
  w.backgroundColor = Color.black();
  w.setPadding(14, 14, 14, 14);
  const top = w.addText("12 AM");
  top.font = Font.mediumSystemFont(11);
  top.textColor = ICE;
  top.textOpacity = 0.7;
  w.addSpacer();
  timer(w, family === "small" ? 24 : 40, BLUE);
  w.addSpacer();
  const sub = w.addText("UNTIL MIDNIGHT");
  sub.font = Font.mediumSystemFont(9);
  sub.textColor = ICE;
  sub.textOpacity = 0.6;
}

if (config.runsInWidget) {
  Script.setWidget(w);
} else {
  await w.presentAccessoryRectangular(); // preview inside the Scriptable app
}
Script.complete();

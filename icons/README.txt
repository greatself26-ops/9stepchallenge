12 AM COUNTDOWN - COMPLETE SETUP
================================

WHAT'S INSIDE
  website/                      The site (deploy this folder to Netlify)
  ios-lockscreen-widget/        iPhone lock-screen widget script (for the Scriptable app)

1) DEPLOY THE WEBSITE ON NETLIFY
  - Unzip this file.
  - Go to https://app.netlify.com/drop and log in.
  - Drag the "website" folder onto the page.
  - Open your Netlify link. Done.
  To update later: drag the updated "website" folder onto your site's Deploys tab.

2) YOUR SETTINGS (website/index.html, around line 364)
  MEET_LINK, WHATSAPP_NUMBER and PASSCODE are already filled in.
  Edit them in any text editor, save, and redeploy.
  Note: the passcode is visible to anyone who views the page source.

3) INSTALL THE SITE AS AN APP (use your live https Netlify link)
  - Android (Chrome): tap Install (top right) or menu > Install app.
  - iPhone (Safari): Share > Add to Home Screen.
  - Windows/Mac (Chrome or Edge): Install button or the address-bar install icon.
  If you redeploy, open the installed app twice to see the update.

4) iPHONE LOCK-SCREEN WIDGET (iOS 16+)
  - Install the free "Scriptable" app from the App Store.
  - Open it, tap +, paste the contents of ios-lockscreen-widget/ios-lockscreen-widget.js.
  - Change SITE_URL at the top to your Netlify link.
  - Lock screen: long-press > Customize > Lock Screen > Add Widgets > Scriptable.
  - Tap the widget, choose the script, save.
  It shows a live H:MM:SS countdown to midnight (iOS widgets can't tick a 5-digit number).

5) ANDROID LOCK-SCREEN WIDGET
  A website can't create one; it needs a native Android widget (not included).

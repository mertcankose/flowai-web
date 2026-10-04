// Region-neutral store links: each store sends the visitor to their own country's page.
export const appStore = "https://apps.apple.com/app/id6740488650";
export const playStore = "https://play.google.com/store/apps/details?id=com.mertcankose.flowai";
export const contactEmail = "mertcankose142@gmail.com";
export const apiUrl = "https://flowaiapi.hiddenz.one";
// Opens the installed app straight on a shared song (the app's own URL scheme).
export const appSongLink = (shareId: string) => `myapp://s/${shareId}`;

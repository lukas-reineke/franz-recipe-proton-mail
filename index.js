// Electron really screwed up here. atob and btoa are broken in recent versions, so override them.
window.atob = data => Buffer.from(data, "base64").toString("latin1");
window.btoa = data => Buffer.from(data, "latin1").toString("base64");
module.exports = Franz => Franz;

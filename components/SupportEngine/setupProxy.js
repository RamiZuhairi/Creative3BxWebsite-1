const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/users", {
      target: "https://api.chatengine.io",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/chats", {
      target: "https://api.chatengine.io",
      secure: false,
      changeOrigin: true,
    })
  );
};

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Logged as ${client.user.username}`);
  },
};

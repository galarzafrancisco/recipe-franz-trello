setTimeout(() => {
  if (window.location.href.includes('not-supported.html')) {
    window.location.href = window.location.origin;
  }
}, 10);

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const notifications = document.querySelector('[data-test-id="header-notifications-button"]._3W-zkl4-bnVKzJ');

    Franz.setBadge(0, notifications ? 1 : 0);
  };

  Franz.loop(getMessages);
};

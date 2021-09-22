// process may exit before the timeout object's callback is invoked

module.exports = {
  // timer.ref
  startTimerRef: () => {
    for (let i = 0; i < 5; i += 1) {
      setTimeout(() => {
        console.log("tick ref");
      }, 0);
    }
  },

  // timer.unref
  startTimerUnref: () => {
    for (let i = 0; i < 5; i += 1) {
      const timeout = setTimeout(() => {
        console.log("tick unref");
      }, 0);

      timeout.unref();
    }
  }
};

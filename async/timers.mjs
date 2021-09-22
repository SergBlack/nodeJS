// process may exit before the timeout object's callback is invoked

export function callTimeoutWithRef() {
  // timer.ref
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => {
      console.log("tick ref");
    }, 0);
  }
}

export function callTimeoutWithUnref() {
  // timer.unref
  for (let i = 0; i < 5; i += 1) {
    const timeout = setTimeout(() => {
      console.log("tick unref");
    }, 0);

    timeout.unref();
  }
}

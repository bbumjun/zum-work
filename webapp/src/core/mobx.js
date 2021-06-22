let currentObserver = null;

function observe(fn) {
  currentObserver = fn;
  fn();
  currentObserver = null;
}

function observable(obj) {
  Object.keys(obj).forEach((key) => {
    const getter = Object.getOwnPropertyDescriptor(obj, key).get;
    const propObservers = [];
    let _value = getter ? null : obj[key];

    Object.defineProperty(obj, key, {
      configurable: true,
      get() {
        if (currentObserver && !propObservers.includes(currentObserver)) {
          propObservers.push(currentObserver);
        }
        return _value;
      },
    });

    if (getter) {
      observe(() => {
        _value = getter.call(obj);
        propObservers.forEach((observer) => observer());
      });
    } else {
      Object.defineProperty(obj, key, {
        set(value) {
          _value = value;
          propObservers.forEach((observer) => observer());
        },
      });
    }
  });

  return obj;
}
export { observable };

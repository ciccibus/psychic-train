(function () {
  'use strict';

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var taggedTemplateLiteral = _taggedTemplateLiteral;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  if (typeof process !== "undefined") {
    _HTMLElement = function HTMLElement() {
      classCallCheck(this, HTMLElement);
    };
  }

  var Component =
  /*#__PURE__*/
  function (_HTMLElement2) {
    inherits(Component, _HTMLElement2);

    function Component() {
      classCallCheck(this, Component);

      return possibleConstructorReturn(this, getPrototypeOf(Component).apply(this, arguments));
    }

    return Component;
  }(wrapNativeSuper(HTMLElement));

  function _templateObject2() {
    var data = taggedTemplateLiteral(["\n        <x-profile-item>\n          ", "\n        </x-profile-item>\n        "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = taggedTemplateLiteral(["\n        <li class=\"c-card__event\">\n            <div class=\"c-bar\">\n                <div class=\"c-bar__label\">", "</div>\n                <div class=\"c-bar__container\">\n                    <div class=\"c-bar__value c-bar__value-", "\"></div>\n                </div>\n            </div>\n        </li>\n      "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var html = String.raw;

  var ProfileItem =
  /*#__PURE__*/
  function (_Component) {
    inherits(ProfileItem, _Component);

    function ProfileItem() {
      classCallCheck(this, ProfileItem);

      return possibleConstructorReturn(this, getPrototypeOf(ProfileItem).apply(this, arguments));
    }

    createClass(ProfileItem, null, [{
      key: "template",
      value: function template(state) {
        return html(_templateObject(), state.name, state.value);
      }
    }, {
      key: "component",
      value: function component(state) {
        return html(_templateObject2(), this.template(state));
      }
    }]);

    return ProfileItem;
  }(Component);

  var runtime = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  !(function(global) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = module.exports;

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    runtime.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );

      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  })(
    // In sloppy mode, unbound `this` refers to the global object, fallback to
    // Function constructor if we're in global strict mode. That is sadly a form
    // of indirect eval which violates Content Security Policy.
    (function() {
      return this || (typeof self === "object" && self);
    })() || Function("return this")()
  );
  });

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  // This method of obtaining a reference to the global object needs to be
  // kept identical to the way it is obtained in runtime.js
  var g = (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")();

  // Use `getOwnPropertyNames` because not all browsers support calling
  // `hasOwnProperty` on the global `self` object in a worker. See #183.
  var hadRuntime = g.regeneratorRuntime &&
    Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

  // Save the old regeneratorRuntime in case it needs to be restored later.
  var oldRuntime = hadRuntime && g.regeneratorRuntime;

  // Force reevalutation of runtime.js.
  g.regeneratorRuntime = undefined;

  var runtimeModule = runtime;

  if (hadRuntime) {
    // Restore the original runtime.
    g.regeneratorRuntime = oldRuntime;
  } else {
    // Remove the global property added by runtime.js.
    try {
      delete g.regeneratorRuntime;
    } catch(e) {
      g.regeneratorRuntime = undefined;
    }
  }

  var regenerator = runtimeModule;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var asyncToGenerator = _asyncToGenerator;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isInDom(selector) {
    return document.querySelectorAll(selector).length;
  }

  function storeProfile(profile) {
    console.log("-== STORING PROFILE ==-");
    return localStorage.setItem("profile", JSON.stringify(profile));
  }

  function storeYear(year) {
    console.log("-== STORING Years ==-");
    return localStorage.setItem("years", JSON.stringify(year));
  }

  function toggleCssClass(param, className) {
    if (param instanceof HTMLElement) {
      return param.classList.toggle(className);
    }

    return toConsumableArray(document.querySelectorAll(param)).forEach(function (element) {
      element.classList.toggle(className);
    });
  }

  function generateCharacter() {
    console.log("-== GENERATING PROFILE ==-");
    var profile = [{
      name: "Happiness",
      value: 100
    }, {
      name: "Appearance",
      value: getRandomInt(30, 40)
    }, {
      name: "Fitness",
      value: getRandomInt(30, 40)
    }, {
      name: "Intelligence",
      value: getRandomInt(20, 80)
    }, {
      name: "Musical",
      value: getRandomInt(10, 25)
    }, {
      name: "Painting",
      value: getRandomInt(10, 25)
    }, {
      name: "Social",
      value: getRandomInt(20, 80)
    }];
    storeProfile(profile);
    return profile;
  }

  function generateYear(yearsLength) {
    console.log("-== GENERATING YEAR ==-");
    var year = {
      year: new Date().getFullYear() + yearsLength,
      activities: ["buy milk", "buy cereal"]
    };
    return year;
  }

  function fetchProfile() {
    return _fetchProfile.apply(this, arguments);
  }

  function _fetchProfile() {
    _fetchProfile = asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      var profile;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("-== FETCHING PROFILE ==-");
              _context.t1 = JSON;
              _context.next = 4;
              return localStorage.getItem("profile");

            case 4:
              _context.t2 = _context.sent;
              _context.t0 = _context.t1.parse.call(_context.t1, _context.t2);

              if (_context.t0) {
                _context.next = 8;
                break;
              }

              _context.t0 = generateCharacter();

            case 8:
              profile = _context.t0;
              console.log("-== FETCHED PROFILE ==-");
              return _context.abrupt("return", profile);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _fetchProfile.apply(this, arguments);
  }

  function _templateObject$1() {
    var data = taggedTemplateLiteral(["\n    <nav class=\"c-nav-bar--secondary u-container--wide\">\n        <ul class=\"u-clean-list u-flex u-flex--wrap\">\n            <li class=\"c-button c-button--1-3 c-nav-bar__item-priority c-nav-bar__item-priority-top\">\n                <a href=\"career.html\"><i class=\"far fa-chart-bar fa-2x\"></i> <span class=\"u-visually-hidden\">Your\n                        stats</span></a>\n            </li>\n            <li class=\"c-button c-button--1-3\">\n                <a href=\"#\"><i class=\"fas fa-dollar-sign fa-2x\"></i> <span class=\"u-visually-hidden\">Your finance</span></a>\n            </li>\n            <li class=\"c-button c-button--1-3\">\n                <a href=\"profile.html\"><i class=\"fas fa-user-alt fa-2x\"></i> <span class=\"u-visually-hidden\">Profile</span></a>\n            </li>\n        </ul>\n    </nav>\n    <h1>Your stats</h1>\n    <article id=\"profile\" class=\"c-card\">\n      <header class=\"c-card__header\">Profile</header>\n      <ul class=\"c-card__feed u-clean-list\">\n          <x-profile></x-profile>\n      </ul>\n    </article>\n    "]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var profileContainer = document.getElementById("main");
  var html$1 = String.raw;

  var Profile =
  /*#__PURE__*/
  function (_Component) {
    inherits(Profile, _Component);

    function Profile() {
      classCallCheck(this, Profile);

      return possibleConstructorReturn(this, getPrototypeOf(Profile).apply(this, arguments));
    }

    createClass(Profile, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        fetchProfile().then(function (profile) {
          profile.forEach(function (item) {
            _this.addItem(item);
          });
        });
      }
    }, {
      key: "addItem",
      value: function addItem(item) {
        var element = document.createElement("profile-item");
        element.id = "_".concat(item.name);
        element.innerHTML = ProfileItem.template(item);
        this.appendChild(element);
      }
    }], [{
      key: "component",
      value: function component() {
        return html$1(_templateObject$1());
      }
    }]);

    return Profile;
  }(Component);

  customElements.define("x-profile-item", ProfileItem);
  customElements.define("x-profile", Profile);

  var main = function main() {
    document.body.addEventListener("on-profile", function (_) {
      if (!isInDom("#profile")) {
        profileContainer.innerHTML = Profile.component();
      }
    });
  };

  var DelegatedListener =
  /*#__PURE__*/
  function () {
    function DelegatedListener(delegated) {
      classCallCheck(this, DelegatedListener);

      this.delegated = delegated;
    }

    createClass(DelegatedListener, [{
      key: "handleEvent",
      value: function handleEvent(event) {
        this.delegated["on" + event.type](event, this);
      }
    }]);

    return DelegatedListener;
  }();

  function _templateObject2$1() {
    var data = taggedTemplateLiteral(["\n        <x-main-nav>\n          ", "\n        </x-main-nav>\n        "]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = taggedTemplateLiteral(["\n      <nav class=\"c-nav-bar c-nav-bar--bottom u-container--wide\">\n        <ul class=\"u-clean-list u-flex\">\n          <li class=\"c-nav-bar__item c-button c-button--1-3\">\n            <a href=\"/career\"><i class=\"fab fa-black-tie fa-2x\"></i> <span class=\"u-visually-hidden\">Carrer</span></a>\n          </li>\n          <li class=\"c-nav-bar__item c-button c-nav-bar__item-priority c-button--1-3\">\n            <a href=\"/new-year\"><i class=\"fas fa-user-clock fa-2x\"></i> <span class=\"u-visually-hidden\">News year</span></a>\n          </li>\n          <li class=\"c-nav-bar__item c-button c-button--1-3\">\n            <a href=\"/profile\"><i class=\"fas fa-user-alt fa-2x\"></i> <span class=\"u-visually-hidden\">Profile</span></a>\n          </li>\n        </ul>\n      </nav>\n    "]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var html$2 = String.raw;

  var MainNav =
  /*#__PURE__*/
  function (_Component) {
    inherits(MainNav, _Component);

    function MainNav() {
      classCallCheck(this, MainNav);

      return possibleConstructorReturn(this, getPrototypeOf(MainNav).apply(this, arguments));
    }

    createClass(MainNav, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.addEventListener("click", new DelegatedListener(this));
      }
    }, {
      key: "onclick",
      value: function onclick(e) {
        e.preventDefault();

        if (e.target && e.target.nodeName == "LI") {
          var target = e.target;
          this.toggle(target, "c-nav-bar__item-priority", ".c-nav-bar--bottom .c-nav-bar__item-priority");
          this.sendEvent(target.querySelector("a").pathname.substring(1));
        }
      }
    }, {
      key: "sendEvent",
      value: function sendEvent(eventName) {
        var event = new CustomEvent("on-".concat(eventName));
        document.body.dispatchEvent(event);
      }
    }, {
      key: "toggle",
      value: function toggle(target, className, previousTarget) {
        toggleCssClass(previousTarget, className);
        toggleCssClass(target, className);
      }
    }], [{
      key: "template",
      value: function template() {
        return html$2(_templateObject$2());
      }
    }, {
      key: "component",
      value: function component() {
        return html$2(_templateObject2$1(), this.template());
      }
    }]);

    return MainNav;
  }(Component);

  customElements.define("x-main-nav", MainNav);

  var main$1 = function main() {
    document.getElementById("footer").innerHTML = MainNav.component();
  };

  function fetchYears() {
    return _fetchYears.apply(this, arguments);
  }

  function _fetchYears() {
    _fetchYears = asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      var years, year;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("-== FETCHING YEARS ==-");
              _context.t1 = JSON;
              _context.next = 4;
              return localStorage.getItem("years");

            case 4:
              _context.t2 = _context.sent;
              _context.t0 = _context.t1.parse.call(_context.t1, _context.t2);

              if (_context.t0) {
                _context.next = 8;
                break;
              }

              _context.t0 = [];

            case 8:
              years = _context.t0;
              console.log("-== FETCHED YEARS ==-");
              year = generateYear(years.length);
              years.push(year);
              storeYear(years);
              return _context.abrupt("return", years);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _fetchYears.apply(this, arguments);
  }

  function _templateObject$3() {
    var data = taggedTemplateLiteral(["\n        <section id=\"new-year\">\n            Year\n            <x-new-year></x-new-year>\n         </section>\n    "]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var profileContainer$1 = document.getElementById("main");
  var html$3 = String.raw;

  var NewYear =
  /*#__PURE__*/
  function (_Component) {
    inherits(NewYear, _Component);

    function NewYear() {
      classCallCheck(this, NewYear);

      return possibleConstructorReturn(this, getPrototypeOf(NewYear).apply(this, arguments));
    }

    createClass(NewYear, [{
      key: "connectedCallback",
      value: function connectedCallback() {}
    }], [{
      key: "component",
      value: function component() {
        return html$3(_templateObject$3());
      }
    }]);

    return NewYear;
  }(Component);

  customElements.define("x-new-year", NewYear);

  var main$2 = function main() {
    console.log("HERE");
    document.body.addEventListener("on-new-year", function (_) {
      if (!isInDom("#new-year")) {
        profileContainer$1.innerHTML = NewYear.component();
      }

      fetchYears();
    });
  };

  main$1();
  main();
  main$2();

}());
//# sourceMappingURL=bundle.js.map

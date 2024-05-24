"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createFailingResult: () => createFailingResult,
  createPassingResult: () => createPassingResult,
  toHaveElementsWithText: () => toHaveElementsWithText,
  toMatchInAnyOrder: () => toMatchInAnyOrder
});
module.exports = __toCommonJS(src_exports);

// src/expectations/react.expectations.ts
function createPassingResult() {
  return {
    pass: true,
    message: () => ""
  };
}
function createFailingResult(message) {
  return {
    pass: false,
    message: () => message
  };
}
function toHaveElementsWithText(screen, ...expectedText) {
  try {
    expectedText.forEach((text) => screen.getByText(text));
  } catch (e) {
    return createFailingResult("element was found with a given text");
  }
  return createPassingResult();
}

// src/expectations/array.expectations.ts
function toMatchInAnyOrder(actualArray, expectedArray) {
  try {
    expectedArray.forEach((item) => {
      expect(actualArray).toContainEqual(item);
    });
  } catch (e) {
    return createFailingResult("Items in list are not the same");
  }
  try {
    expect(actualArray.length).toEqual(expectedArray.length);
  } catch (e) {
    return createFailingResult("Lengths do not match");
  }
  return createPassingResult();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createFailingResult,
  createPassingResult,
  toHaveElementsWithText,
  toMatchInAnyOrder
});
//# sourceMappingURL=index.js.map
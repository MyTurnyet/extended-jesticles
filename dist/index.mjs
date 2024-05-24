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

// node_modules/@jest/globals/build/index.js
throw new Error(
  "Do not import `@jest/globals` outside of the Jest test environment"
);

// src/expectations/array.expectations.ts
function toMatchInAnyOrder(actualArray, expectedArray) {
  try {
    expectedArray.forEach((item) => {
      (void 0)(actualArray).toContainEqual(item);
    });
  } catch (e) {
    return createFailingResult("Items in list are not the same");
  }
  try {
    (void 0)(actualArray.length).toEqual(expectedArray.length);
  } catch (e) {
    return createFailingResult("Lengths do not match");
  }
  return createPassingResult();
}
export {
  createFailingResult,
  createPassingResult,
  toHaveElementsWithText,
  toMatchInAnyOrder
};
//# sourceMappingURL=index.mjs.map
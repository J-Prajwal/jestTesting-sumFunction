const sum = require("./sum"); // importing sum function

// test("adds to 1 + 2 to give 3", () => { // test function requires 2 arguments name of function and callback funtion
//   expect(sum(1, 2)).toBe(3); // this line justifies what result is expected from a particular function
// });

describe("Testing sum function", () => {
  test("Adding 1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("Adding two negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  test("Adding two float numbers where the result is integer", () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });
  test("Adding two string numbers where the result is integer", () => {
    expect(sum("1", "2")).toBe(3);
  });
  test("Calling sum with no arguments", () => {
    expect(sum()).toBe("Sum invoked with no arguments");
  });
  test("Calling sum with one argument", () => {
    expect(sum(1)).toBe("Sum function needs atleast 2 arguments");
  });
  test("Adding 3 numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});

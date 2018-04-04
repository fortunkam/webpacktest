var mathUtils = require("../../utils/mathUtil");

describe("MathUtils", function () {
    describe("Add", function () {
        it("contains spec with an expectation", function () {
            expect(mathUtils.add(1,4)).toEqual(5);
        });
    })
});
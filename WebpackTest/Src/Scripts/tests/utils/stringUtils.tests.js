var stringUtils = require("../../utils/stringUtils");

describe("stringUtils", function () {
    describe("sayHello", function () {
        it("returns a greeting", function () {
            expect(stringUtils.sayHello("Matt")).toEqual("Hello Matt");
        });
    })
});
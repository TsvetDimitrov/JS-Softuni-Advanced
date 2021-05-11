let { Repository } = require("./solution.js");
const assert = require('assert');

describe("Tests …", function () {
    describe("add", function () {
        it("Testing add 1", function () {
            let props = properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repo = new Repository(props);
            assert.deepEqual(Repository.name, props);
        });
    });
    // TODO: …
});

import { describe } from "mocha";
import { should, use } from "chai";
import chaiAsPromised from "chai-as-promised";

describe("eslint", () => {
	before(() => {
		should();
		use(chaiAsPromised);
	});

	it("can be imported", async () => {
		const eslint = await import("../eslint.config.js");

		eslint.should.not.be.undefined;
		// const a = importPromise.should.not.be.rejected;

		// const b = importPromise.should.eventually.have.property("default");
		// const c = importPromise.should.eventually.have.property("astro");

		// return Promise.all([a, b, c]);
	});
});

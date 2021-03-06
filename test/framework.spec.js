describe('(Framework) Karma Plugins', () => {
	it('Should expose "expect" globally.', () => {
		assert.ok(expect);
	});

	it('Should expose "should" globally.', () => {
		assert.ok(should);
	});

	it('Should have chai-as-promised helpers.', () => {
		const pass = new Promise(res => res('test'));
		const fail = new Promise((res, rej) => rej());

		return Promise.all([
			expect(pass).to.be.fulfilled,
			expect(fail).to.not.be.fulfilled,
		]);
	});
});

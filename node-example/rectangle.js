module.exports = (x, y, callback) => {
	if (x <= 0 || y <= 0) {
		callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
	} else {
		setTimeout(
			() =>
				callback(null, {
					perimeter: () => {
						return 2 * (x + y);
					},
					area: () => {
						return x * y;
					},
				}),
			2000
		);
	}
};
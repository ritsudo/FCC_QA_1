const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
	test("GET request 10L to /api/convert", function(done) {
		chai
			.request(server)
			.get("/api/convert?input=10L")
			.end(function (err,res) {				
				assert.equal(res.status, 200);
				assert.equal(res.type, "application/json");
				assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
				done();
			});
	});
	test("GET request 32g to /api/convert", function(done) {
		chai
			.request(server)
			.get("/api/convert?input=32g")
			.end(function (err,res) {
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid unit");
				done();
			});
	});
	test("GET request 3/72/4kg to /api/convert", function(done) {
		chai
			.request(server)
			.get("/api/convert?input=3/72/4kg")
			.end(function (err,res) {
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid number");
				done();
			});
	});
	test("GET request 3/72/4kilomegagram to /api/convert", function(done) {
		chai
			.request(server)
			.get("/api/convert?input=3/72/4kilomegagram")
			.end(function (err,res) {
				assert.equal(res.status, 200);
				assert.equal(res.text, "invalid number and unit");
				done();
			});
	});
	test("GET request kg to /api/convert", function(done) {
		chai
			.request(server)
			.get("/api/convert?input=kg")
			.end(function (err,res) {
				assert.equal(res.status, 200);
				assert.equal(res.type, "application/json");
				assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds");
				done();
			});
	});
});

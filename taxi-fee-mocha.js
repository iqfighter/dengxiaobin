//我们考虑出租车计价问题，
// v1: 出租车的运价是每公里0.8元，
// v2: 八公里起会加收50%的每公里运价，计价的时候司机会四舍五入只收块块钱。
// v3: 起步价是两公里以内6块，
// v4: 停车等待时加收每分钟0.25元，

var should = require('should');
var fee = require('./taxi-fee')

describe('Taxi fee', function(){

	it('should be 0 yuan when -1 km distance', function(){
		fee.taxiFee(-1).should.equal(0);
	});

	it('should be 0 yuan when 0 km distance', function(){
		fee.taxiFee(0).should.equal(0);
	});

	it('should be 6 yuan when 1 km distance', function(){
		fee.taxiFee(1).should.equal(6);
	});

	it('should be 6 yuan when 2 km distance', function(){
		fee.taxiFee(2).should.equal(6);
	});

	it('should be 7 yuan when 3 km distance', function(){
		fee.taxiFee(3).should.equal(7);
	});

	it('should be 8 yuan when 5 km distance', function(){
		fee.taxiFee(5).should.equal(8);
	});

	it('should be 16 yuan when 10 km distance', function(){
		fee.taxiFee(10).should.equal(16);
	});

	it('should be 17 yuan when 11 km distance', function(){
		fee.taxiFee(11).should.equal(17);
	});

});
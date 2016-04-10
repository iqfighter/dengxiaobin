//我们考虑出租车计价问题，
// v1: 出租车的运价是每公里0.8元，
// v2: 八公里起会加收50%的每公里运价，计价的时候司机会四舍五入只收块块钱。
// v3: 起步价是两公里以内6块，
// v4: 停车等待时加收每分钟0.25元，

var should = require('should');
var fee = require('./taxi-fee')

describe('Taxi fee', function(){
	it('should be 4 yuan when 5 km distance', function(){
		fee.taxiFee(5).should.equal(4);
	});

	it('should be 10 yuan when 8 km distance', function(){
		fee.taxiFee(8).should.equal(10);
	});

	it('should be 12 yuan when 10 km distance', function(){
		fee.taxiFee(10).should.equal(12);
	});

	it('should be 13 yuan when 11 km distance', function(){
		fee.taxiFee(11).should.equal(13);
	});

});
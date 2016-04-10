//我们考虑出租车计价问题，
// v1: 出租车的运价是每公里0.8元，
// v2: 八公里起会加收50%的每公里运价，计价的时候司机会四舍五入只收块块钱。
// v3: 起步价是两公里以内6块，
// v4: 停车等待时加收每分钟0.25元，

var should = require('should');
var fee = require('./taxi-fee')

describe('Taxi fee', function(){

	it('when -1 km distance should be 0 yuan ', function(){
		fee.taxiFee(-1, 0).should.equal(0);
	});

	it('when 0 km distance should be 0 yuan ', function(){
		fee.taxiFee(0, 0).should.equal(0);
	});

	it('when 1 km distance and 6 minutes should be 6 yuan ', function(){
		fee.taxiFee(1, 6).should.equal(6);
	});

	it('when 2 km distance and 6 minutes should be 6 yuan ', function(){
		fee.taxiFee(2, 6).should.equal(6);
	});

	it('when 3 km distance and 6 minutes should be 8 yuan ', function(){
		fee.taxiFee(3, 6).should.equal(8);
	});

	it('when 8 km distance and 6 minutes should be 15 yuan ', function(){
		fee.taxiFee(8, 6).should.equal(15);
	});

	it('when 10 km distance and 6 minutes should be 17 yuan ', function(){
		fee.taxiFee(10, 6).should.equal(17);
	});

	it('when 11 km distance and 6 minutes should be 18 yuan ', function(){
		fee.taxiFee(11, 6).should.equal(18);
	});

});
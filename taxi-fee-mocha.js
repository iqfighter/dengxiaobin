//我们考虑出租车计价问题，
// v1: 出租车的运价是每公里0.8元，
// v2: 八公里起会加收50%的每公里运价，
// v3: 起步价是两公里以内6块，
// v4: 停车等待时加收每分钟0.25元，
// v5: 最后计价的时候司机会四舍五入只收块块钱。

var should = require('should');
var fee = require('./taxi-fee')

describe('Taxi fee', function(){
	it('should be 4 yuan when 5 km distance', function(){
		fee.taxiFee(5).should.equal(4);
	});
});
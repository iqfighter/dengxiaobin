var base = 0.8;
var threshPrice = 8;

var taxiFee = function(distance){
	var price = base*distance;
	if (distance >= threshPrice){
		price *= 1.5;
	}
	return Math.round(price);
};

module.exports.taxiFee = taxiFee;
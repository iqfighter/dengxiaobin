var priceBase = 0.8;
var priceRatio = 1.5
var priceStart = 6;
var distThresh = 8;
var distStart = 2;

var taxiFee = function(distance){
	if (distance <= 0){
		return (0);
	}

	if (distance <= distStart){
		return (priceStart);
	}

	var price = priceBase*(distance-distStart);
	if (distance >= distThresh){
		price *= priceRatio;
	}
	return Math.round(price+priceStart);
};

module.exports.taxiFee = taxiFee;
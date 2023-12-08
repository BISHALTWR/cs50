function Vector2d(x,y) {
	this.x = typeof x!=='undefined'?x:0; //i.e. 0 if undefined and given value if defined
	this.y = typeof x!=='undefined'?y:0;
}

Vector2d.prototype.addTo = function(vector) {
	if(vector.constructor === Vector2d) {
		this.x += vector.x;
		this.y += vector.y;
	}
	else if (vector.constructor === Number) {
		this.x += vector;
		this.y += vector;
	}
	return this;
}

Vector2d.prototype.multiplyWith = function (v) {
	if (v.constructor === Vector2d) {
		this.x *= v.x;
		this.y *= v.y;
	}
	else if (v.constructor === Number) {
		this.x *= v;
		this.y *= v;
	}
	return this;
};

Vector2d.prototype.copy = function () {
    return new Vector2d(this.x, this.y);
};

Vector2d.prototype.add = function (v) {
	var result = this.copy();
	return result.addTo(v);
};

Vector2d.prototype.multiply = function (v) {
	var result = this.copy();
	return result.multiplyWith(v);
};

Vector2d.prototype.subtractFrom = function (v) {
    if (v.constructor === Vector2d) {
        this.x -= v.x;
        this.y -= v.y;
    }
    else if (v.constructor === Number) {
        this.x -= v;
        this.y -= v;
    }
    return this;
};

Vector2d.prototype.subtract = function (v) {
    var result = this.copy();
    return result.subtractFrom(v);
};

Vector2d.prototype.divideBy = function (v) {
    if (v.constructor === Vector2d) {
        this.x /= v.x;
        this.y /= v.y;
    }
    else if (v.constructor === Number) {
        this.x /= v;
        this.y /= v;
    }
    return this;
};

Vector2d.prototype.divide = function (v) {
    var result = this.copy();
    return result.divideBy(v);
};


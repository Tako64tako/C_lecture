(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PayPal_anywaytopay_300x250_atlas_P_", frames: [[0,0,600,500],[0,1004,600,500],[0,502,600,500]]}
];


// symbols:



(lib._300x250text01 = function() {
	this.initialize(ss["PayPal_anywaytopay_300x250_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250text02 = function() {
	this.initialize(ss["PayPal_anywaytopay_300x250_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x250text03 = function() {
	this.initialize(ss["PayPal_anywaytopay_300x250_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApdK9IAA15IS7AAIAAV5g");
	mask.setTransform(60.55,70.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoyK9QgTAAgNgPQgNgPADgTIDM0MQAEgaAUgRQAUgRAaAAIHoAAQEOAABoB3QAyA5APBCQAQBDgPBcIgFAcQhWG+nhAAIiPAAQgaAAgUARQgRAPgFAWIhLHYg");
	this.shape.setTransform(60.5214,70.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,121.1,140.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqbMUIAA4nIU3AAIAAYng");
	mask.setTransform(66.775,78.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkzMUQgRAAgLgNQgLgNADgQIAViFIkvAAQgTABgNgPQgMgQADgSIDM0NQAEgaAUgQQATgRAaAAIHpAAQENAABpB3QAxA4AQBDQAPBCgOBcQApAXAdAgQBYBkglDBQhMGFmlAAIgmAAQgXAAgRAPQgRAPgEAWIg1FPQgEAWgQAOQgRAPgXAAg");
	this.shape.setTransform(66.779,78.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,133.6,157.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mctxt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._300x250text03();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mctxt3, new cjs.Rectangle(0,0,300,250), null);


(lib.mctxt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._300x250text02();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mctxt2, new cjs.Rectangle(0,0,300,250), null);


(lib.mctxt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._300x250text01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mctxt1, new cjs.Rectangle(0,0,300,250), null);


(lib.mcphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1).p("AgSAEIAlgH");
	this.shape.setTransform(26.6375,10.0625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1).p("AgjAIIBHgP");
	this.shape_1.setTransform(24.925,10.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1).p("AgtAKIBbgT");
	this.shape_2.setTransform(23.975,10.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(11));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AlMnWIGuhiIDrQPImtBig");
	var mask_graphics_13 = new cjs.Graphics().p("AlMnWIGuhiIDrQPImuBig");
	var mask_graphics_14 = new cjs.Graphics().p("AlMnWIGuhiIDrQPImuBig");
	var mask_graphics_15 = new cjs.Graphics().p("AlMnWIGthiIDsQPImtBig");
	var mask_graphics_16 = new cjs.Graphics().p("AlMnWIGuhiIDrQPImtBig");
	var mask_graphics_17 = new cjs.Graphics().p("AlMnWIGthiIDsQPImtBig");
	var mask_graphics_18 = new cjs.Graphics().p("AlMnWIGuhiIDrQPImuBig");
	var mask_graphics_19 = new cjs.Graphics().p("AlMnWIGthiIDsQPImtBig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:-3.6589,y:-19.4304}).wait(1).to({graphics:mask_graphics_13,x:0.5801,y:-5.9123}).wait(1).to({graphics:mask_graphics_14,x:4.6066,y:6.928}).wait(1).to({graphics:mask_graphics_15,x:8.2186,y:18.4466}).wait(1).to({graphics:mask_graphics_16,x:11.235,y:28.0658}).wait(1).to({graphics:mask_graphics_17,x:13.5046,y:35.3034}).wait(1).to({graphics:mask_graphics_18,x:14.9135,y:39.7964}).wait(1).to({graphics:mask_graphics_19,x:15.3911,y:41.3196}).wait(6));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1).p("AhKlcICVK5");
	this.shape_3.setTransform(15.4,54.675);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(12).to({_off:false},0).wait(13));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_7 = new cjs.Graphics().p("AmihKIQFkUIByGpIwFEUg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AnKhKIQFkUIByGpIwFEUg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AnyhKIQGkUIByGpIwFEUg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AoZhKIQFkUIByGpIwFEUg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ao7hKIQFkUIByGpIwFEUg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ao7hKIQFkUIByGpIwFEUg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_7,x:72.5073,y:-11.9741}).wait(1).to({graphics:mask_1_graphics_8,x:68.5423,y:-10.6441}).wait(1).to({graphics:mask_1_graphics_9,x:64.5773,y:-9.3141}).wait(1).to({graphics:mask_1_graphics_10,x:60.6123,y:-7.9841}).wait(1).to({graphics:mask_1_graphics_11,x:56.0738,y:-6.6541}).wait(1).to({graphics:mask_1_graphics_12,x:48.1438,y:-5.3241}).wait(13));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1).p("ACyglIljBL");
	this.shape_4.setTransform(25.65,15.925);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(7).to({_off:false},0).wait(18));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1).p("AAIAjIgPhF");
	this.shape_5.setTransform(44.175,15.625);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).wait(20));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1).p("ADfkaIghicQgHgfgZgOQgWgMgcAGIldBMQgcAGgQAYQgPAYAGAdICkL/QAGAcAYAQQAZAPAcgGIFYhK");
	this.shape_6.setTransform(29.6913,49.1837);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-4.5,70.3,112.3);


(lib.mcminilogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.2,1,1).p("AhpBGIAei+QAAgFAEgCQADgDAEAAIBSAAQAYAAAOAFQAQAFAKANQANARgCAYIgBAGIAAABQgBAIgBAEQgPBChOAAIgZAAQgCAAgCACQgCABgBADIgBAAIgQBnQAAABABABQABABABAAIArAAQADAAACgCQABgBAAgDIAJg4QABgFAEgDQADgEAFAAIAHAAQAiAAAUgPQAUgQAGgfQAEgRgDgMQgEgOgMgKQgBgBgBgBQgFgEgIgDQgLgDgMAAIhDAAQgFAAgEADQgCADgBADIgGAtAhKBpIgdAAQgDAAgCgDAhpBGIgEAbQgBADACACQgCgCAAgDg");
	this.shape.setTransform(11.0901,13.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcminilogo, new cjs.Rectangle(-1,-1,24.2,28.3), null);


(lib.mcgift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1).p("AAEAEIgGgH");
	this.shape.setTransform(23.4,38.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1).p("AAPAPIgege");
	this.shape_1.setTransform(24.6,39.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1).p("AAvAlQgUAAgOgOIg7g7");
	this.shape_2.setTransform(27.775,41.6009);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1).p("ABDgfQAEAKAAALQAAATgNAOQgPAOgUAAQgVAAgNgOIg8g7");
	this.shape_3.setTransform(30.2,41.6009);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1).p("AglgmIgBgBIBqgIQAVgBAPAPQAOAPAAASQAAAUgOAOQgPAOgUAAQgUABgOgOIhIhJIhQAC");
	this.shape_4.setTransform(25.575,40.4977);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1).p("AgRgmIgBgBIBqgIQAVgBAPAPQAOAPAAASQAAAUgOAOQgOAOgUAAQgVABgOgOIhIhJIh4AD");
	this.shape_5.setTransform(23.525,40.4977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1).p("AgCgDIAGAG");
	this.shape_6.setTransform(19.55,34.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1).p("AgPgPIAfAe");
	this.shape_7.setTransform(18.3375,33.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1).p("AgkguQAAAUAOAOIA7A7");
	this.shape_8.setTransform(16.1991,29.9625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1).p("AAghCQgKgEgLAAQgTAAgOAOQgOAOAAAUQAAAVAOANIA7A7");
	this.shape_9.setTransform(16.1991,27.5375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1).p("AAnAmIABABIAIhqQABgVgPgPQgPgOgTAAQgTAAgOAOQgOAPAAAUQgBAUAOAOIBJBIIgCBQ");
	this.shape_10.setTransform(17.3023,32.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(3,1).p("AAnASIABABIAIhqQABgVgPgPQgPgOgTAAQgTAAgOAOQgOAOAAAUQgBAVAOAOIBJBIIgDB4");
	this.shape_11.setTransform(17.3023,34.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},8).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,1).p("AAJmQIkWEYQgPAPAAAUQAAAUAOAOIBrBsIDhjhAh4BkIEhEeQAJAJAOAEQANADALgEQANgFAcgRQAYgPAEgE");
	this.shape_12.setTransform(28.4741,40.0516);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-1.5,68.6,91.8);


(lib.mcctaimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#233782").s().p("AgfAoQAegCAMgFQAPgGAAgOQAAgRgUgBQgTABgeAHIgEgTQAigJATABQAqgBAAAlQAAArhJAGgAgbgoIAGgUQAUAGAkAFIgDAUQgogFgTgGg");
	this.shape.setTransform(139,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#233782").s().p("AgqAzQgJgHgBgLQAAgMAKgHQALgHASAAIAEAAIgChAIAVAAIAAAKIAAAIIAqAAIAAAUIgqAAIABAgQAVAIAVAPIgPARQgMgLgPgIQAAANgHAFQgFAHgOAAQgQAAgLgIgAghAhQAAAHARAAQAFAAACgCQABgCAAgGIAAgEIgIgBQgRAAAAAIg");
	this.shape_1.setTransform(126.05,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#233782").s().p("AAEAnQASgDAJgJQAFgHAAgMQAAgIgEgHQgFgHgJgDQgEAcgMARIAFAFIgPAOIgDgEQgLAIgNAAQgKAAgGgHQgFgHAAgMQgBgeAWgRIgCgdIATAAIABATQAIgCAJgCIABgUIAVABIgCATQASADAKANQAKAMAAAQQgBAogsAJgAgmAWQAAAEACACQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAGAAAGgEQgGgMgDgOQgIAIAAAOgAgOgNQACANAEAIQAEgKADgPQgHABgGADg");
	this.shape_2.setTransform(112.65,16.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#233782").s().p("Ag/AwQANgHAHgOIgDgCIgBACIgQgKIAJgmIgJAAIAAgSIANAAIAEgXIASABIgDAWIAJAAIAMABIgCAWIAFAAQAJgaAFgUIAVAFQgIATgIAUIAagDQgFgKgHgKIARgHQAQAXAFAVIgTAGIgCgGIg0AGIgDgNQgDATgGAPIANAPIgPANIgHgKQgIANgMAJgAgpAGIAFAFQAFgMABgUIgGAAgAAlA+IAAgEIgaAAIAAAEIgSAAIAAg5IBAAAIAAA5gAALAoIAaAAIAAgRIgaAAg");
	this.shape_3.setTransform(99.45,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#233782").s().p("Ag0AKQgEgCAAgFQAAgEAGgEQANgKAQgQQARgQAKgNIASAOQgbAfgWAPIgBACIABACQAhAWAVAWIgTAQQgUgagqgcgAAWgqIALgHQAGAIAFAIIgKAHQgFgJgHgHgAAig4IALgHQAHAHAFAJIgLAHQgEgJgIgHg");
	this.shape_4.setTransform(87,15.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#233782").s().p("AggArQAXgEAHgKIgIABQgMAAgHgHQgHgHAAgLQAAgMAHgIQAIgHANAAIAJACIAAgIIg4AAIAAgSIA3AAIAAgPIAXAAIAAAPIAhAAIAAASIghAAIAAAbIABAIQAAAWgJAMQgMAPgbAFgAgNgCQgDACAAAEQAAAEADACQADADADAAQAEAAADgDQACgCAAgEIAAgCQgCgHgIAAQgDAAgCADg");
	this.shape_5.setTransform(72.8,16.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#233782").s().p("AgJAzQATgNAMgTIhHAAIAAgTIBXAAIANAHQgNAjgeAWgAAfgQIAAAKIg9AAIAAgLQgKAIgLAFIgNgQQAfgNAYgeIASAAQAYAdAgAOIgOAQQgMgFgIgHgAAUgYQgLgJgJgLQgJALgLAJIAoAAIAAAAg");
	this.shape_6.setTransform(59.425,16.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcctaimg, new cjs.Rectangle(52.2,8.9,94.39999999999999,14.499999999999998), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(66.8,78.8,1,1,0,0,0,66.8,78.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,133.6,157.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(60.6,70,1,1,0,0,0,60.6,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,121.1,140.2), null);


(lib.mclogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoyK9QgTAAgNgPQgNgPADgTIDM0MQAEgaAUgRQAUgRAaAAIHoAAQEOAABoB3QAyA5APBCQAQBDgPBcQgXgNgegKIgOgEIgfgIIgggGQg6gJhFAAIl/AAQgNAAgNAGQgdAOgFAfIiePng");
	this.shape.setTransform(15.1303,17.5188,0.25,0.25);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(15.15,17.5,0.25,0.25,0,0,0,60.6,70);
	this.instance.alpha = 0.6992;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.7,19.7,0.25,0.25,0,0,0,66.8,78.8);
	this.instance_1.alpha = 0.6797;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AibHwQgOAAgJgKQgIgLACgNICSukQACgKAJgHQAIgIALAAICkAAQAOAAAIAKQAJALgCAOIiQOTQgDARgOAMQgOAMgRAAg");
	this.shape_1.setTransform(157.756,21.2125,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al3G+QgSABgIgRQgJgQALgOICyj7Ii+orQgFgOAJgNQAJgMAQAAICpAAQAQgBANAKQANALAFAPIBlFPIDsldQAOgWAbABICsAAQASgBAIARQAIAPgKAPIo7M5QgOAUgaAAg");
	this.shape_2.setTransform(101.2471,28.2375,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AleEEQgqgygRhFQgRhFANhKQAXiWBshhQBshhCOAAQBDAAAyAQQA6ASAaAmIAMARIAIgwQACgLAIgHQAIgHALAAICrAAQAOAAAJALQAJAKgCAOIhdJIQgDASgOAMQgNAMgTAAIiaAAQgOAAgJgKQgIgLACgNIAHgwQgVAYgoAZQhPAxhfAAQiOAAhKhXgAh2h2Qg1AugMBIQgMBJAnAuQAnAuBMAAQBJAAA1gtQA1gtANhJQALhJgogvQgoguhKAAQhIAAg2Aug");
	this.shape_3.setTransform(142.0144,25.3438,0.25,0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AleEEQgqgygRhFQgRhFANhKQAXiWBshhQBshhCOAAQBDAAAyAQQA6ASAaAmIAMARIAIgwQACgLAIgHQAIgHALAAICrAAQAOAAAJALQAJAKgCAOIhdJIQgDASgOAMQgNAMgTAAIiaAAQgOAAgJgKQgIgLACgNIAHgwQgVAYgoAZQhPAxhfAAQiOAAhKhXgAh2h2Qg1AugMBIQgMBJAnAuQAnAuBMAAQBJAAA1gtQA1gtANhJQALhJgogvQgoguhKAAQhIAAg2Aug");
	this.shape_4.setTransform(78.3269,25.3438,0.25,0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmRHwQgOAAgJgKQgIgLACgNICQuTQADgSAOgMQAOgMASAAIFkAAQBaAABCAYQBDAWAmAtQBFBSgYCVQg1FTlhAAIhwAAQgTAAgOALQgOAMgCASIgnD4QgDARgOAMQgOAMgSAAgAg4kiQgJAIgCAKIgmDwIA2AAQBfAAAngQQBAgbANhWQALhCgcghQgVgYgtgIQgbgEg/gBIgYAAQgLAAgIAHg");
	this.shape_5.setTransform(58.391,21.2125,0.25,0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmRHwQgOAAgJgKQgIgLACgNICQuTQADgSAOgMQAOgMASAAIFkAAQBaAABCAYQBCAWAmAtQBGBSgYCVQg1FTlhAAIhwAAQgTAAgOALQgOAMgCASIgpEEQgCANgKAHQgKAJgNAAgAg5kiQgIAIgCAKIgmDwIA2AAQBfAAAngQQBAgbANhWQALhCgcghQgVgYgtgIQgbgEg/gBIgYAAQgMAAgIAHg");
	this.shape_6.setTransform(122.0781,21.2125,0.25,0.25);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.3,4.95,0.0625,0.0625,0,0,0,324.8,79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mclogo, new cjs.Rectangle(0,0,162.4,39.4), null);


(lib.mchand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_218 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(218).call(this.frame_218).wait(1));

	// Layer_22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_126 = new cjs.Graphics().p("AlYinIG6lsICkL/QAGAcAYAQQAZAQAcgHIhBDzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_graphics_126,x:0.75,y:39.55}).wait(93));

	// Layer_21
	this.instance = new lib.mcgift();
	this.instance.parent = this;
	this.instance.setTransform(45,60.25,1,1,29.029,0,0,63.9,67.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({regX:64,rotation:0,x:45.05,y:60.2},10,cjs.Ease.cubicOut).wait(44).to({regX:63.9,rotation:29.029,x:45,y:60.25},5,cjs.Ease.sineIn).to({_off:true},1).wait(33));

	// Layer_20 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_71 = new cjs.Graphics().p("AoCJuIAAz2IQFAAIhmFpImxhtQgNgDgLAGQgLAHgEANIiyLDQgDANAHALQAGALANAEIDEAxIgDAYQg3AhgmA0QgoA1gQBBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_1_graphics_71,x:57.075,y:29.025}).wait(148));

	// Layer_18
	this.instance_1 = new lib.mcphone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.4,37.55,1,1,25.4542,0,0,34.4,46.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({rotation:0,x:44.8,y:16.75},10,cjs.Ease.cubicOut).wait(104).to({rotation:25.4542,x:70.4,y:37.55},5,cjs.Ease.sineIn).to({_off:true},1).wait(28));

	// Layer_17
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1).p("AgJgCIAOADQACABADAB");
	this.shape.setTransform(83.0875,8.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1).p("AgTgEIAiAHQADABACAB");
	this.shape_1.setTransform(82.05,8.1625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1).p("AgCA7IgdgHQgJgDgFgIQgFgIACgJIARhAQACgJAIgFQAIgFAKACIAvAMQADABACAB");
	this.shape_2.setTransform(79.1083,13.0833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1).p("AAyAXIgGAVQAAABAAABQgDAIgHAEQgIAFgJgCIgwgMQgJgDgFgIQgFgIACgJIARhAQACgJAIgFQAIgFAKACIAvAMQADABACAB");
	this.shape_3.setTransform(79.1333,13.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1).p("AA2gLIgOA3QgCAJgJAFQgIAFgJgCIgwgMQgJgDgFgIQgFgIADgJIAQhAQADgJAIgFQAIgFAJACIAwAMQADABACAB");
	this.shape_4.setTransform(79.5708,13.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1).p("AA3gUIgRBAQgCAJgIAFQgIAFgJgCIgwgMQgJgDgFgIQgFgIACgJIARhAQACgJAIgFQAIgFAKACIAvAMQAJADAFAIQAFAIgCAJg");
	this.shape_5.setTransform(79.725,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},26).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},161).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(21));

	// Layer_16 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("AiJL1IDdwSIGwBbIjeQSg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AiELZIDdwSIGvBbIjeQTg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AiAK9IDdwSIGvBcIjdQSg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Ah8KhIDdwSIGwBcIjeQSg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Ah4KFIDdwSIGwBcIjeQSg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Ah0JpIDdwSIGwBcIjeQSg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AhwJNIDdwSIGwBcIjeQSg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AhwJNIDdwSIGwBcIjeQSg");
	var mask_2_graphics_192 = new cjs.Graphics().p("Ah1JvIDdwTIGwBcIjeQSg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Ah6KQIDdwSIGwBcIjeQSg");
	var mask_2_graphics_194 = new cjs.Graphics().p("Ah/KyIDdwTIGwBcIjeQSg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AiELTIDdwSIGwBcIjeQSg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AiJL1IDdwSIGwBbIjeQSg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:51.6156,y:84.8481}).wait(1).to({graphics:mask_2_graphics_30,x:52.0326,y:82.057}).wait(1).to({graphics:mask_2_graphics_31,x:52.4493,y:79.2653}).wait(1).to({graphics:mask_2_graphics_32,x:52.866,y:76.4737}).wait(1).to({graphics:mask_2_graphics_33,x:53.2826,y:73.682}).wait(1).to({graphics:mask_2_graphics_34,x:53.6993,y:70.8903}).wait(1).to({graphics:mask_2_graphics_35,x:54.1156,y:68.0981}).wait(156).to({graphics:mask_2_graphics_191,x:54.1156,y:68.0981}).wait(1).to({graphics:mask_2_graphics_192,x:53.616,y:71.4487}).wait(1).to({graphics:mask_2_graphics_193,x:53.116,y:74.7987}).wait(1).to({graphics:mask_2_graphics_194,x:52.616,y:78.1487}).wait(1).to({graphics:mask_2_graphics_195,x:52.116,y:81.4987}).wait(1).to({graphics:mask_2_graphics_196,x:51.6156,y:84.8481}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer_15
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1).p("AggCEIBBkH");
	this.shape_6.setTransform(77.525,43.775);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(29).to({_off:false},0).to({_off:true},168).wait(22));

	// Layer_14 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("AhgHcIDdwSIGwBbIjeQSg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AhwHcIDdwSIGwBbIjeQSg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AiBHcIDdwSIGwBbIjeQSg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AiRHcIDdwSIGvBbIjeQSg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AiiHcIDdwSIGwBbIjeQSg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AizHcIDdwSIGwBbIjeQSg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AjDHcIDdwSIGvBbIjdQSg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AjDHcIDdwSIGvBbIjdQSg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AivHcIDdwSIGvBbIjeQSg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AibHcIDdwSIGvBbIjeQSg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AiHHcIDcwSIGwBbIjeQSg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AhzHcIDcwSIGwBbIjeQSg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AhgHcIDdwSIGwBbIjeQSg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:55.7203,y:-49.5481}).wait(1).to({graphics:mask_3_graphics_30,x:54.0581,y:-37.9397}).wait(1).to({graphics:mask_3_graphics_31,x:52.3956,y:-26.3314}).wait(1).to({graphics:mask_3_graphics_32,x:50.7331,y:-14.7231}).wait(1).to({graphics:mask_3_graphics_33,x:49.0706,y:-3.1147}).wait(1).to({graphics:mask_3_graphics_34,x:47.4081,y:8.4936}).wait(1).to({graphics:mask_3_graphics_35,x:45.7453,y:20.1019}).wait(156).to({graphics:mask_3_graphics_191,x:45.7453,y:20.1019}).wait(1).to({graphics:mask_3_graphics_192,x:47.7406,y:6.1719}).wait(1).to({graphics:mask_3_graphics_193,x:49.7356,y:-7.7581}).wait(1).to({graphics:mask_3_graphics_194,x:51.7306,y:-21.6881}).wait(1).to({graphics:mask_3_graphics_195,x:53.7256,y:-35.6181}).wait(1).to({graphics:mask_3_graphics_196,x:55.7203,y:-49.5481}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer_13
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1).p("AhSFJIClqR");
	this.shape_7.setTransform(57.7,25);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(29).to({_off:false},0).to({_off:true},168).wait(22));

	// Layer_12 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_30 = new cjs.Graphics().p("AhgHcIDdwSIGwBbIjeQSg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AhwHcIDdwSIGwBbIjeQSg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AiBHcIDdwSIGwBbIjeQSg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AiRHcIDdwSIGvBbIjeQSg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AiiHcIDdwSIGwBbIjeQSg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AizHcIDdwSIGwBbIjeQSg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AjDHcIDdwSIGvBbIjdQSg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AjDHcIDdwSIGvBbIjdQSg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AivHcIDdwSIGvBbIjeQSg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AibHcIDdwSIGvBbIjeQSg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AiHHcIDcwSIGwBbIjeQSg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AhzHcIDcwSIGwBbIjeQSg");
	var mask_4_graphics_195 = new cjs.Graphics().p("AhgHcIDdwSIGwBbIjeQSg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_4_graphics_30,x:55.7203,y:-49.5481}).wait(1).to({graphics:mask_4_graphics_31,x:54.0581,y:-37.9397}).wait(1).to({graphics:mask_4_graphics_32,x:52.3956,y:-26.3314}).wait(1).to({graphics:mask_4_graphics_33,x:50.7331,y:-14.7231}).wait(1).to({graphics:mask_4_graphics_34,x:49.0706,y:-3.1147}).wait(1).to({graphics:mask_4_graphics_35,x:47.4081,y:8.4936}).wait(1).to({graphics:mask_4_graphics_36,x:45.7453,y:20.1019}).wait(154).to({graphics:mask_4_graphics_190,x:45.7453,y:20.1019}).wait(1).to({graphics:mask_4_graphics_191,x:47.7406,y:6.1719}).wait(1).to({graphics:mask_4_graphics_192,x:49.7356,y:-7.7581}).wait(1).to({graphics:mask_4_graphics_193,x:51.7306,y:-21.6881}).wait(1).to({graphics:mask_4_graphics_194,x:53.7256,y:-35.6181}).wait(1).to({graphics:mask_4_graphics_195,x:55.7203,y:-49.5481}).wait(1).to({graphics:null,x:0,y:0}).wait(23));

	// Layer_11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1).p("ABuGaIjDgxQgNgEgGgLQgHgLADgNICxrDQAEgNALgHQALgGANAD");
	this.shape_8.setTransform(44.1667,30.2026);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(30).to({_off:false},0).to({_off:true},166).wait(23));

	// Layer_10 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_25 = new cjs.Graphics().p("Ag8BpIBbmvIQTDeIhcGvg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AhwBpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AikBpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AjYBpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AkMBpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_30 = new cjs.Graphics().p("Ak/BpIBbmvIQSDeIhbGvg");
	var mask_5_graphics_195 = new cjs.Graphics().p("Ak/BpIBbmvIQSDeIhbGvg");
	var mask_5_graphics_196 = new cjs.Graphics().p("Aj/BpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_197 = new cjs.Graphics().p("Ai+BpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_198 = new cjs.Graphics().p("Ah9BpIBcmvIQSDeIhcGvg");
	var mask_5_graphics_199 = new cjs.Graphics().p("Ag8BpIBbmvIQTDeIhcGvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_5_graphics_25,x:107.3731,y:0.2046}).wait(1).to({graphics:mask_5_graphics_26,x:102.1887,y:-2.4653}).wait(1).to({graphics:mask_5_graphics_27,x:97.0037,y:-5.1353}).wait(1).to({graphics:mask_5_graphics_28,x:91.8187,y:-7.8053}).wait(1).to({graphics:mask_5_graphics_29,x:86.6337,y:-10.4753}).wait(1).to({graphics:mask_5_graphics_30,x:81.4481,y:-13.1454}).wait(165).to({graphics:mask_5_graphics_195,x:81.4481,y:-13.1454}).wait(1).to({graphics:mask_5_graphics_196,x:87.9299,y:-9.8078}).wait(1).to({graphics:mask_5_graphics_197,x:94.4112,y:-6.4703}).wait(1).to({graphics:mask_5_graphics_198,x:100.8924,y:-3.1328}).wait(1).to({graphics:mask_5_graphics_199,x:107.3731,y:0.2046}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_9
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1).p("AjkhJIGxBtQANADAGALQAHAMgDAM");
	this.shape_9.setTransform(77.8833,-3.3);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(25).to({_off:false},0).to({_off:true},175).wait(19));

	// Layer_8 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_22 = new cjs.Graphics().p("ABkHcIDewSIGvBbIjeQSg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AA7HcIDewSIGwBbIjeQSg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AAcHcIDdwSIGwBbIjeQSg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AAEHnIDewTIGwBcIjeQSg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AgMIiIDdwSIGwBcIjeQSg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AgYJKIDdwSIGwBcIjeQSg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AgfJjIDdwSIGwBbIjeQTg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AgiJvIDdwSIGwBcIjeQSg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AgjJ0IDdwSIGvBbIjeQTg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AgkJ0IDdwSIGwBcIjeQSg");
	var mask_6_graphics_194 = new cjs.Graphics().p("AgkJ0IDdwSIGwBcIjeQSg");
	var mask_6_graphics_195 = new cjs.Graphics().p("AgQIwIDdwSIGwBcIjeQSg");
	var mask_6_graphics_196 = new cjs.Graphics().p("AACHsIDewTIGwBcIjeQSg");
	var mask_6_graphics_197 = new cjs.Graphics().p("AAWHcIDewSIGwBbIjeQSg");
	var mask_6_graphics_198 = new cjs.Graphics().p("AApHcIDewSIGwBbIjeQSg");
	var mask_6_graphics_199 = new cjs.Graphics().p("AA9HcIDewSIGvBbIjdQSg");
	var mask_6_graphics_200 = new cjs.Graphics().p("ABQHcIDewSIGwBbIjeQSg");
	var mask_6_graphics_201 = new cjs.Graphics().p("ABkHcIDewSIGvBbIjeQSg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_6_graphics_22,x:75.3406,y:-8.4519}).wait(1).to({graphics:mask_6_graphics_23,x:71.2852,y:20.0498}).wait(1).to({graphics:mask_6_graphics_24,x:68.1266,y:42.247}).wait(1).to({graphics:mask_6_graphics_25,x:65.753,y:57.8385}).wait(1).to({graphics:mask_6_graphics_26,x:64.0522,y:63.8146}).wait(1).to({graphics:mask_6_graphics_27,x:62.9121,y:67.8206}).wait(1).to({graphics:mask_6_graphics_28,x:62.2206,y:70.2505}).wait(1).to({graphics:mask_6_graphics_29,x:61.8655,y:71.4983}).wait(1).to({graphics:mask_6_graphics_30,x:61.7347,y:71.958}).wait(1).to({graphics:mask_6_graphics_31,x:61.7156,y:72.0231}).wait(163).to({graphics:mask_6_graphics_194,x:61.7156,y:72.0231}).wait(1).to({graphics:mask_6_graphics_195,x:63.6624,y:65.1844}).wait(1).to({graphics:mask_6_graphics_196,x:65.6088,y:58.3451}).wait(1).to({graphics:mask_6_graphics_197,x:67.5553,y:46.2623}).wait(1).to({graphics:mask_6_graphics_198,x:69.5017,y:32.5838}).wait(1).to({graphics:mask_6_graphics_199,x:71.4481,y:18.9052}).wait(1).to({graphics:mask_6_graphics_200,x:73.3945,y:5.2266}).wait(1).to({graphics:mask_6_graphics_201,x:75.3406,y:-8.4519}).wait(1).to({graphics:null,x:0,y:0}).wait(17));

	// Layer_7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1).p("AiBHKIDJk7QAqhAALg1QAKgugMg2IhBl/");
	this.shape_10.setTransform(85.7076,86.05);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(22).to({_off:false},0).to({_off:true},180).wait(17));

	// Layer_6 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_18 = new cjs.Graphics().p("AjNOQIDdwSIGvBcIjeQSg");
	var mask_7_graphics_19 = new cjs.Graphics().p("Ai5NPIDdwSIGwBcIjeQSg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AikMOIDdwSIGvBcIjdQSg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AiQLNIDdwSIGwBcIjeQSg");
	var mask_7_graphics_22 = new cjs.Graphics().p("Ah7KMIDdwSIGwBbIjeQTg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AhnJLIDdwSIGwBbIjeQTg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AhSIKIDdwSIGwBbIjeQTg");
	var mask_7_graphics_25 = new cjs.Graphics().p("Ag+HcIDdwSIGwBbIjeQSg");
	var mask_7_graphics_199 = new cjs.Graphics().p("Ag+HcIDdwSIGwBbIjeQSg");
	var mask_7_graphics_200 = new cjs.Graphics().p("AhWIUIDdwSIGwBcIjeQSg");
	var mask_7_graphics_201 = new cjs.Graphics().p("AhtJgIDcwSIGwBcIjeQSg");
	var mask_7_graphics_202 = new cjs.Graphics().p("AiFKsIDcwSIGwBcIjeQSg");
	var mask_7_graphics_203 = new cjs.Graphics().p("AidL4IDdwSIGvBcIjeQSg");
	var mask_7_graphics_204 = new cjs.Graphics().p("Ai1NEIDdwSIGvBcIjeQSg");
	var mask_7_graphics_205 = new cjs.Graphics().p("AjNOQIDdwSIGvBcIjeQSg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_7_graphics_18,x:44.7406,y:100.3731}).wait(1).to({graphics:mask_7_graphics_19,x:46.7945,y:93.8701}).wait(1).to({graphics:mask_7_graphics_20,x:48.8481,y:87.3665}).wait(1).to({graphics:mask_7_graphics_21,x:50.9017,y:80.8629}).wait(1).to({graphics:mask_7_graphics_22,x:52.9553,y:74.3594}).wait(1).to({graphics:mask_7_graphics_23,x:55.0088,y:67.8558}).wait(1).to({graphics:mask_7_graphics_24,x:57.0624,y:61.3522}).wait(1).to({graphics:mask_7_graphics_25,x:59.1156,y:52.9481}).wait(174).to({graphics:mask_7_graphics_199,x:59.1156,y:52.9481}).wait(1).to({graphics:mask_7_graphics_200,x:56.7201,y:62.4362}).wait(1).to({graphics:mask_7_graphics_201,x:54.3243,y:70.0237}).wait(1).to({graphics:mask_7_graphics_202,x:51.9285,y:77.6112}).wait(1).to({graphics:mask_7_graphics_203,x:49.5326,y:85.1987}).wait(1).to({graphics:mask_7_graphics_204,x:47.1368,y:92.7862}).wait(1).to({graphics:mask_7_graphics_205,x:44.7406,y:100.3731}).wait(1).to({graphics:null,x:0,y:0}).wait(13));

	// Layer_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(3,1).p("AChmrIiJIYQAAABAAAAQgYBSgeAvQgVAhgiAeQgJAIgKAIQgcAWgMAPQgVAYAHAVQAHATAWAHQAWAGAPgMQASgPgFgh");
	this.shape_11.setTransform(84.5763,46.9112);
	this.shape_11._off = true;

	var maskedShapeInstanceList = [this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(18).to({_off:false},0).to({_off:true},188).wait(13));

	// Layer_5 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_13 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_14 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_15 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_16 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_17 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_18 = new cjs.Graphics().p("AAUoIIG5gXIA3QoIm5AXg");
	var mask_8_graphics_201 = new cjs.Graphics().p("AAUlRIG5gXIA3QoIm5AYg");
	var mask_8_graphics_202 = new cjs.Graphics().p("AAUkSIG5gXIA3QoIm5AXg");
	var mask_8_graphics_203 = new cjs.Graphics().p("AAUjUIG5gXIA3QoIm5AYg");
	var mask_8_graphics_204 = new cjs.Graphics().p("AAUiVIG5gXIA3QoIm5AXg");
	var mask_8_graphics_205 = new cjs.Graphics().p("AAUhXIG5gXIA3QoIm5AYg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_8_graphics_13,x:51.6235,y:-9.1005}).wait(1).to({graphics:mask_8_graphics_14,x:51.6237,y:-0.2605}).wait(1).to({graphics:mask_8_graphics_15,x:51.6237,y:8.5795}).wait(1).to({graphics:mask_8_graphics_16,x:51.6237,y:17.4195}).wait(1).to({graphics:mask_8_graphics_17,x:51.6237,y:26.2595}).wait(1).to({graphics:mask_8_graphics_18,x:51.6235,y:35.0995}).wait(183).to({graphics:mask_8_graphics_201,x:51.6235,y:72.7501}).wait(1).to({graphics:mask_8_graphics_202,x:51.6237,y:79.0005}).wait(1).to({graphics:mask_8_graphics_203,x:51.6237,y:85.2505}).wait(1).to({graphics:mask_8_graphics_204,x:51.6237,y:91.5005}).wait(1).to({graphics:mask_8_graphics_205,x:51.6235,y:97.7501}).wait(1).to({graphics:null,x:0,y:0}).wait(13));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,1).p("AAxDWIgjlzQgDgZgOgPQgPgOgUgCQgFAAgFAB");
	this.shape_12.setTransform(71.725,62.7208);
	this.shape_12._off = true;

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(13).to({_off:false},0).to({_off:true},193).wait(13));

	// mask1 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("AjQSSIBjwmIG2ApIhjQmg");
	var mask_9_graphics_1 = new cjs.Graphics().p("AjQSRIBjwlIG2ApIhjQlg");
	var mask_9_graphics_2 = new cjs.Graphics().p("AjQSQIBjwmIG2ApIhjQmg");
	var mask_9_graphics_3 = new cjs.Graphics().p("AjQSMIBjwmIG3ApIhjQmg");
	var mask_9_graphics_4 = new cjs.Graphics().p("AjPSEIBiwmIG3ApIhjQmg");
	var mask_9_graphics_5 = new cjs.Graphics().p("AjPR2IBjwmIG3ApIhjQmg");
	var mask_9_graphics_6 = new cjs.Graphics().p("AjORiIBjwmIG3ApIhjQmg");
	var mask_9_graphics_7 = new cjs.Graphics().p("AjMRGIBjwmIG3ApIhjQmg");
	var mask_9_graphics_8 = new cjs.Graphics().p("AjKQhIBjwlIG3AoIhjQmg");
	var mask_9_graphics_9 = new cjs.Graphics().p("AjHPxIBjwlIG2ApIhjQlg");
	var mask_9_graphics_10 = new cjs.Graphics().p("AjEO1IBjwlIG3ApIhjQlg");
	var mask_9_graphics_11 = new cjs.Graphics().p("AjANsIBjwlIG3ApIhjQlg");
	var mask_9_graphics_12 = new cjs.Graphics().p("Ai7MUIBjwkIG3ApIhjQkg");
	var mask_9_graphics_13 = new cjs.Graphics().p("Ai1KtIBjwlIG2ApIhjQlg");
	var mask_9_graphics_194 = new cjs.Graphics().p("Ai1JxIBjwlIG2ApIhjQlg");
	var mask_9_graphics_195 = new cjs.Graphics().p("AimH+IBjwkIG2ApIhjQkg");
	var mask_9_graphics_196 = new cjs.Graphics().p("AibH+IBjwkIG3ApIhjQkg");
	var mask_9_graphics_197 = new cjs.Graphics().p("AiSH+IBjwkIG2ApIhiQkg");
	var mask_9_graphics_198 = new cjs.Graphics().p("AiMH+IBjwkIG3ApIhjQkg");
	var mask_9_graphics_199 = new cjs.Graphics().p("AiIH+IBjwkIG3ApIhjQkg");
	var mask_9_graphics_200 = new cjs.Graphics().p("AiFH+IBjwkIG2ApIhiQkg");
	var mask_9_graphics_201 = new cjs.Graphics().p("AiEH+IBjwkIG3ApIhjQkg");
	var mask_9_graphics_202 = new cjs.Graphics().p("AiDH+IBjwkIG2ApIhjQkg");
	var mask_9_graphics_203 = new cjs.Graphics().p("AiDH+IBjwkIG2ApIhjQkg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:32.9293,y:121.0666}).wait(1).to({graphics:mask_9_graphics_1,x:32.9306,y:121.0446}).wait(1).to({graphics:mask_9_graphics_2,x:32.9392,y:120.8901}).wait(1).to({graphics:mask_9_graphics_3,x:32.9626,y:120.4709}).wait(1).to({graphics:mask_9_graphics_4,x:33.008,y:119.6545}).wait(1).to({graphics:mask_9_graphics_5,x:33.083,y:118.3086}).wait(1).to({graphics:mask_9_graphics_6,x:33.1948,y:116.3008}).wait(1).to({graphics:mask_9_graphics_7,x:33.3509,y:113.4986}).wait(1).to({graphics:mask_9_graphics_8,x:33.5586,y:109.7698}).wait(1).to({graphics:mask_9_graphics_9,x:33.8253,y:104.9819}).wait(1).to({graphics:mask_9_graphics_10,x:34.1583,y:99.0025}).wait(1).to({graphics:mask_9_graphics_11,x:34.5651,y:91.6992}).wait(1).to({graphics:mask_9_graphics_12,x:35.053,y:82.9397}).wait(1).to({graphics:mask_9_graphics_13,x:35.6293,y:72.5916}).wait(181).to({graphics:mask_9_graphics_194,x:35.6293,y:66.5916}).wait(1).to({graphics:mask_9_graphics_195,x:37.1177,y:50.0608}).wait(1).to({graphics:mask_9_graphics_196,x:38.2768,y:28.2693}).wait(1).to({graphics:mask_9_graphics_197,x:39.1479,y:11.8934}).wait(1).to({graphics:mask_9_graphics_198,x:39.772,y:0.1595}).wait(1).to({graphics:mask_9_graphics_199,x:40.1904,y:-7.706}).wait(1).to({graphics:mask_9_graphics_200,x:40.4442,y:-12.477}).wait(1).to({graphics:mask_9_graphics_201,x:40.5745,y:-14.9269}).wait(1).to({graphics:mask_9_graphics_202,x:40.6225,y:-15.8295}).wait(1).to({graphics:mask_9_graphics_203,x:40.6293,y:-15.9584}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// line1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(3,1).p("ACLm4QgPACgMAKQgSANgHAbIhEEPQg2AhgmA0QgoA0gQBBQgWBYAjBpQAhBkBCA/");
	this.shape_13.setTransform(52.9848,85.4375);

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},204).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-35.8,139.29999999999998,169.2);


(lib.mccta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Layer_1
	this.instance = new lib.mcctaimg();
	this.instance.parent = this;
	this.instance.setTransform(97.7,16.5,1,1,0,0,0,97.7,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:16.4,scaleX:1.05,scaleY:1.05,x:97.75,y:16.45},8,cjs.Ease.cubicOut).to({regY:16.5,scaleX:1,scaleY:1,x:97.7,y:16.5},9,cjs.Ease.cubicOut).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgshAJDQjvAAiqiqQiqiqAAjvQAAjuCqiqQCqiqDvAAMBZDAAAQDvAACqCqQCqCqAADuQAADviqCqQiqCqjvAAg");
	this.shape.setTransform(97.6997,16.4982,0.2849,0.2849);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFF4FB").s().p("AswCmQhFAAgxgxQgwgxAAhEQAAhDAwgxQAxgxBFAAIZhAAQBFAAAxAxQAwAxAABDQAABEgwAxQgxAxhFAAg");
	this.shape_1.setTransform(97.7,16.5031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFE9F7").s().p("As2CnQhFAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBFAAIZtAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAg");
	this.shape_2.setTransform(97.7,16.5063);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9FDEF3").s().p("As7CoQhFAAgygxQgxgyAAhFQAAhEAxgyQAygxBFAAIZ3AAQBFAAAyAxQAxAyAABEQAABFgxAyQgyAxhFAAg");
	this.shape_3.setTransform(97.7,16.5094);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#80D3F0").s().p("AtBCpQhFAAgygxQgygyAAhGQAAhFAygyQAygxBFAAIaDAAQBFAAAyAxQAyAyAABFQAABGgyAyQgyAxhFAAg");
	this.shape_4.setTransform(97.7,16.5125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60C8EC").s().p("AtGCqQhGAAgygyQgygyAAhGQAAhFAygyQAygyBGAAIaNAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAg");
	this.shape_5.setTransform(97.7,16.5156);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#40BDE8").s().p("AtLCsQhHAAgygzQgzgyAAhHQAAhGAzgyQAygzBHAAIaXAAQBHAAAyAzQAzAyAABGQAABHgzAyQgyAzhHAAg");
	this.shape_6.setTransform(97.7,16.5188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#20B2E4").s().p("AtRCtQhHAAgygzQgzgzAAhHQAAhGAzgzQAygzBHAAIajAAQBHAAAyAzQAzAzAABGQAABHgzAzQgyAzhHAAg");
	this.shape_7.setTransform(97.7,16.5219);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("EgshAJDQjvAAiqiqQiqiqAAjvQAAjuCqiqQCqiqDvAAMBZDAAAQDvAACqCqQCqCqAADuQAADviqCqQiqCqjvAAg");
	this.shape_8.setTransform(97.7031,16.5184,0.3,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1CB1E3").s().p("AtRCtQhHAAgzgzQgzgzAAhHQAAhGAzgzQAzgzBHAAIajAAQBHAAAzAzQAzAzAABGQAABHgzAzQgzAzhHAAg");
	this.shape_9.setTransform(97.7,16.5222);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#39BBE7").s().p("AtMCsQhHAAgzgzQgygyAAhHQAAhGAygyQAzgzBHAAIaZAAQBHAAAzAzQAyAyAABGQAABHgyAyQgzAzhHAAg");
	this.shape_10.setTransform(97.7,16.5194);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#55C4EA").s().p("AtICrQhGAAgygyQgygyAAhHQAAhGAygyQAygyBGAAIaRAAQBGAAAyAyQAyAyAABGQAABHgyAyQgyAyhGAAg");
	this.shape_11.setTransform(97.7,16.5167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#71CEEE").s().p("AtDCqQhGAAgygyQgygyAAhGQAAhFAygyQAygyBGAAIaHAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAg");
	this.shape_12.setTransform(97.7,16.5139);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8ED8F1").s().p("As+CpQhGAAgxgyQgygxAAhGQAAhFAygxQAxgyBGAAIZ9AAQBGAAAxAyQAyAxAABFQAABGgyAxQgxAyhGAAg");
	this.shape_13.setTransform(97.7,16.5111);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AAE2F5").s().p("As5CoQhGAAgxgxQgxgyAAhFQAAhEAxgyQAxgxBGAAIZzAAQBGAAAxAxQAxAyAABEQAABFgxAyQgxAxhGAAg");
	this.shape_14.setTransform(97.7,16.5083);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6EBF8").s().p("As1CnQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAIZrAAQBEAAAxAxQAxAxAABEQAABFgxAxQgxAxhEAAg");
	this.shape_15.setTransform(97.7,16.5056);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3F5FC").s().p("AswCmQhEAAgxgxQgxgxAAhEQAAhDAxgxQAxgxBEAAIZhAAQBEAAAxAxQAxAxAABDQAABEgxAxQgxAxhEAAg");
	this.shape_16.setTransform(97.7,16.5028);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-0.8,205.7,34.699999999999996);


// stage content:
(lib.PayPal_anywaytopay_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1,restart:237});

	// timeline functions:
	this.frame_0 = function() {
		this.loops = 0;
	}
	this.frame_219 = function() {
		this.cta_mc.gotoAndStop(0);
	}
	this.frame_236 = function() {
		var root = this;
		
		var canvas = document.getElementById("canvas");
		
		canvas.addEventListener("mouseover", doMouseOver, false);
		canvas.addEventListener("mouseout", doMouseOut, false);
		
		/*
		this.replay_mc.addEventListener("click", doRestart, false);
		
		function doRestart(){
			root.gotoAndPlay("restart");
		}
		*/
		
		function doMouseOver(){
			root.cta_mc.gotoAndPlay("over");
		}
		
		function doMouseOut(){
			root.cta_mc.gotoAndPlay("out");
		}
		
		setTimeout(loop, 4000);
		
		function loop(){
			if(root.loops == 0){
				console.log(root.loops);
				root.gotoAndPlay("restart");
				root.loops = 1;
			}
		}
		
		this.stop();
	}
	this.frame_259 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(219).call(this.frame_219).wait(17).call(this.frame_236).wait(23).call(this.frame_259).wait(1));

	// cta
	this.cta_mc = new lib.mccta();
	this.cta_mc.name = "cta_mc";
	this.cta_mc.parent = this;
	this.cta_mc.setTransform(150,209.45,1,1,0,0,0,97.7,27.1);
	this.cta_mc.alpha = 0;
	this.cta_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(219).to({_off:false},0).to({y:179.45,alpha:1},17,cjs.Ease.cubicOut).wait(1).to({alpha:0},22).wait(1));

	// logo
	this.instance = new lib.mclogo();
	this.instance.parent = this;
	this.instance.setTransform(120,93.45,1.15,1.15,0,0,0,81.2,19.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({x:150,alpha:1},17,cjs.Ease.cubicOut).wait(1).to({alpha:0},22).wait(1));

	// hand
	this.instance_1 = new lib.mchand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.3,232.25,1,1,0,0,0,71.2,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({regY:128.1,rotation:4.9993,x:163.35,y:232.3},6,cjs.Ease.sineInOut).to({regY:128.2,rotation:-9.9992,x:163.25},7,cjs.Ease.sineOut).to({regY:128,rotation:0,x:163.3,y:232.25},8,cjs.Ease.cubicIn).wait(34).to({regY:128.1,rotation:4.9993,x:163.35,y:232.3},6,cjs.Ease.sineInOut).to({regY:128.2,rotation:-9.9992,x:163.25},7,cjs.Ease.sineOut).to({regY:128,rotation:0,x:163.3,y:232.25},8,cjs.Ease.cubicIn).to({_off:true},97).wait(23));

	// _00x250_text_03_png
	this.instance_2 = new lib.mctxt3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,64.95,1,1.0003,0,0,0,150,124.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({y:115.95,alpha:1},15,cjs.Ease.cubicOut).wait(49).to({alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(52));

	// _00x250_text_02_png
	this.instance_3 = new lib.mctxt2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,75.95,1,1.0003,0,0,0,150,124.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({y:115.95,alpha:1},16,cjs.Ease.cubicOut).wait(23).to({regY:125.1,y:156,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(131));

	// _00x250_text_01_png
	this.instance_4 = new lib.mctxt1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,86,1,1.0003,0,0,0,150,124.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:115.95,alpha:1},15,cjs.Ease.cubicOut).wait(44).to({regY:125.1,y:156,alpha:0},15,cjs.Ease.cubicIn).to({_off:true},1).wait(185));

	// mini_logo
	this.instance_5 = new lib.mcminilogo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(273,221.4,1,1,0,0,0,11.1,13.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(178).to({alpha:0},17).to({_off:true},1).wait(49));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A6DF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A5DE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01A5DE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01A4DE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01A4DD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01A3DD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01A2DC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01A1DB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02A1DB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02A0DB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02A0DA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#029FDA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#029ED9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#029DD8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#039CD8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#039CD7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#039BD7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#039BD6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#039AD6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#039AD5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0399D5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0499D5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0498D4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_23.setTransform(150,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0497D4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_24.setTransform(150,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0497D3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_25.setTransform(150,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0496D3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_26.setTransform(150,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0496D2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_27.setTransform(150,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0495D2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_28.setTransform(150,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0595D2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_29.setTransform(150,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0594D1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_30.setTransform(150,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0593D1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_31.setTransform(150,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0593D0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_32.setTransform(150,125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0592D0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_33.setTransform(150,125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0592CF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_34.setTransform(150,125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0591CF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_35.setTransform(150,125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0690CE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_36.setTransform(150,125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#068FCD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_37.setTransform(150,125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#068ECC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_38.setTransform(150,125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#068DCC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_39.setTransform(150,125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#078DCB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_40.setTransform(150,125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#078CCB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_41.setTransform(150,125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#078BCA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_42.setTransform(150,125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#078AC9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_43.setTransform(150,125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0789C9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_44.setTransform(150,125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0789C8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_45.setTransform(150,125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0888C8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_46.setTransform(150,125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0888C7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_47.setTransform(150,125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0887C7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_48.setTransform(150,125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0886C6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_49.setTransform(150,125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0885C6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_50.setTransform(150,125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0885C5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_51.setTransform(150,125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0985C5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_52.setTransform(150,125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0984C4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_53.setTransform(150,125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0983C4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_54.setTransform(150,125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0983C3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_55.setTransform(150,125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0982C3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_56.setTransform(150,125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0981C2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_57.setTransform(150,125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0A80C1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_58.setTransform(150,125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0A7FC1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_59.setTransform(150,125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0A7FC0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_60.setTransform(150,125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0A7EC0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_61.setTransform(150,125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0A7DBF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_62.setTransform(150,125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0B7CBE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_63.setTransform(150,125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0B7BBE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_64.setTransform(150,125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0B7BBD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_65.setTransform(150,125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0B7ABD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_66.setTransform(150,125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0B7ABC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_67.setTransform(150,125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0B79BC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_68.setTransform(150,125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0C79BB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_69.setTransform(150,125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0C78BB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_70.setTransform(150,125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0C77BA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_71.setTransform(150,125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0C76BA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_72.setTransform(150,125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0C76B9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_73.setTransform(150,125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0C75B9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_74.setTransform(150,125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0C75B8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_75.setTransform(150,125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0D74B8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_76.setTransform(150,125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0D73B7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_77.setTransform(150,125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0D72B7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_78.setTransform(150,125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0D72B6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_79.setTransform(150,125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0D71B6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_80.setTransform(150,125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0D71B5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_81.setTransform(150,125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0E70B5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_82.setTransform(150,125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0E6FB4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_83.setTransform(150,125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0E6EB3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_84.setTransform(150,125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0E6DB2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_85.setTransform(150,125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0F6CB2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_86.setTransform(150,125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0F6CB1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_87.setTransform(150,125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0F6BB1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_88.setTransform(150,125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0F6BB0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_89.setTransform(150,125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0F6AB0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_90.setTransform(150,125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0F69AF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_91.setTransform(150,125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1068AF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_92.setTransform(150,125);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1068AE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_93.setTransform(150,125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1067AE").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_94.setTransform(150,125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1067AD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_95.setTransform(150,125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1066AD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_96.setTransform(150,125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1065AC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_97.setTransform(150,125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1064AC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_98.setTransform(150,125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1164AB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_99.setTransform(150,125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1163AB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_100.setTransform(150,125);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1163AA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_101.setTransform(150,125);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1162AA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_102.setTransform(150,125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1162A9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_103.setTransform(150,125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1161A9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_104.setTransform(150,125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1260A8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_105.setTransform(150,125);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#125FA7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_106.setTransform(150,125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#125EA7").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_107.setTransform(150,125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#125EA6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_108.setTransform(150,125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#125DA6").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_109.setTransform(150,125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#135CA5").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_110.setTransform(150,125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#135BA4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_111.setTransform(150,125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#135AA4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_112.setTransform(150,125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#135AA3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_113.setTransform(150,125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1359A3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_114.setTransform(150,125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1358A2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_115.setTransform(150,125);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1458A2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_116.setTransform(150,125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1458A1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_117.setTransform(150,125);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1457A1").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_118.setTransform(150,125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1456A0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_119.setTransform(150,125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1455A0").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_120.setTransform(150,125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#14559F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_121.setTransform(150,125);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#15549F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_122.setTransform(150,125);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#15549E").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_123.setTransform(150,125);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#15539E").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_124.setTransform(150,125);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#15529D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_125.setTransform(150,125);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#15519C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_126.setTransform(150,125);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#15509C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_127.setTransform(150,125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#16509B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_128.setTransform(150,125);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#164F9B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_129.setTransform(150,125);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#164E9A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_130.setTransform(150,125);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#164D99").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_131.setTransform(150,125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#174C98").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_132.setTransform(150,125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#174B98").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_133.setTransform(150,125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#174B97").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_134.setTransform(150,125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#174A97").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_135.setTransform(150,125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#174A96").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_136.setTransform(150,125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#174996").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_137.setTransform(150,125);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#174895").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_138.setTransform(150,125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#184895").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_139.setTransform(150,125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#184795").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_140.setTransform(150,125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#184794").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_141.setTransform(150,125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#184694").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_142.setTransform(150,125);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#184693").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_143.setTransform(150,125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#184593").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_144.setTransform(150,125);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#184492").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_145.setTransform(150,125);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#194492").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_146.setTransform(150,125);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#194392").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_147.setTransform(150,125);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#194391").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_148.setTransform(150,125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#194291").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_149.setTransform(150,125);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#194290").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_150.setTransform(150,125);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#194190").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_151.setTransform(150,125);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#19418F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_152.setTransform(150,125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1A408F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_153.setTransform(150,125);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1A3F8E").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_154.setTransform(150,125);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1A3E8D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_155.setTransform(150,125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1A3D8D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_156.setTransform(150,125);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1A3D8C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_157.setTransform(150,125);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1A3C8C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_158.setTransform(150,125);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#1B3C8C").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_159.setTransform(150,125);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1B3B8B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_160.setTransform(150,125);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1B3A8A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_161.setTransform(150,125);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#1B398A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_162.setTransform(150,125);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1B3989").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_163.setTransform(150,125);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1B3889").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_164.setTransform(150,125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1C3889").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_165.setTransform(150,125);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#1C3788").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_166.setTransform(150,125);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1C3687").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_167.setTransform(150,125);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#164F9A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_168.setTransform(150,125);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#068ECD").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_169.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.8,65,150.3,285.7);
// library properties:
lib.properties = {
	id: 'DE72C48305924693BD181275F8CFA5DA',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/PayPal_anywaytopay_300x250_atlas_P_.png", id:"PayPal_anywaytopay_300x250_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DE72C48305924693BD181275F8CFA5DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

endpoints = [{x:200,y:200, dir: 0}]; /*, {x:200, y:200, dir: 0}];*/
currentendpoint = 0;
pieces = [];


function log(msg){
	var log = document.getElementById("log");
	var logentry = document.createElement("p");
	logentry.append(msg);
	log.append(logentry);
}

function add(type){
	log("Adding "+type);
	var canvas = document.getElementById("canvas");
	if (type === "recht"){
		var piece = document.createElement("div");
		piece.className = "track recht";
		piece.style.left= endpoints[currentendpoint].x;
		piece.style.top = endpoints[currentendpoint].y;
		// down.
		endpoints[currentendpoint].y = endpoints[currentendpoint].y+50;
		canvas.append(piece);
		updateEndpoints();
	}else if (type === "rechts"){
		var piece = document.createElement("div");
		piece.className = "track rechts";
		piece.style.left= endpoints[currentendpoint].x - 17.67;
		piece.style.top = endpoints[currentendpoint].y;
		piece.style.transform = "rotate("+(endpoints[currentendpoint].dir+22.5)+"deg)"
		// down.
		endpoints[currentendpoint].y = endpoints[currentendpoint].y+35.35 + 7.67;
		endpoints[currentendpoint].x = endpoints[currentendpoint].x-35.35;
		endpoints[currentendpoint].dir = endpoints[currentendpoint].dir+45;
		canvas.append(piece);
		updateEndpoints();
	}else if (type === "links"){
		var piece = document.createElement("div");
		piece.className = "track links";
		piece.style.left= endpoints[currentendpoint].x - 20.00;
		piece.style.top = endpoints[currentendpoint].y;
		piece.style.transform = "rotate("+(endpoints[currentendpoint].dir-45)+"deg)"
		// down.
		endpoints[currentendpoint].y = endpoints[currentendpoint].y+35.35;
		endpoints[currentendpoint].x = endpoints[currentendpoint].x+35.35;
		endpoints[currentendpoint].dir = endpoints[currentendpoint].dir-45;
		canvas.append(piece);
		updateEndpoints();
	}
}

function updateEndpoints(){
	var points = document.getElementsByClassName('endpoint');
	for(let element of points){
		console.log("removing endpoint");
		element.parentNode.removeChild(element);
	};
	
	var canvas = document.getElementById("canvas");
	endpoints.forEach(function(p){
		var ep = document.createElement("div");
		ep.className = "endpoint";
		ep.style.left = p.x;
		ep.style.top = p.y;
		ep.style.transform ="rotate("+p.dir+"deg)";
		canvas.append(ep);
	});
}

updateEndpoints();

log("Application Started");
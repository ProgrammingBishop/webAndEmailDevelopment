d3.json("data/data.json").then(function(data){
	data = data.filter(data => !!data);

	console.log(data);
})
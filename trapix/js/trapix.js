jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap(
	{
	    map: 'asia_en',
	    backgroundColor: null,
	    borderColor: '#818181',
	    borderOpacity: 0.25,
	    borderWidth: 1,
	    color: '#f4f3f0',
	    enableZoom: false,
	    hoverColor: '#006699',
	    hoverOpacity: null,
	    normalizeFunction: 'linear',
	    scaleColors: ['#b6d6ff', '#005ace'],
	    selectedColor: '#006699',
	    selectedRegions: null,
	    showTooltip: true,
	    onRegionClick: function(element, code, region)
	    {
	        var message = code.toUpperCase();

	        alert(message);
	    }
	});
});

function test(){

	alert('test');
}
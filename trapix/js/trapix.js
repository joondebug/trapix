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
	    selectedRegions: 'TH',
	    showTooltip: true,
	    onRegionClick: function(element, code, region)
	    {
	        var countryCode = code.toUpperCase();
	        //document.getElementById('map-link').click();
	        openPhotoSwipe(countryCode);
	        //alert(countryCode);
	    }
	});

});

var openPhotoSwipe = function(countryCode) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
        	src: 'https://c4.staticflickr.com/8/7295/27263426355_e4476a581a_c.jpg',
        	w: 1536,
        	h: 2048
        },
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};




var mygallery=new SlideShow({
	wrapperid: "slideshow", //ID of blank DIV on page to house Slideshow
	dimensions: [700, 400], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [
    ["assets/photo_main1.png"],
    ["assets/photo_main2.png"],
    ["assets/photo_main3.png"]
	],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:false},
	persist: false, //remember last viewed slide and recall within same session?
	fadeduration: 500, //transition duration (milliseconds)
	descreveal: "ondemand",
	togglerid: ""
})

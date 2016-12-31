 $(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});
/*
 This is the heart of the rotating image functionality. Now that we have our basic HTML markup 
 and have absolutely positioned and hidden our images using CSS, we can now rotate between them. 
 We start our JavaScript only when the HTML document and images have finished loading by using the
 window load function. For those familiar with jQuery, this is a bit different than the document 
 ready command which fires after the document is ready, not when linked images have loaded which 
 is important here. (Note: the same can be achieved by linking the JavaScript files at the bottom 
 of the HTML versus in the head of the document.) We then define a few timing variables — the initial 
 fade-in
 time, the interval between items, and the cross-fade time — all set in milliseconds. Adjust as 
 desired. On line 23, we reveal the first image, then on line 26 kick off our infinite loop.
*/
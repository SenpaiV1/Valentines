jQuery(document).ready(function($){

    // Open the bottom section
    $("button").click(function(){
        $("#bottom").fadeIn(600); // 600ms (Slow duration)
    });

    // Close the bottom section
    $(".close").click(function(){
        $("#bottom").fadeOut(600); // 600ms (Slow duration)
    });

    // Close the bottom section when clicking outside of it
    $(document).mouseup(function(e){
        var container = $("#bottom");

        // Check if the click was outside the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut(600); // Close with fadeOut
        }
    });
});

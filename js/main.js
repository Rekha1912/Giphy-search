$(function(){
    
    //mobile button
    $("#myMenu").click(function () {
        if ($("#myLinks").css("display") === "block") {
            $("#myLinks").css("display", "none");
        } else {
            $("#myLinks").css("display", "block");
        }
    });
    
    //search
    $("#submit").click(function(){
        let userInput = $("#search").val();
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/search?api_key=OMbgFHquYiRsGpqYqZMjETxWI0Lkij8y&q='+userInput+'&limit='+ $("#count").val()
        }).done(function(response){
                $("#grid").empty();
                let resarray = response.data;              
                    $.each(resarray, function( index, value ) {
                        // alert( index + ": " + value.url );
                        $("#grid").append('<div class="grid-item"><img src='+value.images.fixed_width_downsampled.url+' alt="gif"/></div>')
                });
                let giflength = response.data.length;                 
                $("#count").val(giflength);
            });
    });
});


//style="width:'+value.images.fixed_width_downsampled.width+'px;height:'+value.images.fixed_width_downsampled.height+'px" 
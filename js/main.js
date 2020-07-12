$(function(){

    $("#myMenu").click(function () {
        if ($("#myLinks").css("display") === "block") {
            $("#myLinks").css("display", "none");
        } else {
            $("#myLinks").css("display", "block");
        }
    });
    $(document.body).click(function(event){
        if(event.target.id !== undefined && event.target.id !== "menuIcon"){
            $("#myLinks").css("display", "none");
        }
    });

    $("#submit").click(function(){
        let userInput = $("#search").val();
        $.ajax({
            url: 'http://api.giphy.com/v1/gifs/search?api_key=OMbgFHquYiRsGpqYqZMjETxWI0Lkij8y&q='+userInput+'&limit='+ $("#count").val()
        }).done(function(response){
                $("#grid").empty();
                let resarray = response.data;              
                    $.each(resarray, function( index, value ) {
                        $("#grid").append('<div class="grid-item"><img src='+value.images.fixed_width_downsampled.url+' alt="gif"/></div>')
                });
                let giflength = response.data.length;                 
                $("#count").val(giflength);
            });
    });
});



var button = $("#button_change");
    $(button).click(function(){
        var inputValue = $("#input_color").val();
        var element = $(".cow_color");
        $(element).html(inputValue);
    });
// Check off to do
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
 });

// Click on X to delete to do
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
 });

 // Add a to do
 $("input[type = 'text']").keypress(function(e){
    if(event.which === 13) {
        var newToDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span> X </span> " + newToDo + "</li>");
    }
 });
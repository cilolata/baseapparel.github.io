
var input = $(".input-email");
var texto = $(".texto-erro");

$(document).ready(function(){

    input.on("input", function(){
        var email = input.val();
        var RegExp = /^[\w]+@[\w]+\.[\w|\.]+$/;
            
            if(RegExp.test(email)){
                input.removeClass("borda-vermelha").removeClass("icone-erro");
                texto.text(' ');
                input.addClass("borda-padrao");
               
    
            }else{
                input.addClass("borda-vermelha").addClass("icone-erro");
                input.removeClass("borda-padrao");
                texto.addClass(".texto-erro").text("Please provide a valid email");
            }
        });
    
    
        $(".btn").on("click", function(){
            input.val(" ");
            input.addClass("borda-padrao");
            texto.text(" ");
            input.removeClass("borda-vermelha").removeClass("icone-erro");
        });
});


    


            
                

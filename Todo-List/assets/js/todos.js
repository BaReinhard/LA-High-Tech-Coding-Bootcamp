// JavaScript File
// Author: Brett Reinard
$(document).ready(function() 
 {
     
     // Functions to be used
     //-------------------------------------------------------------------------------
     
     
     // Function that initializes that page, sets event listeners
    function init(){
        addDelete();
        addCross();
        addInputListener();
        hideInput();
    }// End init
    
    // Function that toggles the completed class
     function addCross(){
        $('li').click(function(){
            $(this).toggleClass('completed');
        })
    }// End addCross
     
    // Function to Add Event Listeneres to Delete Buttons
    function addDelete(){
        // Select Trash Buttons and assign Click Event
        $('.fa-trash').closest('span').click(function(event) 
        { 
        // Delete List Item when Trash Button is Clicked.
         $(this).closest('li').fadeOut(400,function(event){
             $(this).remove();
         });
        });
    }// end addDelete
     // Function to add InputListener to Enter Key inside Input Box
    function addInputListener(){
        $("input").keydown(function (event){
            if(event.keyCode == 13){
                $('ul').append('<li><span><i class="fa fa-trash"></i></span>'+ $("input").val() + '</li>');
                addDelete();
                addCross();
                $(this).val("");
            }
        });
    }// end addInputListener
// Select Plus Button and assign Click Event
    function hideInput(){
        $('.fa-plus').click(function(event){
            
               $("input").fadeToggle(400);
            
        
        });
    }// end hideInput
    
    
// End of functions
//-------------------------------------------------------------------------------

    
    // Initalize the page
    init();
    
   
   
    
 });// end document ready
 
 

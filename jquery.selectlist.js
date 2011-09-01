/*
 * jQuery Selectlist
 * Copyright (c) 2011 Richard Standbrook
 *
 * http://allthesethoughts.com
*/
(function( $ ){

    var selectlistMethods = {
        
        settings : {},
        
        init : function( options ) {
            
            var self = this;
            
            var settings = {
                selectableElement : "li",
                selectedClass : "selected"
            };
            
            if ( options ) { 
                settings = $.extend( settings, options );
            }
            
            this.settings = settings;
            
            $( this.settings.selectableElement, this ).live( "click select", function() {
                self.selectables( "select", this);
            });
                        
            return this;
        },
        
        select : function( el ) {
            
            el = $(el);
            
            $( "." + this.settings.selectedClass, this ).removeClass( this.settings.selectedClass ).trigger( "unselect" );
            el.addClass( this.settings.selectedClass );
            el.trigger( "selected" );
        }
    };


    $.fn.selectlist = function( method ) {
    
        var methods = selectlistMethods;

        // Method calling logic
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === "object" || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( "Method " +  method + " does not exist in selectables" );
        }
    };

})( jQuery );
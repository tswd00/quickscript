/**
 * /src/splitter.js
 * Copyright © 2016 TSWD00.
 * This file contains part of the code for the QS parser. This file splits the code into "parse units."
 */

// Call an anonymous function with window inputted as context so that variables are not stored in window by default
(function(context) {
  
  // qsSplit() - takes code (converted to string) and splits it into "parse untis"
  var qsSplit = function(code) {
    code += ''; // Convert code to a string
    
    var originalCode = code; // Store the original code in case needed later
    
    code = code.split(/([^a-z]+)/gi); // Split the code by characters other than a-z
    
    return code;
  };
  
})(window);

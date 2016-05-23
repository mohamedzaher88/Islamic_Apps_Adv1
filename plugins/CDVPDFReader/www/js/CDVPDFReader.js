//PDFViewer based on ChildBrowser

/* MIT licensed */
// (c) 2010 Jesse MacFadyen, Nitobi
//
//  CDVPDFReader
//  CDVEmailComposer Template Created Jan 7 2013
//  Copyright 2013 @RandyMcMillan

(function() {
 
 var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks
 
 function CDVPDFReader() {
 // Does nothing
 }
 
  
 // Callback when the user chooses the 'Done' button
 // called from native
 CDVPDFReader._onClose = function()
 {
 window.plugins.CDVPDFReader.onClose();
 };
 
 
 
/* The interface that you will use to access functionality */
 
 // Show a webpage, will result in a callback to onLocationChange
 CDVPDFReader.prototype.showPDF = function(loc)
 {
 cordovaRef.exec("CDVPDFReader.showPDF", loc);
 };
 
 // close the browser, will NOT result in close callback
 CDVPDFReader.prototype.close = function()
 {
 cordovaRef.exec("CDVPDFReader.close");
 };
 
 // Not Implemented
 CDVPDFReader.prototype.jsExec = function(jsString)
 {
 // Not Implemented!!
 //PhoneGap.exec("PDFViewerCommand.jsExec",jsString);
 };
 
 // Note: this plugin does NOT install itself, call this method some time after deviceready to install it
 // it will be returned, and also available globally from window.plugins.PDFViewer
 CDVPDFReader.install = function()
 {
 if(!window.plugins) {
 window.plugins = {};
 }
 if ( ! window.plugins.CDVPDFReader ) {
 window.plugins.CDVPDFReader = new CDVPDFReader();
 }
 
 };
 
 
 if (cordovaRef && cordovaRef.addConstructor) {
 cordovaRef.addConstructor(CDVPDFReader.install);
 } else {
 console.log("CDVPDFReader Cordova Plugin could not be installed.");
 return null;
 }
 
 
 })();

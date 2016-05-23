/* MIT licensed */
// (c) 2010 Jesse MacFadyen, Nitobi
//
//  CDVBrowser Template Created Jan 7 2013
//  Copyright 2013 @RandyMcMillan

//  Created by user on 9/1/14.  
//  Copyright __MyCompanyName__ 2014. All rights reserved.

(function() {

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

function CDVBrowser() {
    // Does nothing
}

// Callback when the location of the page changes
// called from native
CDVBrowser._onLocationChange = function(newLoc)
{
    window.plugins.CDVBrowser.onLocationChange(newLoc);
};

// Callback when the user chooses the 'Done' button
// called from native
CDVBrowser._onClose = function()
{
    window.plugins.CDVBrowser.onClose();
};

// Callback when the user chooses the 'open in Safari' button
// called from native
CDVBrowser._onOpenExternal = function()
{
    window.plugins.CDVBrowser.onOpenExternal();
};

// Pages loaded into the CDVBrowser can execute callback scripts, so be careful to
// check location, and make sure it is a location you trust.
// Warning ... don't exec arbitrary code, it's risky and could fuck up your app.
// called from native
CDVBrowser._onJSCallback = function(js,loc)
{
    // Not Implemented
    //window.plugins.CDVBrowser.onJSCallback(js,loc);
};

/* The interface that you will use to access functionality */

// Show a webpage, will result in a callback to onLocationChange
CDVBrowser.prototype.showWebPage = function(loc)
{
    cordovaRef.exec("CDVBrowser.showWebPage", loc);
};

// close the browser, will NOT result in close callback
CDVBrowser.prototype.close = function()
{
    cordovaRef.exec("CDVBrowser.close");
};

// Not Implemented
CDVBrowser.prototype.jsExec = function(jsString)
{
    // Not Implemented!!
    //PhoneGap.exec("CDVBrowser.jsExec",jsString);
};

// Note: this plugin does NOT install itself, call this method some time after deviceready to install it
// it will be returned, and also available globally from window.plugins.childBrowser
CDVBrowser.install = function()
{
    if(!window.plugins) {
        window.plugins = {};
    }
        if ( ! window.plugins.CDVBrowser ) {
        window.plugins.CDVBrowser = new CDVBrowser();
    }

};


if (cordovaRef && cordovaRef.addConstructor) {
    cordovaRef.addConstructor(CDVBrowser.install);
} else {
    console.log("CDVBrowser Cordova Plugin could not be installed.");
    return null;
}


})();

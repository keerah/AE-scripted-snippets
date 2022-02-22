// Name: LayerMarkIT  Version: 0.2
// Author: keerah.com
// Description: This script creates comp markers for each layer in current selection
// adding tExtent handles (before and after) to the layers lengths in seconds
//
// Change the variable in line 10 to your preferences, 0 = no handles

if (app.project.activeItem != null && app.project.activeItem instanceof CompItem) {

	var myComp = app.project.activeItem;
	var sLayers = myComp.selectedLayers;	
	var tExtent = 1/6; // extended handles in seconds 

	if (sLayers.length > 0) {

		app.beginUndoGroup("Create markers for selected layers");
        
		for (i=0; i<sLayers.length; i++) {

			curLayer = sLayers[i];
			var newMarker = new MarkerValue(curLayer.name);
			newMarker.duration = Math.abs(curLayer.outPoint - curLayer.inPoint) + tExtent * 2;
			myComp.markerProperty.setValueAtTime(curLayer.inPoint - tExtent, newMarker)
		}
		
		app.endUndoGroup();
	} else {

		alert("Select some of them the layers");
	} 
} else {
	
	alert("Select some of them the layers in some of them comps");
}

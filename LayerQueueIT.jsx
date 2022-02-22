// Name: LayerQueueIT Version: 0.3
// Author: keerah.com
// Description: This script enqueues/renders all selected layer areas
// It gives the names of the layers to the output files and adds tExtent handles (in seconds, before and after the layers ins/outs) 
//
// Change the variables in lines 11 - 14 to your output preferences
// Uncomment the app.project.renderQueue.render() command in line 41 to immediately render the queued items

if (app.project.activeItem != null && app.project.activeItem instanceof CompItem) {

	var sPath = "D:\\MYPROJECTS\\autorender\\"; // the path for output files
	var sRStem = "Best Settings"; // render settings template name 
	var sOMtem = "Lossless"; // output module template 
	var tExtent = 0; // extended handles in seconds, 1 = one secod

	var myComp = app.project.activeItem;
	var markerProp = myComp.markerProperty;
	var mNum = markerProp.numKeys;
	var myComp = app.project.activeItem;
	var sLayers = myComp.selectedLayers;

	if (sLayers.length > 0) {

		app.beginUndoGroup("Queue Selected Layers' areas");
		for (i=0; i<sLayers.length; i++) {

			curLayer = sLayers[i];
			curRQItem = app.project.renderQueue.items.add(myComp);
			curRQItem.outputModule(1).applyTemplate(sOMtem);
			curRQItem.applyTemplate(sRStem);
			
			curOM = curRQItem.outputModule(1);
			curRQItem.timeSpanStart = curLayer.inPoint - tExtent;
			curRQItem.timeSpanDuration = Math.abs(curLayer.outPoint - curLayer.inPoint) + tExtent * 2;
			fileOut = curOM.file;
			fileOutStr = curLayer.name;
			curOM.file = new File(sPath + fileOutStr);
		}
	
		app.endUndoGroup();	
		//app.project.renderQueue.render()
	} else {
		alert("Select a few layers first");
	}

} else {
	
	alert("Select a composition");
}

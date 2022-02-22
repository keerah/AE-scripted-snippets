// Name: MarkerQueueIT Version: 0.2
// Author: Keerah.com
// Description: This script enqueues/renders all composition marker areas
//
// Change the variables in lines 10 - 12 to your output preferences
// Uncomment the app.project.renderQueue.render() command to immediately render the queued items

if (app.project.activeItem != null && app.project.activeItem instanceof CompItem) {

	var sPath = "D:\\MYPROJECTS\\autorender\\"; // the path for output files
	var sRStem = "Best Settings"; // render settings template name 
	var sOMtem = "Lossless"; // output module template

	var myComp = app.project.activeItem;
	var markerProp = myComp.markerProperty;
	var mNum = markerProp.numKeys;

	app.beginUndoGroup("Queue composition markers'areas");

	for (i=1;i<=mNum;i++) {
		
		curMarker = markerProp.keyValue(i);
		curRQItem = app.project.renderQueue.items.add(myComp);
		curRQItem.outputModule(1).applyTemplate(sOMtem);
		curRQItem.applyTemplate(sRStem);
		curOM = curRQItem.outputModule(1);
		
		curRQItem.timeSpanStart = markerProp.keyTime(i);
		curRQItem.timeSpanDuration = curMarker.duration;
		
		fileOut = curOM.file;
		fileOutStr = curMarker.comment;
		curOM.file = new File(sPath + fileOutStr);
	}

	app.endUndoGroup();
	//app.project.renderQueue.render()
} else {
	
	alert("Select a composition");
}

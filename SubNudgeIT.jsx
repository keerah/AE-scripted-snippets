// Name: SubNudgeIT
// Author: keerah.com
// Description: Subframe layer nudge
//
// Put this as a scriptlet in your KBar or similar extension
// and another version of this script with the negative value in line 9
// on another KBar button to Nudge backwards

var ff = 4; // 4 = 1/4 of the frame length, a fraction of a frame length to nudge by, positive value to nudge forward, negative - backward

var comp = app.project.activeItem;
var lr = comp.selectedLayers[0];

if (comp.selectedLayers.length > 0) {

    var frl = comp.frameDuration;
    app.beginUndoGroup("Layer Nudge");
    lr.startTime += frl/ff;
    app.endUndoGroup();
    
} else { alert("Select a layer") }

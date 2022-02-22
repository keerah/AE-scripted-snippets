// Name: LayerNullIT
// Author: keerah.com
// Description: this is an After Effects script that creates nulls
// for each of currently selected layers at their position (copying rotation and scale)


// check if there's a project and there's a comp
if ((app.project.activeItem != null) && (app.project.activeItem instanceof CompItem)) {

    var myComp = app.project.activeItem;
    var sLayers = myComp.selectedLayers;

    // check if there's any layers selected
    if (sLayers.length > 0) {

            // let's care of undoing things
            app.beginUndoGroup("Add nulls for layers");
        
            // lets'go through the selection
            for (var i = 0; i < sLayers.length; i++) {

		    // create null
		    var newLayer = myComp.layers.addNull();

		    // set the null's position
		    newLayer.property("Position").setValue(sLayers[i].transform.position.value);

		    // set the null's rotation
		    newLayer.property("Rotation").setValue(sLayers[i].transform.rotation.value);

		    // set the null's scale
		    newLayer.property("Scale").setValue(sLayers[i].transform.scale.value);

		    // set the null's opacity
		    newLayer.property("Opacity").setValue(0);

		    // move null before the layer
		    newLayer.moveBefore(sLayers[i])

            }

            app.endUndoGroup()

    } else {

        alert("Please select one or a few layers")

    }

} else {

    alert("Please select one or a few layers in any composition")

}

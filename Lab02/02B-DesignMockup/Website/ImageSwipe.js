

  const legend = new Legend({
    view,
    // only display legend for one layer
    // and give it a generic title not
    // associated with a year
    layerInfos: [{
      layer: ppl2014,
      title: "Average occupants per room"
    }]
  });
  view.ui.add(legend, "top-right");
  
  const swipe = new Swipe({
    leadingLayers: [ ppl2014 ],
    trailingLayers: [ ppl2019 ],
    position: 85,
    view
  });
  view.ui.add(swipe);
  
  // indicate which year is displayed
  // on each side of the swipe
  view.ui.add("view2014Title", "bottom-left");
  view.ui.add("view2019Title", "bottom-right");

  
function sliceSizeDos(dataNumDos, dataTotalDos) {
  return (dataNumDos / dataTotalDos) * 360;
}
function addSliceDos(sliceSizeDos, pieElementDos, offsetDos, sliceIDdos, colorDos) {
  $(pieElementDos).append("<div class='slice2 "+sliceIDdos+"'><span></span></div>");
  var offsetDos = offsetDos - 1;
  var sizeRotationDos = -179 + sliceSizeDos;
  $("."+sliceIDdos).css({
    "transform": "rotate("+offsetDos+"deg) translate3d(0,0,0)"
  });
  $("."+sliceIDdos+" span").css({
    "transform"       : "rotate("+sizeRotationDos+"deg) translate3d(0,0,0)",
    "background-color": colorDos
  });
}
function iterateSlices(sliceSizeDos, pieElementDos, offsetDos, dataCountDos, sliceCountDos, colorDos) {
  var sliceIDdos = "s2"+dataCountDos+"-"+sliceCountDos;
  var maxSizeDos = 179;
  if(sliceSizeDos<=maxSizeDos) {
    addSliceDos(sliceSizeDos, pieElementDos, offsetDos, sliceIDdos, colorDos);
  } else {
    addSliceDos(maxSizeDos, pieElementDos, offsetDos, sliceIDdos, colorDos);
    iterateSlices(sliceSizeDos-maxSizeDos, pieElementDos, offsetDos+maxSizeDos, dataCountDos, sliceCountDos+1, colorDos);
  }
}
function createPie(dataElementDos, pieElementDos) {
  var listDataDos = [];
  $(dataElementDos+" span").each(function() {
    listDataDos.push(Number($(this).html()));
  });
  var listTotalDos = 0;
  for(var i=0; i<listDataDos.length; i++) {
    listTotalDos += listDataDos[i];
  }
  var offsetDos = 0;
  var colorDos = [
    "#94df28", 
    "#ffd700", 
    "#75f3c9", 
    "#c502c9", 
    "#d71d24", 
    "#cf9461", 
    "forestgreen", 
    "#e8a973",
    "navy", 
    "gray"
  ];
  for(var i=0; i<listDataDos.length; i++) {
    var sizeDos = sliceSizeDos(listDataDos[i], listTotalDos);
    iterateSlices(sizeDos, pieElementDos, offsetDos, i, 0, colorDos[i]);
    $(dataElementDos+" li:nth-child("+(i+1)+")").css("border-color", colorDos[i]);
    offsetDos += sizeDos;
  }
}
createPie(".pieID2.legend2", ".pieID2.pie2");
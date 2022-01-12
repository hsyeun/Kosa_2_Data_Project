am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var data = {
    value: 0,
    children: []
  }
  

  data.children.push({ name: "2022년", value: 20 })
  data.children.push({ name: "신년", value: 50 })
  data.children.push({ name: "계획", value: 70 })
  data.children.push({ name: "네이버 블로그", value: 10 })
  data.children.push({ name: "유튜브", value: 50 })
  data.children.push({ name: "페이스북", value: 30 })
  data.children.push({ name: "인스타그램", value: 40 })
  data.children.push({ name: "팬톤 컬러", value: 20 })
  data.children.push({ name: "FIFA 월드컵", value: 60 })
  data.children.push({ name: "아시안게임", value: 30 })
  data.children.push({ name: "베이징 동계올림픽", value: 80 })
  data.children.push({ name: "VERY PERI", value: 30 })
  data.children.push({ name: "OTT", value: 50 })
  data.children.push({ name: "드라마", value: 70 })
  data.children.push({ name: "영화", value: 60 })

  
  // Create wrapper container
  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    })
  );
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
  var series = container.children.push(
    am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 2,
      topDepth: 1,
      initialDepth: 1,
      maxRadius: 80,
      minRadius: 30,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      manyBodyStrength: -13,
      centerStrength: 0.8
    })
  );
  
  series.get("colors").setAll({
    step: 1
  });
  
  series.links.template.setAll({
    strokeWidth: 2
  });
  
  series.nodes.template.setAll({
    tooltipText: null,
    cursorOverStyle: "pointer"
  });
  
  var selectedDataItem;
  
  // handle clicking on nodes and link/unlink them
  series.nodes.template.events.on("click", function(e) {
    // check if we have a selected data item
    if (selectedDataItem) {
      var targetDataItem = e.target.dataItem;
      // if yes, and it's the same, unselect
      if (e.target.dataItem == selectedDataItem) {
        selectedDataItem.get("outerCircle").setPrivate("visible", false);
        selectedDataItem = undefined;
      }
      // otherwise connect selected with a clicked point
      else {
        if (series.areLinked(selectedDataItem, targetDataItem)) {
          series.unlinkDataItems(selectedDataItem, targetDataItem);
        }
        else {
          series.linkDataItems(selectedDataItem, targetDataItem, 0.2);
        }
      }
    }
    // if no selected data item, select
    else {
      selectedDataItem = e.target.dataItem;
      selectedDataItem.get("outerCircle").setPrivate("visible", true)
    }
  })
  
  series.data.setAll([data]);
  series.set("selectedDataItem", series.dataItems[0]);
  
  // Make stuff animate on load
  series.appear(1000, 100);
  
  }); // end am5.ready()
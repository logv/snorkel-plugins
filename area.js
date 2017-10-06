"use strict";

// the stylesheet resolves to:
// app/plugins/snorkel-plugins-demo/static/styles/area.css
bootloader.add_stylesheet("snorkel-plugins-demo/static/styles/area");

var TimeView = require("app/client/views/time_view");
var helpers = require("app/client/views/helpers");


var AreaView = TimeView.extend({
  baseview: helpers.VIEWS.TIME,
  initialize: function() {
    this.chart_type = 'area';
  },
  render: function() {
    TimeView.prototype.render.apply(this);
    this.$el.addClass("area_graph");
  }
}, {
  icon: "noun/line.svg"
});

function build_custom_controls() {
  var custom_controls = $("<div class='clearfix'/>");
  var custom_params = SF.controller().get_custom_params();

  $C("selector", {
    name: "fill_missing",
    options: {
      "zero" : "Treat as Zero",
      "" : "Ignore"
    },
    selected: custom_params.fill_missing,
  }, function(selector) {
    $C("query_control_row", {
      label: "Missing Data",
      component: selector.toString()
    }, function(cmp) {
      custom_controls.append("<div />");
      custom_controls.append(cmp.$el);

    });
  });

  return custom_controls;
}

AreaView.prototype.build_custom_controls = build_custom_controls;

// this directory is relative to app/plugins/
SF.trigger("view:add", "snorkel-plugins-demo/area",  {
    custom_controls: build_custom_controls,
    include: helpers.STD_INPUTS
      .concat(helpers.inputs.TIME_BUCKET)
      .concat(helpers.inputs.COMPARE)
      .concat(helpers.inputs.SORT_BY),
    icon: "noun/line.svg"
}, AreaView);

module.exports = AreaView;

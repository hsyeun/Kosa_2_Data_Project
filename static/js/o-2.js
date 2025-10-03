function mpld3_load_lib(url, callback) {
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function () { console.warn("failed to load library " + url); };
  document.getElementsByTagName("head")[0].appendChild(s);
}

// require.js not available: dynamically load d3 & mpld3
mpld3_load_lib("https://d3js.org/d3.v5.js", function () {
  mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.7.js", function () {

    mpld3.draw_figure("o-2",
      {
        "width": 1000.0, "height": 500.0,
        "axes": [{
          "bbox": [0.125, 0.125, 0.775, 0.755],
          "xlim": [-0.28, 14.68], "ylim": [0.0, 40.95],
          "xdomain": [-0.28, 14.68], "ydomain": [0.0, 40.95],
          "xscale": "linear", "yscale": "linear",
          "axes": [
            { "position": "bottom", "nticks": 7, "tickvalues": [1.2000000000000002, 3.2, 5.199999999999999, 7.199999999999999, 9.2, 11.2, 13.2], "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 20.0, "grid": { "gridOn": false }, "visible": true },
            { "position": "left", "nticks": 10, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 20.0, "grid": { "gridOn": false }, "visible": true }],
          "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el110561598451765840", "lines": [],
          "paths": [
            { "data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598452776336", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data01", "xindex": 2, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598452773312", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451104016", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data03", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451104208", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data04", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451105024", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data05", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451105360", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data06", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451102912", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data07", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598442720464", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data08", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598442720704", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data09", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451282560", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data10", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598448364704", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data11", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598448363312", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data01", "xindex": 3, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598448365040", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data12", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598448362064", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1 },
            { "data": "data13", "xindex": 0, "yindex": 1, "coordinates": "axes", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451234080", "dasharray": "none", "alpha": 1, "facecolor": "#1F77B4", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1000001.0 },
            { "data": "data13", "xindex": 0, "yindex": 2, "coordinates": "axes", "pathcodes": ["M", "L", "L", "L", "Z"], "id": "el110561598451236096", "dasharray": "none", "alpha": 1, "facecolor": "#FF7F0E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1000001.0 },
            { "data": "data14", "xindex": 0, "yindex": 1, "coordinates": "axes", "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"], "id": "el110561598457888144", "dasharray": "none", "alpha": 1, "facecolor": "#FFFFFF", "edgecolor": "#CCCCCC", "edgewidth": 1.0, "zorder": 1000000.0 }],
          "markers": [],
          "texts": [
            { "text": "14", "position": [0.8, 14.14], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598449724912" },
            { "text": "14", "position": [2.8, 14.14], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598452774320" },
            { "text": "11", "position": [4.8, 11.11], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598439720080" },
            { "text": "9", "position": [6.8, 9.09], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598439720272" },
            { "text": "8", "position": [8.8, 8.08], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598439722432" },
            { "text": "7", "position": [10.8, 7.07], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598442720512" },
            { "text": "5", "position": [12.8, 5.05], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598442717488" },
            { "text": "39", "position": [1.6, 39.39], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598442719984" },
            { "text": "31", "position": [3.6000000000000005, 31.31], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598442719408" },
            { "text": "29", "position": [5.6, 29.29], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598448364512" },
            { "text": "23", "position": [7.6, 23.23], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598448830976" },
            { "text": "20", "position": [9.6, 20.2], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598448829392" },
            { "text": "14", "position": [11.6, 14.14], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457878896" },
            { "text": "17", "position": [13.6, 17.17], "coordinates": "data", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457880480" },
            { "text": "\uae08\uba54\ub2ec", "position": [0.8891129032258064, 0.922967255334805], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el110561598457885840" },
            { "text": "\ud569\uacc4", "position": [0.8891129032258064, 0.8585816777041941], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el110561598451234032" }],
          "collections": [], "images": [], "sharex": [], "sharey": []
        }],
        "data":
        {
          "data01": [[0.4, 0.0, 2.4, 11.2], [1.2000000000000002, 0.0, 3.2, 12.0], [1.2000000000000002, 14.0, 3.2, 12.0], [0.4, 14.0, 2.4, 11.2]],
          "data02": [[4.3999999999999995, 0.0], [5.199999999999999, 0.0], [5.199999999999999, 11.0], [4.3999999999999995, 11.0]],
          "data03": [[6.3999999999999995, 0.0], [7.199999999999999, 0.0], [7.199999999999999, 9.0], [6.3999999999999995, 9.0]],
          "data04": [[8.4, 0.0], [9.200000000000001, 0.0], [9.200000000000001, 8.0], [8.4, 8.0]],
          "data05": [[10.4, 0.0], [11.200000000000001, 0.0], [11.200000000000001, 7.0], [10.4, 7.0]],
          "data06": [[12.4, 0.0], [13.200000000000001, 0.0], [13.200000000000001, 5.0], [12.4, 5.0]],
          "data07": [[1.2, 0.0], [2.0, 0.0], [2.0, 39.0], [1.2, 39.0]],
          "data08": [[3.2, 0.0], [4.0, 0.0], [4.0, 31.0], [3.2, 31.0]],
          "data09": [[5.199999999999999, 0.0], [6.0, 0.0], [6.0, 29.0], [5.199999999999999, 29.0]],
          "data10": [[7.199999999999999, 0.0], [8.0, 0.0], [8.0, 23.0], [7.199999999999999, 23.0]],
          "data11": [[9.2, 0.0], [10.0, 0.0], [10.0, 20.0], [9.2, 20.0]],
          "data12": [[13.2, 0.0], [14.0, 0.0], [14.0, 17.0], [13.2, 17.0]],
          "data13": [[0.8054808841099164, 0.922967255334805, 0.8585816777041941], [0.8652180406212664, 0.922967255334805, 0.8585816777041941], [0.8652180406212664, 0.9551600441501104, 0.8907744665194995], [0.8054808841099164, 0.9551600441501104, 0.8907744665194995]],
          "data14": [[0.7995071684587813, 0.8309878587196466], [0.9790919952210274, 0.8309878587196466], [0.9850657108721624, 0.8309878587196466], [0.9850657108721624, 0.8401857983811627], [0.9850657108721624, 0.9678072111846947], [0.9850657108721624, 0.9770051508462105], [0.9790919952210274, 0.9770051508462105], [0.7995071684587813, 0.9770051508462105], [0.7935334528076463, 0.9770051508462105], [0.7935334528076463, 0.9678072111846947], [0.7935334528076463, 0.8401857983811627], [0.7935334528076463, 0.8309878587196466], [0.7995071684587813, 0.8309878587196466]]
        },
        "id": "el110561598449723328", "plugins": [{ "type": "reset" }, { "type": "zoom", "button": true, "enabled": false }, { "type": "boxzoom", "button": true, "enabled": false }]
      });
  })
});

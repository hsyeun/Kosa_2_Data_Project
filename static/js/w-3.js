function mpld3_load_lib(url, callback) {
   var s = document.createElement('script');
   s.src = url;
   s.async = true;
   s.onreadystatechange = s.onload = callback;
   s.onerror = function () { console.warn("failed to load library " + url); };
   document.getElementsByTagName("head")[0].appendChild(s);
}

mpld3_load_lib("https://d3js.org/d3.v5.js", function () {
   mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.7.js", function () {

      mpld3.draw_figure("w-3",
         {
            "width": 1000.0, "height": 500.0,
            "axes": [{
               "bbox": [0.125, 0.125, 0.775, 0.755], "xlim": [-0.55, 33.55], "ylim": [4.5, -0.5],
               "xdomain": [-0.55, 33.55], "ydomain": [4.5, -0.5],
               "xscale": "linear", "yscale": "linear",
               "axes": [
                  { "position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 20.0, "grid": { "gridOn": false }, "visible": true },
                  { "position": "left", "nticks": 5, "tickvalues": [0, 1, 2, 3, 4], "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 20.0, "grid": { "gridOn": false }, "visible": true }],
               "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el54081370241141008",
               "lines": [
                  { "data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224238944", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data01", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224239520", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224240048", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data02", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224242352", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data03", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370221947440", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2.1, "drawstyle": "default" },
                  { "data": "data02", "xindex": 3, "yindex": 0, "coordinates": "data", "id": "el54081370224180336", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data02", "xindex": 4, "yindex": 0, "coordinates": "data", "id": "el54081370224180144", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data05", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370223825872", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data05", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224208192", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data06", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224208336", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2.1, "drawstyle": "default" },
                  { "data": "data07", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224207088", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data07", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370176263312", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data08", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370176295216", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data08", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224214848", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data09", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224217536", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2.1, "drawstyle": "default" },
                  { "data": "data10", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370223797632", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data10", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224229200", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data11", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224228384", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data11", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224227760", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data12", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224228192", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2.1, "drawstyle": "default" },
                  { "data": "data13", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224127568", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data13", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224126320", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data14", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224165360", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data14", "xindex": 2, "yindex": 1, "coordinates": "data", "id": "el54081370224168192", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default" },
                  { "data": "data15", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224166896", "color": "#3D3D3D", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2.1, "drawstyle": "default" }],
               "paths": [],
               "markers": [
                  { "data": "data04", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el54081370224180384pts", "facecolor": "#3D3D3D", "edgecolor": "#3D3D3D", "edgewidth": 1.0, "alpha": 1, "zorder": 2, "markerpath": [[[0.0, 3.5355339059327378], [2.1213203435596424, 0.0], [0.0, -3.5355339059327378], [-2.1213203435596424, 0.0]], ["M", "L", "L", "L", "Z"]] },
                  { "data": "data04", "xindex": 0, "yindex": 0, "coordinates": "data", "id": "el54081370224208144pts", "facecolor": "#3D3D3D", "edgecolor": "#3D3D3D", "edgewidth": 1.0, "alpha": 1, "zorder": 2, "markerpath": [[[0.0, 3.5355339059327378], [2.1213203435596424, 0.0], [0.0, -3.5355339059327378], [-2.1213203435596424, 0.0]], ["M", "L", "L", "L", "Z"]] },
                  { "data": "data04", "xindex": 0, "yindex": 0, "coordinates": "data", "id": "el54081370224217056pts", "facecolor": "#3D3D3D", "edgecolor": "#3D3D3D", "edgewidth": 1.0, "alpha": 1, "zorder": 2, "markerpath": [[[0.0, 3.5355339059327378], [2.1213203435596424, 0.0], [0.0, -3.5355339059327378], [-2.1213203435596424, 0.0]], ["M", "L", "L", "L", "Z"]] },
                  { "data": "data04", "xindex": 0, "yindex": 0, "coordinates": "data", "id": "el54081370224124448pts", "facecolor": "#3D3D3D", "edgecolor": "#3D3D3D", "edgewidth": 1.0, "alpha": 1, "zorder": 2, "markerpath": [[[0.0, 3.5355339059327378], [2.1213203435596424, 0.0], [0.0, -3.5355339059327378], [-2.1213203435596424, 0.0]], ["M", "L", "L", "L", "Z"]] },
                  { "data": "data04", "xindex": 0, "yindex": 0, "coordinates": "data", "id": "el54081370224168000pts", "facecolor": "#3D3D3D", "edgecolor": "#3D3D3D", "edgewidth": 1.0, "alpha": 1, "zorder": 2, "markerpath": [[[0.0, 3.5355339059327378], [2.1213203435596424, 0.0], [0.0, -3.5355339059327378], [-2.1213203435596424, 0.0]], ["M", "L", "L", "L", "Z"]] }],
               "texts": [
                  { "text": "\ucd5c\uc885 \uc21c\uc704", "position": [0.49999999999999994, -0.09197939661515822], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el54081370225803616" },
                  { "text": "\ub300\ub959", "position": [-0.21169354838709675, 0.4999999999999999], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 20.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el54081370225758944" }],
               "collections": [], "images": [], "sharex": [], "sharey": []
            }],
            "data": {
               "data01": [[4.75, 0.0, 20.0], [1.0, 0.0, 28.0]],
               "data02": [[1.0, -0.2, 28.0, 6.0, 16.0], [1.0, 0.2, 28.0, 5.0, 20.0]],
               "data03": [[10.5, -0.4], [10.5, 0.4]],
               "data04": [],
               "data05": [[5.0, 0.8, 20.0], [5.0, 1.2, 20.0]],
               "data06": [[9.0, 0.6], [9.0, 1.4]],
               "data07": [[20.5, 2.0, 30.5], [12.0, 2.0, 32.0]],
               "data08": [[12.0, 1.8, 32.0], [12.0, 2.2, 32.0]],
               "data09": [[29.0, 1.6], [29.0, 2.4]],
               "data10": [[18.0, 3.0, 26.0], [15.0, 3.0, 30.0]],
               "data11": [[15.0, 2.8, 30.0], [15.0, 3.2, 30.0]],
               "data12": [[19.0, 2.6], [19.0, 3.4]],
               "data13": [[21.0, 4.0, 27.0], [17.0, 4.0, 31.0]],
               "data14": [[17.0, 3.8, 31.0], [17.0, 4.2, 31.0]],
               "data15": [[24.0, 3.6], [24.0, 4.4]]
            },
            "id": "el54081370225957616",
            "plugins": [
               { "type": "reset" },
               { "type": "zoom", "button": true, "enabled": false },
               { "type": "boxzoom", "button": true, "enabled": false }]
         });
   })
});
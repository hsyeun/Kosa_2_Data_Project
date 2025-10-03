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

    mpld3.draw_figure("o-3",
      {
        "width": 1000.0, "height": 500.0,
        "axes": [{
          "bbox": [0.125, 0.09999999999999998, 0.775, 0.78],
          "xlim": [-0.35000000000000003, 7.35], "ylim": [-0.20000000000000018, 26.2],
          "xdomain": [-0.35000000000000003, 7.35], "ydomain": [-0.20000000000000018, 26.2],
          "xscale": "linear", "yscale": "linear",
          "axes": [
            { "position": "bottom", "nticks": 10, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": { "gridOn": false }, "visible": true },
            { "position": "left", "nticks": 8, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": { "gridOn": false }, "visible": true }], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el110561598439764752", "lines": [], "paths": [], "markers": [],
          "texts": [
            { "text": "\ub178\ub974\ub515 \ubcf5\ud569", "position": [49.21818181818182, 59.01090909090909], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598439767392" },
            { "text": "\ub8e8\uc9c0", "position": [49.21818181818182, 93.04727272727273], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454063696" },
            { "text": "\ubc14\uc774\uc560\uc2ac\ub860", "position": [49.21818181818182, 101.55636363636364], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454064752" },
            { "text": "\ubd05\uc2ac\ub808\uc774", "position": [92.69870129870131, 101.55636363636364], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454065664" },
            { "text": "\uc1fc\ud2b8\ud2b8\ub799", "position": [310.1012987012988, 135.59272727272727], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454066576" },
            { "text": "\uc2a4\ub178\ubcf4\ub4dc", "position": [92.69870129870131, 144.1018181818182], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454108512" },
            { "text": "\uc2a4\ucf08\ub808\ud1a4", "position": [92.69870129870131, 76.02909090909091], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454109424" },
            { "text": "\uc2a4\ud0a4 \uc810\ud504", "position": [49.21818181818182, 84.53818181818181], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454110336" },
            { "text": "\uc2a4\ud53c\ub4dc\uc2a4\ucf00\uc774\ud305", "position": [353.5818181818182, 186.64727272727274], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454111248" },
            { "text": "\uc544\uc774\uc2a4\ud558\ud0a4", "position": [49.21818181818182, 263.2290909090909], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454112160" },
            { "text": "\uc54c\ud30c\uc778 \uc2a4\ud0a4", "position": [49.21818181818182, 84.53818181818181], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454158192" },
            { "text": "\uceec\ub9c1", "position": [92.69870129870131, 152.6109090909091], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454158960" },
            { "text": "\ud06c\ub85c\uc2a4\ucee8\ud2b8\ub9ac \uc2a4\ud0a4", "position": [49.21818181818182, 84.53818181818181], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454159872" },
            { "text": "\ud504\ub9ac\uc2a4\ud0c0\uc77c \uc2a4\ud0a4", "position": [49.21818181818182, 127.08363636363637], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454160784" },
            { "text": "\ud53c\uaca8 \uc2a4\ucf00\uc774\ud305", "position": [49.21818181818182, 110.06545454545454], "coordinates": "display", "h_anchor": "end", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598454206816" },
            { "text": "\uba54\ub2ec \ud569\uacc4", "position": [0.49999999999999994, -0.08903133903133903], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598453436768" },
            { "text": "\uc885\ubaa9\ubcc4 \ucc38\uac00 \uc120\uc218 \uc218", "position": [-0.06869772998805257, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598453438208" }],
          "collections": [
            {
              "offsets": "data01", "xindex": 0, "yindex": 1, "paths": [[[[0.0, -0.5], [0.13260155, -0.5], [0.25978993539242673, -0.44731684579412084], [0.3535533905932738, -0.3535533905932738], [0.44731684579412084, -0.25978993539242673], [0.5, -0.13260155], [0.5, 0.0], [0.5, 0.13260155], [0.44731684579412084, 0.25978993539242673], [0.3535533905932738, 0.3535533905932738], [0.25978993539242673, 0.44731684579412084], [0.13260155, 0.5], [0.0, 0.5], [-0.13260155, 0.5], [-0.25978993539242673, 0.44731684579412084], [-0.3535533905932738, 0.3535533905932738], [-0.44731684579412084, 0.25978993539242673], [-0.5, 0.13260155], [-0.5, 0.0], [-0.5, -0.13260155], [-0.44731684579412084, -0.25978993539242673], [-0.3535533905932738, -0.3535533905932738], [-0.25978993539242673, -0.44731684579412084], [-0.13260155, -0.5], [0.0, -0.5]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]]],
              "pathtransforms": [[4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [14.832396974191328, 0.0, 0.0, 14.832396974191328, 0.0, 0.0], [34.92849839314596, 0.0, 0.0, 34.92849839314596, 0.0, 0.0], [14.832396974191328, 0.0, 0.0, 14.832396974191328, 0.0, 0.0], [14.832396974191328, 0.0, 0.0, 14.832396974191328, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [37.68288736283355, 0.0, 0.0, 37.68288736283355, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [14.832396974191328, 0.0, 0.0, 14.832396974191328, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0], [4.47213595499958, 0.0, 0.0, 4.47213595499958, 0.0, 0.0]],
              "alphas": [null], "edgecolors": ["#9E0142", "#C42C4B", "#E1514A", "#F57446", "#FBA55C", "#FDCA78", "#FEE899", "#FEFEBE", "#ECF7A2", "#CCEA9D", "#A1D9A4", "#6EC5A4", "#479FB3", "#3E77B5", "#5E4FA2"], "facecolors": ["#9E0142", "#C42C4B", "#E1514A", "#F57446", "#FBA55C", "#FDCA78", "#FEE899", "#FEFEBE", "#ECF7A2", "#CCEA9D", "#A1D9A4", "#6EC5A4", "#479FB3", "#3E77B5", "#5E4FA2"], "edgewidths": [1.0], "offsetcoordinates": "data", "pathcoordinates": "display", "zorder": 1, "id": "el110561598453968560"
            }],
          "images": [], "sharex": [], "sharey": []
        }],
        "data":
          { "data01": [[0.0, 1.0], [0.0, 5.0], [0.0, 6.0], [1.0, 6.0], [6.0, 10.0], [1.0, 11.0], [1.0, 3.0], [0.0, 4.0], [7.0, 16.0], [0.0, 25.0], [0.0, 4.0], [1.0, 12.0], [0.0, 4.0], [0.0, 9.0], [0.0, 7.0]] }, "id": "el110561598444453792",
        "plugins": [
          { "type": "reset" },
          { "type": "zoom", "button": true, "enabled": false },
          { "type": "boxzoom", "button": true, "enabled": false }]
      });
  })
});
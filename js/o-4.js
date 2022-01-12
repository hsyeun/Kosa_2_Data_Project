function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

// require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://d3js.org/d3.v5.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.7.js", function(){
                 
                 mpld3.draw_figure("o-4", 
                 {"width": 1000.0, "height": 500.0, 
                 "axes": [{"bbox": [0.048920974210729704, 0.045978391324826395, 0.9260790257892703, 0.9061010965328555], 
                 "xlim": [-1.6842187484272135, 1.7128106423045488], "ylim": [-1.1059589801074927, 1.1002837639806626], 
                 "xdomain": [-1.6842187484272135, 1.7128106423045488], "ydomain": [-1.1059589801074927, 1.1002837639806626], 
                 "xscale": "linear", "yscale": "linear", 
                 "axes": [
                   {"position": "bottom", "nticks": 0, "tickvalues": [], "tickformat_formatter": "", "tickformat": "", "scale": "linear", "fontsize": null, "grid": {"gridOn": false}, "visible": true}, 
                   {"position": "left", "nticks": 0, "tickvalues": [], "tickformat_formatter": "", "tickformat": "", "scale": "linear", "fontsize": null, "grid": {"gridOn": false}, "visible": true}], 
                   "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el110561598452614864", "lines": [], 
                   "paths": [
                     
                    {"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598447394240", "dasharray": "none", "alpha": 1, "facecolor": "#FFD175", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598456345072", "dasharray": "none", "alpha": 1, "facecolor": "#FFDF9E", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data03", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598456347904", "dasharray": "none", "alpha": 1, "facecolor": "#FFEABF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data04", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598444361136", "dasharray": "none", "alpha": 1, "facecolor": "#8FFF9C", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data05", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598444360080", "dasharray": "none", "alpha": 1, "facecolor": "#C7FFCD", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data06", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598457044560", "dasharray": "none", "alpha": 1, "facecolor": "#7A5CFF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data07", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598457037056", "dasharray": "none", "alpha": 1, "facecolor": "#937AFF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data08", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598457039360", "dasharray": "none", "alpha": 1, "facecolor": "#AA96FF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data09", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598456995648", "dasharray": "none", "alpha": 1, "facecolor": "#C3B5FF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data10", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598457021776", "dasharray": "none", "alpha": 1, "facecolor": "#DCD4FF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data11", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"], "id": "el110561598457025248", "dasharray": "none", "alpha": 1, "facecolor": "#FFB31C", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data12", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "L", "L", "Z"], "id": "el110561598457028560", "dasharray": "none", "alpha": 1, "facecolor": "#1CFC36", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}, 
                     {"data": "data13", "xindex": 0, "yindex": 1, "coordinates": "data", "pathcodes": ["M", "C", "C", "C", "C", "L", "L", "Z"], "id": "el110561598457008080", "dasharray": "none", "alpha": 1, "facecolor": "#2F00FF", "edgecolor": "none", "edgewidth": 1.0, "zorder": 1}], 
                     "markers": [], 
                     "texts": [
                       
                      {"text": "\uc1fc\ud2b8\ud2b8\ub799", "position": [-0.5790753920420589, 0.9352388413294949], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598447392704"}, 
                       {"text": "17.6%", "position": [-0.44746734839613633, 0.7226845592091551], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456347424"}, 
                       {"text": "\uc2a4\ucf08\ub808\ud1a4", "position": [-1.0580082159868671, 0.30102925921625445], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456346800"}, 
                       {"text": "5.9%", "position": [-0.817551803262579, 0.2326135184852875], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456348144"}, 
                       {"text": "\uc2a4\ud53c\ub4dc \uc2a4\ucf00\uc774\ud305", "position": [-1.095307590920018, -0.10149522783355992], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598444362336"}, 
                       {"text": "5.9%", "position": [-0.8463740475291048, -0.07842813059865993], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598444362624"}, 
                       {"text": "\uc1fc\ud2b8\ud2b8\ub799", "position": [-0.8778189290156899, -0.6628981278158411], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598444363200"}, 
                       {"text": "11.8%", "position": [-0.6783146269666694, -0.5122394624031499], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598444360704"}, 
                       {"text": "\uc2a4\ud53c\ub4dc \uc2a4\ucf00\uc774\ud305", "position": [-0.20212443237916766, -1.0812704166097393], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457041296"}, 
                       {"text": "11.8%", "position": [-0.15618706138390226, -0.8355271401075258], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457044704"}, 
                       {"text": "\ubd05\uc2ac\ub808\uc774", "position": [0.39736587023118863, -1.0257194378461443], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457042256"}, 
                       {"text": "5.9%", "position": [0.3070554451786457, -0.7926013837902024], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457042976"}, 
                       {"text": "\uc1fc\ud2b8\ud2b8\ub799", "position": [0.7410652387910361, -0.8129097808832076], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457039504"}, 
                       {"text": "5.9%", "position": [0.5726413208839825, -0.6281575579552059], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457038976"}, 
                       {"text": "\uc2a4\ub178\ubcf4\ub4dc", "position": [0.9846796397307251, -0.490312152714747], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456994544"}, 
                       {"text": "5.9%", "position": [0.7608888125191966, -0.3788775725523044], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456992432"}, 
                       {"text": "\uc2a4\ud53c\ub4dc \uc2a4\ucf00\uc774\ud305", "position": [0.9846795995626773, 0.49031223338306157], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598456992144"}, 
                       {"text": "23.5%", "position": [0.7608887814802505, 0.3788776348869112], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457023552"}, 
                       {"text": "\uceec\ub9c1", "position": [0.20212441972468806, 1.081270418975271], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457022016"}, 
                       {"text": "5.9%", "position": [0.15618705160544077, 0.8355271419354366], "coordinates": "data", "h_anchor": "middle", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457021152"}, 
                       {"text": "\uae08\uba54\ub2ec \n 29.41%", "position": [-0.335167245215513, 0.25310653435785524], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598457027072"}, 
                       {"text": "\ub3d9\uba54\ub2ec \n 23.53%", "position": [-0.2211014798918584, -0.3570912146631867], "coordinates": "data", "h_anchor": "end", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el110561598458384880"}, 
                       {"text": "\uc740\uba54\ub2ec \n 47.06%", "position": [0.41820835062905104, 0.03875274782681438], "coordinates": "data", "h_anchor": "start", "v_baseline": "central", "rotation": -0.0, "fontsize": 15.0, "color": "#ffffff", "alpha": 1, "zorder": 3, "id": "el110561598457005920"}], "collections": [], "images": [], "sharex": [], "sharey": []}], 
                       "data": 
                     {"data01": [[6.123233995736766e-17, 1.0], [-0.18597462827076053, 1.0], [-0.36831336016493565, 0.9481201564593288], [-0.5264321745836898, 0.8502171284813589], [-0.684550989002444, 0.752314100503389], [-0.8122672831922652, 0.6122159937602938], [-0.8951633036294846, 0.4457383311261744], [0.0, 0.0], [6.123233995736766e-17, 1.0]], 
                     "data02": [[-0.8951633036294846, 0.4457383311261744], [-0.9226402413762759, 0.39055719760127466], [-0.9449560669489564, 0.332953406862572], [-0.9618256508971519, 0.27366296292386766], [-0.9786952348453474, 0.2143725189851633], [-0.9900464222660831, 0.1536490200527247], [-0.9957341789628948, 0.09226833067249916], [0.0, 0.0], [-0.8951633036294846, 0.4457383311261744]], 
                     "data03": [[-0.9957341789628948, 0.09226833067249916], [-1.0014219356597067, 0.03088764129227351], [-1.0014219338522614, -0.030887699892203704], [-0.9957341735636528, -0.09226838893960036], [-0.9900464132750442, -0.153649077986997], [-0.9786952223009684, -0.21437257625520104], [-0.9618256348832903, -0.2736630192067526], [0.0, 0.0], [-0.9957341789628948, 0.09226833067249916]], 
                     "data04": [[-0.9618256348832903, -0.2736630192067526], [-0.9280147710246903, -0.39249586586252017], [-0.8724722754558404, -0.5040402251012176], [-0.7980172081960815, -0.602634661650765], [-0.7235621409363225, -0.7012290982003123], [-0.6314758359658053, -0.7851768517668267], [-0.5264321347821529, -0.8502171531254267], [0.0, 0.0], [-0.9618256348832903, -0.2736630192067526]], 
                     "data05": [[-0.5264321347821529, -0.8502171531254267], [-0.42138843359850064, -0.9152574544840266], [-0.3051950850720196, -0.9602709930051311], [-0.1837494839810615, -0.9829731060088539], [-0.06230388289010341, -1.0056752190125766], [0.06230395350868512, -1.0056752146375914], [0.183749553005499, -0.9829730931059504], [0.0, 0.0], [-0.5264321347821529, -0.8502171531254267]], 
                     "data06": [[0.183749553005499, -0.9829730931059504], [0.24434360247349884, -0.9716460999434448], [0.3037607091294641, -0.9547404732146841], [0.36124170021017143, -0.9324722162237675], [0.41872269129087875, -0.9102039592328509], [0.4740217080159888, -0.8826683181890231], [0.5264321944844575, -0.8502171161593245], [0.0, 0.0], [0.183749553005499, -0.9829730931059504]], 
                     "data07": [[0.5264321944844575, -0.8502171161593245], [0.5788426809529265, -0.8177659141296258], [0.6281404660424771, -0.7805379520080836], [0.673695671628214, -0.7390088917120075], [0.7192508772139509, -0.6974798314159313], [0.7608686537104223, -0.6518273018261227], [0.7980172505131264, -0.6026346056139409], [0.0, 0.0], [0.5264321944844575, -0.8502171161593245]], 
                     "data08": [[0.7980172505131264, -0.6026346056139409], [0.8351658473158304, -0.5534419094017592], [0.8676863717451262, -0.5009194544962418], [0.8951633088461137, -0.4457383206497699], [0.9226402459471013, -0.3905571868032981], [0.9449560708456247, -0.33295339580342576], [0.9618256540999237, -0.2736629516672908], [0.0, 0.0], [0.7980172505131264, -0.6026346056139409]], 
                     "data09": [[0.9618256540999237, -0.2736629516672908], [1.0300138295370418, -0.03400633741932918], [1.006227220236814, 0.2226919425500924], [0.8951632723297065, 0.4457383939846014], [0.784099324422599, 0.6687848454191104], [0.5935842946140635, 0.8424622277644049], [0.3612416238188651, 0.9324722458179169], [0.0, 0.0], [0.9618256540999237, -0.2736629516672908]], 
                     "data10": [[0.3612416238188651, 0.9324722458179169], [0.30376063091386624, 0.9547404980997946], [0.24434352287293487, 0.9716461199609029], [0.18374947247698914, 0.9829731081593372], [0.12315542208104341, 0.9943000963577716], [0.06164360334650298, 1.0000000028857465], [-4.681337864490991e-08, 0.9999999999999989], [0.0, 0.0], [0.3612416238188651, 0.9324722458179169]], 
                     "data11": [[4.286263797015736e-17, 0.7], [-0.10827680950058911, 0.7], [-0.21509143688260718, 0.6748774268379423], [-0.31201686112225485, 0.6266142979340764], [-0.4089422853619026, 0.5783511690302104], [-0.4933607229686651, 0.5082509857417522], [-0.5586120753591884, 0.4218442239297585], [-0.6238634277497118, 0.3354374621177648], [-0.6681853718352742, 0.23505781489025895], [-0.6880811772168745, 0.12862462268104088], [-0.7079769825984749, 0.022191430471822832], [-0.7029092989238497, -0.08742073530924474], [-0.6732779354505392, -0.19156414496314186], [0.0, 0.0], [4.286263797015736e-17, 0.7]], 
                     "data12": [[-0.6732779354505392, -0.19156414496314186], [-0.6255461930110692, -0.3593237693505059], [-0.5167955781660738, -0.5033328334202835], [-0.36850246648643065, -0.5951520244386446], [-0.22020935480678758, -0.6869712154570056], [-0.04282340148236789, -0.7201303820117417], [0.1286247193152535, -0.6880811591528082], [0.0, 0.0], [-0.6732779354505392, -0.19156414496314186]], 
                     "data13": [[0.1286247193152535, -0.6880811591528082], [0.30007284011287483, -0.6560319362938746], [0.4535018272025831, -0.5610327116441748], [0.5586120951071414, -0.4218441977792393], [0.6637223630116996, -0.2826556839143039], [0.71310718835686, -0.10908596942169498], [0.697013917715085, 0.06458791304469064], [0.6809206470733101, 0.23826179551107624], [0.6004833124112843, 0.3998017037563363], [0.4715869035434033, 0.5173062849089936], [0.3426904946755224, 0.6348108660616507], [0.17441785444341285, 0.700000016330181], [-6.553872969546209e-08, 0.699999999999997], [0.0, 0.0], [0.1286247193152535, -0.6880811591528082]]}, 
                     "id": "el110561598452370016", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
            })
         });
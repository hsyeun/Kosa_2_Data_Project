Highcharts.addEvent(
  Highcharts.Series,
  'afterSetOptions',
  function(e) {
    var colors = Highcharts.getOptions().colors,
      i = 0,
      nodes = {};

    if (
      this instanceof Highcharts.seriesTypes.networkgraph &&
      e.options.id === 'lang-tree'
    ) {
      e.options.data.forEach(function(link) {

        if (link[0] === '2022년') {
          nodes['2022년'] = {
            id: '2022년',
            marker: {
              radius: 20
            }
          };
          nodes[link[1]] = {
            id: link[1],
            marker: {
              radius: 10
            },
            color: colors[i++]
          };
        } else if (nodes[link[0]] && nodes[link[0]].color) {
          nodes[link[1]] = {
            id: link[1],
            color: nodes[link[0]].color
          };
        }
      });

      e.options.nodes = Object.keys(nodes).map(function(id) {
        return nodes[id];
      });
    }
  }
);

Highcharts.chart('container', {
  chart: {
    type: 'networkgraph',
    height: '100%'
  },
  title: {
    text: 'The Indo-European Language Tree'
  },
  subtitle: {
    text: 'A Force-Directed Network Graph in Highcharts'
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        friction: -0.9
      }
    }
  },
  series: [{
    dataLabels: {
      enabled: true,
      linkFormat: ''
    },
    id: 'lang-tree',
    data: [
      ['2022년', 'Balto-Slavic'],
      ['2022년', 'Germanic'],
      ['2022년', 'Celtic'],
      ['2022년', 'Italic'],
      ['2022년', 'Hellenic'],
      ['2022년', 'Anatolian'],
      ['2022년', 'Indo-Iranian'],
      ['2022년', 'Tocharian'],
      // Leaves:
      ['2022년', 'Phrygian'],
      ['2022년', 'Armenian'],
      ['2022년', 'Albanian'],
      ['2022년', 'Thracian']
    ]
  }]
});
/*TypeIt*/
$(document).ready(function(){
    $('.prointro').typeIt({
        strings: ["Hi, I'm Prasad", "QA Engineer", "Manual | API | SQL | Automation", "WEB & Mobile Application Testing"],
        speed: 50,
        autoStart: true
    });
});

/*skills
var chart = AmCharts.makeChart( "skill-chart", {
    "type": "radar",
    "theme": "dark",
    "dataProvider": [ 
      { "Technology": "Manual Testing",
        "Percentage": 90  }, 
      { "Technology": "API",
        "Percentage": 80  },
      { "Technology": "SQL",
        "Percentage": 60  },
      { "Technology": "Automation",
        "Percentage": 60  } 
     ],
  
    "valueAxes": [ 
      { "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.15 } 
    ],
    
    "startDuration": 2,
    "graphs": [ 
      { "balloonText": "[[value]]",
        "bullet": "round",
        "valueField": "Percentage" }
    ],
  
    "categoryField": "Technology",
    "export": {
      "enabled": true
    }
  
  });
  */
  TESTER = document.getElementById('skill-chart');
  data = [{
  type: 'scatterpolar',
  r: [80, 70, 60, 60,80],
  theta: ['Manual','API','SQL', 'Automation','Manual'],
  fill: 'toself'
}]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 100]
    }
  },
  showlegend: false
}
Plotly.newPlot("TESTER", data, layout)


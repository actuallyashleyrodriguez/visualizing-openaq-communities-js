const openAQRoute = "https://cors-anywhere.herokuapp.com/https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&order_by=lastUpdated&dumpRaw=false"

document.addEventListener("DOMContentLoaded", () => {
    showCommunity(), criteriaChart()
});

let showCommunity = () => {
    fetch(openAQRoute)
    .then(response => response.json())
    .then(commInfo => commInfo.results.forEach(commAttr =>  {
        if (commAttr.hasOwnProperty('coordinates')) {
        let thisCommunity = new Community(commAttr, commAttr.coordinates, commAttr.parameters)
      thisCommunity.renderCommunity(), thisCommunity.filterCommunity(), thisCommunity.filterCriteriaCountry()
        }
   })
    )
}

let criteriaChart = () => Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Air Pollution in communities with >=5 µg/m³ (based on PM2.5)'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} PM2.5>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'US',
        data:  [{
            name: "KIT5153", 
            value: 10.4846820174291
        }, {
            name: "Waterloo Pri", 
            value: 12.4990254849519
        }, {
            name: "Pointe Woodworth", 
            value: 6.87268375891657
        }, {
            name: "Rinda Drive", 
            value: 5.45188255962387
        }, {
            name: "Rehoboth", 
            value: 9.65888581952117
        }, {
            name: "USCEHC Lincoln Heights", 
            value: 56.2716622628626
        }, {
            name: "Bel Air", 
            value: 8.59996021608945
        }, {
            name: "Whitney Ranch", 
            value: 12.552242919597
        }, {
            name: "Bonny Slope", 
            value: 5.77926198201158
        }, {
            name: "MERCED", 
            value: 6.21467508635579
        }
    ]
    },  {
        name: 'Canada',
        data: [{
            name: "NAPS-SNPA_AvinL5-1", 
            value: 7.41430168743909
        },{
            name: "ACA_BelgraviaCL", 
            value: 8.81092249480763
        }, {
            name: "cleanairplan.ca-RailwaySouth", 
            value: 8.53025490568727
        }]
    }, {
        name: 'United Kingdom',
        data: [criteriaDataPerCountry[4].data]
    },{
        name: 'Bosnia',
        data: [criteriaDataPerCountry[10].data]
    },
    ]
});





const openAQRoute = "https://cors-anywhere.herokuapp.com/https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&order_by=lastUpdated&dumpRaw=false"

document.addEventListener("DOMContentLoaded", () => {
    showCommunity()
});

let showCommunity = () => {
    fetch(openAQRoute)
    .then(response => response.json())
    .then(commInfo => commInfo.results.forEach(commAttr =>  {
        let thisCommunity = new Community(commAttr, commAttr.coordinates, commAttr.parameters)
      thisCommunity.renderCommunity()
       
   })
    )
}

var chart = JSC.chart('chartDiv', { 
    debug: true, 
    type: 'map', 
    legend_visible: false, 
    
    title: { 
      position: 'full', 
      label_text: 'World Regions Projections'
    }, 
    
    mapping_projection: false, 
    
    series: [ 
      { 
        /* 
         * The world must be specified in order to load the correct map. This however only needs to be specified once. 
         * Alternatively, setting mappingReferenceLayer to world also works. 
         * */
        map: 'world.region:africa'
      }, 
      { map: 'region:europe' }, 
      { map: 'region:asia' }, 
      { map: 'region:americas' } 
    ], 
    toolbar: { 
      items: { 
        resetZoom_position: 'inside bottom left', 
        Projection: { 
          type: 'select', 
          value: 'none', 
          items: { 
            none: {}, 
            mercator: {}, 
            lambertConformalConic: {} 
          }, 
          events_change: projectionChanged 
        } 
      } 
    } 
  }); 
    
  function projectionChanged(val) { 
    chart.options({ 
      mapping_projection: { 
        type: val, 
        parallels: [11.5, 0] 
      } 
    }); 
  } 
    
  function setProjection(val) { 
    chart.options({ mapping_projection_type: val }); 
  } 
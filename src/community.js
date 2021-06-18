class Community {
    constructor(info, infoCoordinates, infoParams) {
        this.name = info.name
        this.country = info.country
        this.latitude = infoCoordinates.latitude
        this.longitude = infoCoordinates.longitude
        for (let i = 0; i < infoParams.length; i++) {
                if (infoParams[i].unit == "µg/m³" && infoParams[i].parameter == "pm25") {
                this.measurement= infoParams[i].unit
                this.average= infoParams[i].average
                this.parameter = infoParams[i].displayName
            }
        }
        Community.all.push(this)
        console.log(this)
    }

    renderCommunity() {

        const communityDiv = document.createElement("div")
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const li = document.createElement("li")
       
            
        communityDiv.setAttribute("class", this.name)
        ul.setAttribute("class", "community-info")
        h3.innerText = `${this.name} - ${this.country}` 
        li.innerText = `Average of ${this.average} ${this.parameter}`

        ul.appendChild(li)
        h3.appendChild(ul)
        communityDiv.appendChild(h3)
    
        
        document.querySelector(".community-container").appendChild(communityDiv);
    }
    filterCommunity() {
        this.average >=5 ?  communitiesMeetingCriteria.push(this) : communitiesNotMeetingCriteria.push(this)
        
    }
    filterCriteriaCountry() {
        let update = {
            name: this.name,
            value: this.average
        }
        if(this.average >=5)
        switch (this.country) {
            case 'US':
                criteriaDataPerCountry[0].data.push(update);
              break;
            case 'CA':
                criteriaDataPerCountry[1].data.push(update);
            break;
            case 'GB':
                criteriaDataPerCountry[2].data.push(update);
            break;
            case 'RS':
                criteriaDataPerCountry[3].data.push(update);
            break;
            case 'GR':
                criteriaDataPerCountry[4].data.push(update);
            break;
            case 'NO':
                criteriaDataPerCountry[5].data.push(update);
            break;
            case 'KR':
                criteriaDataPerCountry[6].data.push(update);
            break;
            case 'AU':
                criteriaDataPerCountry[7].data.push(update);
            break;
            case 'BA':
                criteriaDataPerCountry[8].data.push(update);
            break;
            case 'IN':
                criteriaDataPerCountry[9].data.push(update);
            break;
            case 'BR':
                criteriaDataPerCountry[10].data.push(update);
            break;
            case 'MX':
                criteriaDataPerCountry[11].data.push(update);
            break;
          }
    }
    
}

Community.all = []
let communitiesMeetingCriteria = []
let communitiesNotMeetingCriteria = []
let criteriaDataPerCountry = [{
    name: 'US',
    data:  []
}, {
    name: 'Canada',
    data: []
}, {
    name: 'United Kingdom',
    data: []
}, {
    name: 'Serbia',
    data: []
}, {
    name: 'Greece',
    data: []
}, {
    name: 'Norway',
    data: []
}, {
    name: 'South Korea',
    data: []
}, {
    name: 'Australia',
    data: []
}, {
    name: 'Bosnia',
    data: []
},
{
    name: 'India',
    data: []
},
{
    name: 'Brazil',
    data: []
},
{
    name: 'Mexico',
    data: []
}]



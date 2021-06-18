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
}

Community.all = []
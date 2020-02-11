const tourStops=[
    { 		location: "Denver, Colorado ",
                venue: " Pepsi Center ",
                date: "04/20/2020"
    },
    {
                location: "Las Vegas, Nevada",
                venue: " Flamingo Hotel",
                date: "4/24/2020"
    },
    {
                location: "West Hollywood, California",
                venue: " Troubadour ",
                date: "5/02/2020"
    },
    {
                location: "Portland,Oregon",
                venue: " Moda Center ",
                date: "5/15/2020"
    },
    {
                location: "Washington, D.C. ",
                venue: " Capital One Arena",
                date: "5/22/2020"
    },
    {
                location: "Bangor, Maine ",
                venue: " Darlings Waterfront Pavilion ",
                date: "6/05/2020"
    },
    {
                location: "Boston, Massachusetts",
                venue: " Wilbur Theater ",
                date: "6/20/2020"
    },
    {
                location: "Anchorage,Alaska ",
                venue: "Atwood Concert Hall Concerts ",
                date: "07/09/2020"
    }
    ];
    
    const printToDom =(divId,textToPrint)=>{
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML= textToPrint;
    };
    const buildTourDates=()=>{
        let domString='';
        for(let i = 0; i <tourStops.length;i++){
            domString += '<div>';
            domString += `<p>${tourStops[i].date}</p>`;
            domString += `<p>${tourStops[i].location}</p>`;
            domString += `<p>${tourStops[i].venue}</p>`;
            domString += `<button id= "tickets" class="btn btn-success">Purchase Tickets</button>`;
            domString += '</div>';
    }
    printToDom('tourdates',domString)
    };
    
    const btnPurchase= (e)=>{
    alert("ticket button clicked");
    };
    
    const eventsForTickets = () => {
        document.getElementById("tickets").onclick= btnPurchase;
    };
    
    const init=()=> {
     buildTourDates(tourStops);
     eventsForTickets();
    };
    
    init();
    
    
    
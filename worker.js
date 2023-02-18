
try{
    var request = new XMLHttpRequest();
    const d = new Date();
    let D = d.getDate(); 
    console.log(D);
    let URL = ('https://quotes-8bm1.onrender.com/'+D);
    URL = 'https://cors-anywhere.herokuapp.com/' + URL; // use the cors-anywhere service
    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.send();
    request.onreadystatechange = e => {
        // the rest of your code
    };
    
    if (request.status === 200) {
        console.log('success', request.responseText);
        let GtData = request.responseText;
        GtData = GtData.split(",,");
        Quote = GtData[0];
        author = GtData[1];
        flag = false;
        
        var elem = document.getElementById("quote");
        elem.innerHTML  = Quote;
        
        var elem2 = document.getElementById("author");
        elem2.innerHTML  = author;
        
        
        
    } else {
        console.warn('error');
    }
}
catch{
    console.warn("ERROR :(");
}
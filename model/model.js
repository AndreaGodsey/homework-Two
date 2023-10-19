export function changePageContent(pageID)
{
    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);
        });
    } else{
        $.get(`pages/home/home.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);
        });
    }
    }
const database = {
    "movieName": [],
    "movieYearOfRelease": [],
    "movieCreator": []
}

 const tableFilm = {
     "field": []
 }

/**Предложение начала работы */
let start = confirm("Do you want to get started with the movie database?") 

/**Ввод имени пользователя, предлогается если 'start' = true*/
if (start == true) {
    var user = prompt("Please, enter your name")
    for (var i =0; user == ""; i++){
        user = prompt("You can not save an empty field.\nPlease, enter your name")
    }
}

do {
    if (start == false) break  
       const movie = prompt("Hallo "+ user)
        if (movie == "end") break

            switch(movie){
                //добавление нового фильма   
                case "movie add":{
                    addMovie(database)
                    break
                }
                default:{
                     alert(movie + " no found.\nTo view the available commands, enter 'help'")
                     break
                }
            }

} while(true)
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

/**функция для ввода нового фильма */
const addMovie = function (database) {
    //ввод имени фильма и запись в 'database.movieName'
    var filmName = prompt("Please, enter the name of the movie:")
    //проверка на пустое поле
    for (var i =0; filmName == ""; i++){
        filmName = prompt("You can not save an empty field.\nPlease, enter the name of the movie:")
    }
    database.movieName.push(filmName)

    //ввод года фильма и запись в 'database.movieYearOfRelease'
    var yearOfRelease = prompt("Please enter the year of release of the movie \"" + filmName +"\"")
    yearOfRelease = +yearOfRelease
    //проверка на валидность заполнения года
    for (var i =0; yearOfRelease.length !== 4 && yearOfRelease < 1881; i++) {
         yearOfRelease = prompt("The field must be 4-digit. The minimum year '1881'")
         yearOfRelease = +yearOfRelease
    }
    database.movieYearOfRelease.push(yearOfRelease)

    //запись в 'database.movieCreator' пользователя
    database.movieCreator.push(user)

    //запись в 'tableFilm.field' данных о новом фильме, необходимо для вывода сохраненных фильмов
    tableFilm.field.push(filmName + "-" + yearOfRelease + "-" + user)
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
                //просмотр всех фильмов
                case "movie view": {
                    alert("Display format: \"Name movie - Year of release -The person who added data\"\n" + tableFilm.field.join ("\n"))
                    break
                }
                //просмотр количества внесенных фильмов
                 case "movie numbers": {
                    alert("There are "+ tableFilm.field.length +" films in the database")
                    break
                }
                default:{
                     alert(movie + " no found.\nTo view the available commands, enter 'help'")
                     break
                }
            }

} while(true)
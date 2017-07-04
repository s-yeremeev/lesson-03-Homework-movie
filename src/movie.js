const database =[]
let j = 0 //переменная используется для записи объекта в массив

/**Предложение начала работы */
let start = confirm("Do you want to get started with the movie database?") 

/**Ввод имени пользователя, предлогается если 'start' = true*/
if (start == true) {
    var user = prompt("Please, enter your name")    
    for (let i =0; !user; i++){
        user = prompt("You can not save an empty field.\nPlease, enter your name")
    }
}

do {
    if (start == false) break  
       const movie = prompt("Hallo "+ user +"\nAvailable commands: 'movie add', 'movie view', 'movie numbers', 'filter year', 'filter name', 'end'\nFor a more detailed description, enter the command 'help'.")
        if (movie == "end") break

            switch(movie){
                //добавление нового фильма   
                case "movie add":{
                    addMovie()
                    break
                }
                //просмотр всех фильмов
                case "movie view": {
                   visibleResult(movieView())
                    break
                }
                //просмотр количества внесенных фильмов
                 case "movie numbers": {
                    alert("There are "+ j +" films in the database")
                    break
                }
                //поиск фильма по году
                 case "filter year": {
                  visibleResult(filterYear())
                    break
                }
                //поиск фильма по названию
                case "filter name": {
                   visibleResult(filterName())
                    break
                }
                //вывод помощника по доступных операциям
                case "help":{
                    alert("1. To add a new movie, enter the command 'movie add'.\n2. To view movies from the database, enter the command 'movie view'.\n3. To search for movies by year of release, enter the command 'filter year'.\n4. To search for movies by name, enter the command 'filter name'.\n5. To check the number of available movies, enter 'movie numbers'.\n6. Shutdown 'end'.")
                    break  
                }
                default:{
                     alert(movie + " no found.\nTo view the available commands, enter 'help'")
                     break
                }
            }

} while(true)
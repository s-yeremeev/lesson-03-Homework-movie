/**функция для ввода нового фильма */
const addMovie = function (database) {
    //ввод имени фильма и запись в 'database.movieName'
    let filmName = prompt("Please, enter the name of the movie:")
    //проверка на пустое поле
    for (let i =0; !filmName; i++){
        filmName = prompt("You can not save an empty field.\nPlease, enter the name of the movie:")
    }
    database.movieName.push(filmName)

    //ввод года фильма и запись в 'database.movieYearOfRelease'
    let yearOfRelease = +prompt("Please enter the year of release of the movie \"" + filmName +"\"")
    //проверка на валидность заполнения года
    for (let i =0; yearOfRelease.length !== 4 &&  yearOfRelease < 1881 || yearOfRelease > 2017; i++) {
         yearOfRelease = +prompt("The field must be 4-digit.\nThe minimum year '1881'\nYou can not specify the future")
    }
    database.movieYearOfRelease.push(yearOfRelease)
}

/**Функция для поиска фильмов по году */
 const filterYear = function (database) {
    let filterY = +prompt("Enter a year to search for:")
    //проверка на валидность заполнения года
    for (let i =0; filterY.length !== 4 && filterY < 1881 || filterY > 2017; i++) {
        filterY = +prompt("The field must be 4-digit.\nThe minimum year '1881'\nYou can not specify the future")
    }
    let result = { "find": []}
    for (let i = 0; i < database.movieYearOfRelease.length; i++) {      
        if(database.movieYearOfRelease[i] == filterY) {
            result.find.push(database.movieName[i] + "-" + database.movieYearOfRelease[i])
         }        
    }
   visibleResult(result)
 }

/**Функция для поиска фильмов по названию */
 const filterName = function (database) {
    let filterN = prompt("Enter a name to search for:")
    //проверка на пустое поле
    for (let i =0; !filterN; i++){
        filterN = prompt("You can not save an empty field.\nnter a name to search for:")
    }
    let result = { "find": []}
    for (let i = 0; i < database.movieName.length; i++) {      
        if(database.movieName[i] == filterN) {
            result.find.push(database.movieName[i] + "-" + database.movieYearOfRelease[i])
         }        
    }
   visibleResult(result)
 }

const movieView = function(database){
    let result = { "find": []}
    for (let i = 0; i < database.movieYearOfRelease.length; i++) {      
         result.find.push(database.movieName[i] + "-" + database.movieYearOfRelease[i])
    }
     visibleResult(result)
}


 const visibleResult = function (result) {
 //вывод в aler фильма,года и пользователя. Каждый новый фильм с новой строки
    if(result.find.length == 0){
        alert("There are no movies on this condition.")
    } else {
        alert("List of available movies\n" + result.find.join ("\n"))
    }
}


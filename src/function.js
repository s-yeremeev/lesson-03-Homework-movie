/**функция для ввода нового фильма */
function addMovie() {
    //ввод имени фильма 
    let filmName = prompt("Please, enter the name of the movie:")
    //проверка на пустое поле
    for (let i = 0; !filmName; i++){
        filmName = prompt("You can not save an empty field.\nPlease, enter the name of the movie:")
    }
    //ввод года фильма 
    let yearOfRelease = +prompt("Please enter the year of release of the movie \"" + filmName +"\"")
    //проверка на валидность заполнения года
    for (let i = 0; yearOfRelease.length !== 4 &&  yearOfRelease < 1881 || yearOfRelease > 2017; i++) {
         yearOfRelease = +prompt("The field must be 4-digit.\nThe minimum year '1881'\nYou can not specify the future")
    }
    //запись нового объекта в массив
    database[j] = {
        name: filmName,
        year: yearOfRelease
    }
    j++  
}

/**Функция для поиска фильмов по году */
 function filterYear() {
    let filterY = +prompt("Enter a year to search for:")
    //проверка на валидность заполнения года
    for (let i =0; filterY.length !== 4 && filterY < 1881 || filterY > 2017; i++) {
        filterY = +prompt("The field must be 4-digit.\nThe minimum year '1881'\nYou can not specify the future")
    }
    let result = { "find": []}
    for (let i = 0; i < j; i++) {      
        if(database[i].year == filterY) {
            result.find.push(database[i].name + "-" + database[i].year)
         }        
    }
    return result
 }

/**Функция для поиска фильмов по названию */
 function filterName() {
    let filterN = prompt("Enter a name to search for:")
    //проверка на пустое поле
    for (let i =0; !filterN; i++){
        filterN = prompt("You can not save an empty field.\nnter a name to search for:")
    }
    let result = { "find": []}
    for (let i = 0; i < j; i++) {      
        if(database[i].name == filterN) {
            result.find.push(database[i].name + "-" + database[i].year)
         }     
    }
    return result
 }

 function movieView(){
    let result = { "find": []}
    for (let i = 0; i < j; i++) {  
        result.find.push(database[i].name + "-" + database[i].year)
    }
    return result
}
   
function visibleResult(result) {    
 //вывод в aler фильма,года и пользователя. Каждый новый фильм с новой строки
    if(result.find.length == 0){
        alert("There are no movies on this condition.")
    } else {
        alert("List of available movies\n" + result.find.join ("\n"))
    }
}
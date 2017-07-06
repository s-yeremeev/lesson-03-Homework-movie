/**функция для ввода нового фильма */
function addMovie() {
    //ввод имени фильма 
    let filmName = prompt(MOVIE_ADD_NAME)
    //проверка на пустое поле
    for (let i = 0; !filmName; i++){
        filmName = prompt(MESSAGE_EMPTY_FIELD + "\n" + MOVIE_ADD_NAME)
    }
    //ввод года фильма 
    let yearOfRelease = +prompt(MOVIE_ADD_YEAR)
    //проверка на валидность заполнения года
    for (let i = 0; yearOfRelease.length !== 4 &&  yearOfRelease < 1881 || yearOfRelease > 2017; i++) {
         yearOfRelease = +prompt(MOVIE_VALID_YEAR)
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
    let filterY = +prompt(MOVIE_ADD_YEAR)
    //проверка на валидность заполнения года
    for (let i =0; filterY.length !== 4 && filterY < 1881 || filterY > 2017; i++) {
        filterY = +prompt(MOVIE_VALID_YEAR)
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
    let filterN = prompt(MOVIE_ADD_NAME)
    //проверка на пустое поле
    for (let i =0; !filterN; i++){
        filterN = prompt(MESSAGE_EMPTY_FIELD + "\n" + MOVIE_ADD_NAME)
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
        alert(NO_FOUND_TEXT)
    } else {
        alert(result.find.join ("\n"))
    }
}
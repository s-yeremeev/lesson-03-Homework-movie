const database =[]
let j = 0 //переменная используется для записи объекта в массив

let start = confirm(START_TEXT) 

if (start == true) {
    var user = prompt(ENTER_NAME)    
    for (let i =0; !user; i++){
        user = prompt(MESSAGE_EMPTY_FIELD + "\n" + ENTER_NAME)
    }
}

do {
    if (start == false) break  
       const movie = prompt(HALLO + user +"\n" + AVAILABLE_COMANDS)
        if (movie == "end") break

            switch(movie){
                case "movie add":{
                    addMovie()
                    break
                }
                case "movie view": {
                   visibleResult(movieView())
                    break
                }
                 case "movie numbers": {
                    alert("There are "+ j +" films in the database")
                    break
                }
                 case "filter year": {
                  visibleResult(filterYear())
                    break
                }
                case "filter name": {
                   visibleResult(filterName())
                    break
                }
                case "help":{
                    alert(HELP_TEXT)
                    break  
                }
                default:{
                     alert( movie + NO_FOUND_TEXT)
                     break
                }
            }

} while(true)
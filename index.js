const writeCards = (arr,event) =>
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }
    return messages
   

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"))


function countDown(number) {
    while(number > 0){
        console.log(number)
        number = number - 1
    }
}
countDown(10);

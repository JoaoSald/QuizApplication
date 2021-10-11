
const form = document.querySelector('.quiz-form')

const correctAnswers = ['A','B','A','B']

form.addEventListener('submit',evento =>{
    
    evento.preventDefault()
    let score = 0

    const UserAnswers = [
        form.inputQuestion1.value, 
        form.inputQuestion2.value, 
        form.inputQuestion3.value, 
        form.inputQuestion4.value
    ]

    UserAnswers.forEach( (item, index) =>{
        if(item === correctAnswers[index]){
            score += 25
        }
    })
    console.log(score)
})
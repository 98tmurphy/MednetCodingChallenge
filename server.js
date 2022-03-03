const tempConvert = require('temperature-util')
const express = require('express')
const app = express()
const PORT = 8080

//starts the server and keeps it open
app.listen(
    PORT,
    ()=> console.log("Server listening at port " + PORT)
)
app.get("/check", (req, res) => {
    /*
        req variables:
            ?input_unit      - the input unit
            ?input_temp      - input temp
            ?target_unit     - target temp
            ?sstudent_answer - student answer

    */
    if(!(('input_unit' in req.query) && ('input_temp' in req.query) && ('target_unit' in req.query) && ('student_answer' in req.query))){
        
        res.status(500).send()
        return
    }
    var inputUnit     = req.query.input_unit
    var inputTemp     =parseFloat(req.query.input_temp)
    var targetUnit    = req.query.target_unit
    var studentAnswer = Math.round(parseFloat(req.query.student_answer))
    var response = {grade: ''}

    //make sure the units are proper and the values are numbers
    if(!(inputUnit == 'c' || inputUnit == 'f' || inputUnit == 'k' || inputUnit == 'r')){
        response.grade = 'Invalid'
    }
    if(!(targetUnit == 'c' || targetUnit == 'f' || targetUnit == 'k' || targetUnit == 'r')){
        console.log('here')
        response.grade = 'Invalid'
    }
    if(isNaN(inputTemp)){
        response.grade = 'Invalid'  
    }
   
    //celsius to fahrenheit
    else if(inputUnit == 'c' && targetUnit == 'f'){
        response.grade = studentAnswer == Math.round(tempConvert.celsiusToFahrenheit(inputTemp)) ? 'Correct':'Incorrect'
    }
    //celsius to kelvin
    else if(inputUnit == 'c' && targetUnit == 'k'){
        response.grade = studentAnswer == Math.round(tempConvert.celsiusToKelvin(inputTemp)) ? 'Correct':'Incorrect'
    }
    //celsius to rankine
    else if(inputUnit == 'c' && targetUnit == 'r'){
        response.grade = studentAnswer == Math.round(tempConvert.celsiusToRankine(inputTemp)) ? 'Correct':'Incorrect'
    }

    //farhrenheit to9 celsius
    else if(inputUnit == 'f' && targetUnit == 'c'){
        response.grade = studentAnswer == Math.round(tempConvert.fahrenheitToCelsius(inputTemp)) ? 'Correct':'Incorrect'
    } 
    //fahrenheit to kelvin
    else if(inputUnit == 'f' && targetUnit == 'k'){
        response.grade = studentAnswer == Math.round(tempConvert.fahrenheitToKelvin(inputTemp)) ? 'Correct':'Incorrect'
    }
    //fahrenheit to rankine
    else if(inputUnit == 'f' && targetUnit == 'r'){
        response.grade = studentAnswer == Math.round(tempConvert.fahrenheitToRankine(inputTemp)) ? 'Correct':'Incorrect'
    }

    //kelvin to celsius
    else if(inputUnit == 'k' && targetUnit == 'c'){
        response.grade = studentAnswer == Math.round(tempConvert.kelvinToCelsius(inputTemp)) ? 'Correct':'Incorrect'
    }
    //kelvin to fahrenheit
    else if(inputUnit == 'k' && targetUnit == 'f'){
        response.grade = studentAnswer == Math.round(tempConvert.kelvinToFahrenheit(inputTemp)) ? 'Correct':'Incorrect'
    }
    //kelvin to rankine
    else if(inputUnit == 'k' && targetUnit == 'r'){
        response.grade = studentAnswer == Math.round(tempConvert.kelvinToRankine(inputTemp)) ? 'Correct':'Incorrect'
    }

    //rankine to celsius
    else if(inputUnit == 'r' && targetUnit == 'c'){
        response.grade = studentAnswer == Math.round(tempConvert.rankineToCelsius(inputTemp)) ? 'Correct':'Incorrect'
    }
    //rankine to fahrenheit
    else if(inputUnit == 'r' && targetUnit == 'f'){
        response.grade = studentAnswer == Math.round(tempConvert.rankineToFahrenheit(inputTemp)) ? 'Correct':'Incorrect'
    }
    //rankine to kelvin
    else if(inputUnit == 'r' && targetUnit == 'k'){
        response.grade = studentAnswer == Math.round(tempConvert.rankineToKelvin(inputTemp)) ? 'Correct':'Incorrect'
    }
    res.status(200).send(response)
    return
})  
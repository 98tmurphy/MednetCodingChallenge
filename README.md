# MednetCodingChallenge
## Installation
To run the program, first make sure nodejs is installed on the mnachine. Then simply clone and run server.js. All node packages are included in the repsoitory.

## API Documentation
To call the API, use the following format:

localhost:8080/check?input_unit=[a]&input_temp=[b]&target_unit=[c]&student_answer=[d]

Where [a] is the original unit(either 'c', 'f', 'k', 'r'), [b] is the original temperature, [c] is the unit to be converted to, and [d] is the students answer

The response will consist of one element, 'grade'. If the answer is correct, grade will equal 'Correct'. Likewise, if the answer is incorrect, the grade will equal 'Incorrect'. If the question is somehow invalid, then the grade will equal 'Invaliod'. This will occur if the question asks for units that are not valid, or gives a temperature that contains non-numbers.
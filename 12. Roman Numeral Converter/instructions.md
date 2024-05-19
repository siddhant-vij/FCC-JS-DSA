### Build a Roman Numeral Converter

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

<table>
  <thead>
    <tr>
      <th>Roman numerals</th>
      <th>Arabic numerals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>CM</td>
      <td>900</td>
    </tr>
    <tr>
      <td>D</td>
      <td>500</td>
    </tr>
    <tr>
      <td>CD</td>
      <td>400</td>
    </tr>
    <tr>
      <td>C</td>
      <td>100</td>
    </tr>
    <tr>
      <td>XC</td>
      <td>90</td>
    </tr>
    <tr>
      <td>L</td>
      <td>50</td>
    </tr>
    <tr>
      <td>XL</td>
      <td>40</td>
    </tr>
    <tr>
      <td>X</td>
      <td>10</td>
    </tr>
    <tr>
      <td>IX</td>
      <td>9</td>
    </tr>
    <tr>
      <td>V</td>
      <td>5</td>
    </tr>
    <tr>
      <td>IV</td>
      <td>4</td>
    </tr>
    <tr>
      <td>I</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

**Objective**: Build an app that is functionally similar to https://roman-numeral-converter.freecodecamp.rocks

**User Stories**:

1. You should have an input element with an id of "number"
1. You should have a button element with an id of "convert-btn"
1. You should have a div element with an id of output
1. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
1. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
1. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
1. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
1. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
1. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
1. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
1. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

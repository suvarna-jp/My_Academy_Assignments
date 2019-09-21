// Function to check if the charachter is an alphabet
function isAlpha(ch) {
    return (((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z')));
}

function isDigit(ch) {
    return ((ch >= 0) && (ch <= 9));
}

function isNumber(str) {
    let strArray = str.split('');
    for(let ch=0; ch<strArray.length; ch++) {
        if (isDigit(strArray[ch]) == false) {
            return false;
        }
    };
    return true;
}

// Function to check the number of occurances of a particular char in a string
function countLetter(string, ch) {
    const regex = new RegExp(ch,  "g");
    if(string.match(regex) != null) {
        return string.match(regex).length;
    }
}

//  Function to check if the two strings entered in text boxes are Anagrams of each other
 function checkIfAnagram() {
    
    let str1 = document.getElementById('asgn_str_01').value;
    let str2 = document.getElementById('asgn_str_02').value;

    let str1_alpha = '';
    let str2_alpha = '';

    if(str1 == null || str2 == null || str1.trim() == '' || str2.trim() == '')
    {
        document.getElementById('asgn_response').innerText = "Empty string found! Please enter both string values to compare and then click on submit."
        document.getElementById('asgn_response').style.visibility ="visible";
        return;
    }
    else
    {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }

    str1.split('').forEach(alphabet => {
        if (isAlpha(alphabet)) {
            str1_alpha += alphabet;
        }
    });
    str2.split('').forEach(alphabet => {
        if (isAlpha(alphabet)) {
            str2_alpha += alphabet;
        }
    });

    anagram = null;

    if (str1_alpha.length == str2_alpha.length) {
        for (let alphabet of str1_alpha) {
            if(str2_alpha.indexOf(alphabet) < 0) {
                anagram = false;
                break;
            }
            else {
                anagram = (countLetter(str1_alpha, alphabet) == countLetter(str2_alpha, alphabet));
            }
            if(!anagram) {
                break;
            }
        }
    }
    else {
        anagram = false;
    }

    if(anagram == true) {
        document.getElementById('asgn_response').innerText = "TRUE : The two strings are ANAGRAMS of each other";
        document.getElementById('asgn_response').style.visibility ="visible";
    }
    else{
        document.getElementById('asgn_response').innerText = "FALSE : The two strings are NOT ANAGRAMS of each other";
        document.getElementById('asgn_response').style.visibility ="visible";
    }
}

// Function to reset text boxes to empty values & make result div as hidden
function resetAnagram() {
    document.getElementById('asgn_str_01').value = "";
    document.getElementById('asgn_str_02').value = "";
    document.getElementById('asgn_response').innerText = "";
    document.getElementById('asgn_response').style.visibility ="hidden";
}

// Function to break an array to many sub-arrays, each of a specified chunk size
function breakArrayToChunkSize() {

    const inputArrayStr = document.getElementById('asgn_02_str_01').value;
    let chunkSize = document.getElementById('asgn_02_str_02').value;

    if(inputArrayStr == null || chunkSize == null || inputArrayStr.trim() == '' || chunkSize.trim() == '')
    {
        document.getElementById('asgn_02_response').innerText = "Empty string found! Please enter both string values to compare and then click on submit."
        document.getElementById('asgn_02_response').style.visibility ="visible";
        return;
    }
    else if(isNumber(chunkSize) == false || isNaN(parseInt(chunkSize)) == true || parseInt(chunkSize) <= 0)
    {
        document.getElementById('asgn_02_response').innerText = "Chunk Size is not a valid number. Please input a valid number and try again."
        document.getElementById('asgn_02_response').style.visibility ="visible";
        return;
    }
    
    chunkSize = parseInt(chunkSize);
    let mainArray = new Array();

    let inputArray = inputArrayStr.split(',');
    
    let newArraySize = 0;
    let chunkArray = new Array(chunkSize);

    while(inputArray.length > chunkSize) {
        chunkArray = new Array(inputArray.splice(0, chunkSize));
        mainArray[newArraySize] = chunkArray;
        newArraySize++;
    };

    mainArray[newArraySize] = inputArray;
    
    let mainArrayDisplay = '[';
    mainArray.forEach(arrayElement => {
        mainArrayDisplay = mainArrayDisplay + "[" + arrayElement.toString().trim() + "], ";
    });

    mainArrayDisplay = mainArrayDisplay.trim().slice(0, mainArrayDisplay.trim().length-1) + "]";
    
    document.getElementById('asgn_02_response').innerText = mainArrayDisplay;
    document.getElementById('asgn_02_response').style.visibility ="visible";

}

// Function to reset text boxes to empty values & make result div as hidden
function resetArrayChunk() {
    document.getElementById('asgn_02_str_01').value = "";
    document.getElementById('asgn_02_str_02').value = "";
    document.getElementById('asgn_02_response').innerText = "";
    document.getElementById('asgn_02_response').style.visibility ="hidden";
}

// Function to capitalize a sentence string.
function capitalize() {
    let inputString = document.getElementById('asgn_03_str_01').value;
    
    if(inputString == null || inputString.trim() == '')
    {
        document.getElementById('asgn_03_response').innerText = "Empty string found! Please enter a sentence or a phrase that you intend to capitalize.";
        document.getElementById('asgn_03_response').style.visibility ="visible";
        return;
    }
    else
    {
        inputString = inputString.trim();
        inputString = inputString.replace(inputString.charAt(0), inputString.charAt(0).toUpperCase());
    }

    for(let i=0; i<inputString.length; i++) {
        if(inputString.charAt(i) == " " && isAlpha(inputString.charAt(i+1))) {
            inputString = (inputString.substring(0, i+1) + inputString.charAt(i+1).toUpperCase() + inputString.substring(i+2));
        }
    }

    document.getElementById('asgn_03_response').innerText = inputString;
    document.getElementById('asgn_03_response').style.visibility ="visible";

}

// Function to reset Capitalize text boxes to empty values & make result div as hidden
function resetCapitalize() {
    document.getElementById('asgn_03_str_01').value = "";
    document.getElementById('asgn_03_response').innerText = "";
    document.getElementById('asgn_03_response').style.visibility ="hidden";
}

// Function to find nth element number of Fibonacci series
function getFibonacciOfNumber() {
    let inputFibNum = document.getElementById('asgn_04_str_01').value;

    if(inputFibNum == null || inputFibNum.trim() == '')
    {
        document.getElementById('asgn_04_response').innerText = "Empty entry found! Please enter a valid number.";
        document.getElementById('asgn_04_response').style.visibility ="visible";
        return;
    }
    else if(isNumber(inputFibNum) == false || isNaN(parseInt(inputFibNum)) == true || parseInt(inputFibNum) <= 0)
    {
        document.getElementById('asgn_04_response').innerText = "Entry is not a valid number. Please input a valid number and try again."
        document.getElementById('asgn_04_response').style.visibility ="visible";
        return;
    }
    else 
    {
        inputFibNum = parseInt(inputFibNum);
    }

    const n = inputFibNum
    const x = (1 + Math.sqrt(5))/2;
    const y = (1 - Math.sqrt(5))/2;
    const c = (1/Math.sqrt(5));

    fib = c * ((Math.pow(x, n)) - (Math.pow(y, n)));
    nthElement = Math.round(fib);

    document.getElementById('asgn_04_response').innerText = `The Number at the index position [${n}] in the Fibonacci series is :: ${nthElement}`;
    document.getElementById('asgn_04_response').style.visibility ="visible";
    
}

// Function to reset text boxes to empty values & make result div as hidden
function resetFibonacci() {
    document.getElementById('asgn_04_str_01').value = "";
    document.getElementById('asgn_04_response').innerText = "";
    document.getElementById('asgn_04_response').style.visibility ="hidden";
}

// Function to print numbers, Fizz, Buzz, FizzBuzz
function printFizzBuzz() {
    let inputFizzBuzzNum = document.getElementById('asgn_05_str_01').value;

    if(inputFizzBuzzNum == null || inputFizzBuzzNum.trim() == '')
    {
        document.getElementById('asgn_05_response').innerText = "Empty entry found! Please enter a valid number.";
        document.getElementById('asgn_05_response').style.visibility ="visible";
        return;
    }
    else if(isNumber(inputFizzBuzzNum) == false || isNaN(parseInt(inputFizzBuzzNum)) == true || parseInt(inputFizzBuzzNum) <= 0)
    {
        document.getElementById('asgn_05_response').innerText = "Entry is not a valid number. Please input a valid number and try again."
        document.getElementById('asgn_05_response').style.visibility ="visible";
        return;
    }
    else 
    {
        inputFizzBuzzNum = parseInt(inputFizzBuzzNum);
    }

    let html_tbl_txt = "<table class='table table-condensed table-bordered table-responsive-sm'><tbody><tr>";

    for(n=1; n<=inputFizzBuzzNum; n++) {
        if(n%3 == 0) {
            if(n%5 == 0) {
                console.log("FIZZ-BUZZ");
                html_tbl_txt = html_tbl_txt + "<td class='bg-danger'>FizzBuzz</td>";
            }
            else{
                console.log("FIZZ");
                html_tbl_txt = html_tbl_txt + "<td class='bg-success'>Fizz</td>";
            }
        }
        else if(n%5 == 0) {
            console.log("BUZZ");
            html_tbl_txt = html_tbl_txt + "<td class='bg-info'>Buzz</td>";
        }
        else {
            console.log(n);
            html_tbl_txt = html_tbl_txt + `<td class='bg-warning'>${n}</td>`;
        }

        if(n === inputFizzBuzzNum) {
            html_tbl_txt = html_tbl_txt + "</tr>";
        }
        else if (n%10 == 0) {
            html_tbl_txt = html_tbl_txt + "</tr><tr>";
        }
    }

    html_tbl_txt = html_tbl_txt + "</tbody></table>"

    document.getElementById('asgn_05_response').innerHTML = html_tbl_txt;
    document.getElementById('asgn_05_response').style.visibility ="visible";
    
}

// Function to reset text boxes to empty values & make result div as hidden
function resetFizzBuzz() {
    document.getElementById('asgn_05_str_01').value = "";
    document.getElementById('asgn_05_response').innerText = "";
    document.getElementById('asgn_05_response').style.visibility ="hidden";
}

//Event Handlers for Assignment 01 Submit & Reset buttons
console.log('Starting Console log in JS_assignments.js!!');
const anagram_sbmt_btn = document.querySelector('#asgn_01_sbmt');

anagram_sbmt_btn.addEventListener('click', e=> {
    e.preventDefault();
    checkIfAnagram();
})

const anagram_reset_btn = document.querySelector('#asgn_01_reset');

anagram_reset_btn.addEventListener('click', e=> {
    e.preventDefault();
    resetAnagram();
})

//Event Handlers for Assignment 02 Submit & Reset buttons
const array_Chunk_sbmt_btn = document.querySelector('#asgn_02_sbmt');

array_Chunk_sbmt_btn.addEventListener('click', e=> {
    e.preventDefault();
    breakArrayToChunkSize();
})

const array_Chunk_reset_btn = document.querySelector('#asgn_02_reset');

array_Chunk_reset_btn.addEventListener('click', e=> {
    e.preventDefault();
    resetArrayChunk();
})

//Event Handlers for Assignment 03 Submit & Reset buttons
const capitalize_sbmt_btn = document.querySelector('#asgn_03_sbmt');

capitalize_sbmt_btn.addEventListener('click', e=> {
    e.preventDefault();
    capitalize();
})

const capitalize_reset_btn = document.querySelector('#asgn_03_reset');

capitalize_reset_btn.addEventListener('click', e=> {
    e.preventDefault();
    resetCapitalize();
})

//Event Handlers for Assignment 04 Submit & Reset buttons
const fib_sbmt_btn = document.querySelector('#asgn_04_sbmt');

fib_sbmt_btn.addEventListener('click', e=> {
    e.preventDefault();
    getFibonacciOfNumber();
})

const fib_reset_btn = document.querySelector('#asgn_04_reset');

fib_reset_btn.addEventListener('click', e=> {
    e.preventDefault();
    resetFibonacci();
})

//Event Handlers for Assignment 05 Submit & Reset buttons
const fzbz_sbmt_btn = document.querySelector('#asgn_05_sbmt');

fzbz_sbmt_btn.addEventListener('click', e=> {
    e.preventDefault();
    printFizzBuzz();
})

const fzbz_reset_btn = document.querySelector('#asgn_05_reset');

fzbz_reset_btn.addEventListener('click', e=> {
    e.preventDefault();
    resetFizzBuzz();
})


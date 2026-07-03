function inputValue(str) {
    let input = document.getElementById("result");
    if (str == 'C') { 
        input.value = 0;
    } else if (str == '=') {
        input.value = eval(input.value);
    } else if (str == 'X') {
        input.value = input.value.slice(0, -1);
    }
    else if (str != '%' && str != '/' && str != '*' && str != '-' && str != '+') {
        input.value = input.value == 0 ? str : input.value + str
    } else {
        input.value += str
    }
}


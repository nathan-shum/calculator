let map = {
    curr_num: "",
    operation: "",
    op_num: "",
};
let selected_op = false;
const calc = document.querySelector("#calculator");
const display_num = document.querySelector("#num");

calc.addEventListener("click", (event) => {
    const target = event.target;
    let new_num = 0;

    switch(target.id) {
        case "clear":
            map.curr_num = "";
            map.op_num = "";
            map.operation = "";
            selected_op = false;
            display_num.textContent = ""; // Clear the display
            break;
        case "neg":
            map.curr_num = "" + (Number(map.curr_num) * -1);
            display_num.textContent = map.curr_num;
            break;
        case "percent":
            map.curr_num = "" + (Number(map.curr_num) / 100);
            display_num.textContent = map.curr_num;
            break;
        case "div":
        case "mul":
        case "sub":
        case "add":
            if (selected_op) {
                new_num = "" + operate();
                map.curr_num = new_num;
                map.op_num = "";
            }
            map.operation = target.id;
            selected_op = true;
            display_num.textContent = map.curr_num;
            break;
        case "equal":
            if (selected_op) {
                new_num = "" + operate();
                map.curr_num = new_num;
                map.op_num = "";
                map.operation = "";
                selected_op = false;
                display_num.textContent = new_num;
            }
            break;
        case "decimal":
            if (!selected_op) {
                map.curr_num += ".";
            } else {
                map.op_num += ".";
            }
            display_num.textContent = selected_op ? map.op_num : map.curr_num;
            break;
        case "zero":
        case "one":
        case "two":
        case "three":
        case "four":
        case "five":
        case "six":
        case "seven":
        case "eight":
        case "nine":
            if (!selected_op) {
                map.curr_num += parseInt(target.textContent);
            } else {
                map.op_num += parseInt(target.textContent);
            }
            display_num.textContent = selected_op ? map.op_num : map.curr_num;
            break;
    }
});

function operate() {
    let num1 = Number(map.curr_num);
    let num2 = Number(map.op_num);
    switch(map.operation) {
        case "div":
            return num1 / num2;
        case "mul":
            return num1 * num2;
        case "sub":
            return num1 - num2;
        case "add":
            return num1 + num2;
    }
}

var isValid = function(s) {
    let stack = [];
    let valid = true;

    for (let i = 0; i < s.length; i++) {
        let character = s[i];

        switch (character) {
            case "(":
            case "{":
            case "[":
                stack.push(character);
                break;
            case ")":
            case "}":
            case "]":
                if (stack.length === 0) {
                    valid = false;
                } else {
                    let stackTopChar = stack.pop();
                    if (
                        (character === ")" && stackTopChar !== "(") ||
                        (character === "}" && stackTopChar !== "{") ||
                        (character === "]" && stackTopChar !== "[")
                    ) {
                        valid = false;
                    }
                }
                break;
        }
        if (!valid) {
            // If Valid is False, no need to continue looping
            break;
        }
    }

    if (stack.length > 0) {
        /**
         * At the end of the loop the stack should be empty. if not that means the string is not valid
         */
        valid = false;
    }

    return valid;
};
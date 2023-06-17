var romanToInt = function(s) {
    let num = [],
        resNum = [];

    s.split("").map(i => {
        switch (i) {
            case "I":
                num.push(1);
                break;
            case "V":
                num.push(5);
                break;
            case "X":
                num.push(10);
                break;
            case "L":
                num.push(50);
                break;
            case "C":
                num.push(100);
                break;
            case "D":
                num.push(500);
                break;
            case "M":
                num.push(1000);
                break;
        }
    });
    for (i = 0; i < num.length; i++) {
        if (num[i] < num[i + 1]) {
            resNum.push(num[i + 1] - num[i]);
            i += 1;
        } else {
            resNum.push(num[i]);
        }
    }

    return resNum.reduce((acc, b) => acc + b);
};
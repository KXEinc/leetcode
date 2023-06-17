var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    } else if (strs.length === 0) {
        return "";
    }
    let flag = true;
    let prefix = "";
    let i = 0;
    prefix += strs[0].charAt(i);
    do {
        if (strs[0].charAt(i) === "") break;
        flag = strs.every(str => {
            return str.charAt(i) === prefix.charAt(i);
        });
        if (!flag) {
            prefix = prefix.slice(0, i);
        } else {
            i += 1;
            prefix += strs[0].charAt(i);
        }
    } while (flag);
    if (i === 0) {
        prefix = "";
    }
    return prefix;
};
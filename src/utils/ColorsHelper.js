class ColorHelper {
 randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
 
 }
 getColor(arg) {
    return {
        header: "#dcdcdc",
        textColor: "#141414",
        primary:"#333333",
    }[arg];
 }
}

export default new ColorHelper();
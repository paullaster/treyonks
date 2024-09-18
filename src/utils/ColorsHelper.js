class ColorHelper {
 randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
 
 }
 getColor(arg) {
    return {
        header: "#dcdcdc",
        textColor: "#141414",
        primary:"#333333",
        linkedin: '#0077B5',
        instagram: '#E1306C',
        x: '#000000',
        email: '#BB001B',
    }[arg];
 }
}

export default new ColorHelper();
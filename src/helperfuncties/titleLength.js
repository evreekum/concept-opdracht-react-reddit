function titleLength(title) {
    if(title.length < 100) {
        return title;
    } else {
        return title.substring(0,100) + "...";
    }
}

export default titleLength;
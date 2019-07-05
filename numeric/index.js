const numeric = {
    secondsToTime: function(seconds) {
        seconds = parseInt(seconds);
        var hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
        seconds = seconds % 60;
        return (("00" + hours).slice(-2) + ":" + ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2));
    }
}

module.exports = numeric;
function compareTime(arrival_time,departure_time){
    let time1= new Date(arrival_time);
    let time2= new Date(departure_time);
    return (time1.getTime()>time2.getTime());
}
module.exports = {
    compareTime
}
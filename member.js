function skillmember() {
    var member = document.getElementById("member").value;
    var member = member.replace(/[^0-9]/g, '');
    if (member > 100) {
        document.getElementById("member").value = 100;
    }
}
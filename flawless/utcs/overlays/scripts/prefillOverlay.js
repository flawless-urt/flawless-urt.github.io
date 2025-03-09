function prefillOverlay() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const seasons = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementsByName('season')[0].value = seasons[month] + ' ' + year;
}
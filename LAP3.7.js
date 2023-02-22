function demo(input) {

    let hour = Number(input[0]);
    let day = (input[1]);

    switch (hour >= 10 && hour <= 18 && day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            console.log('open');break;
        default:
            console.log('closed');break;
    

    }


}



demo(["11", "Monday"])
demo(["19", "Friday"])
demo(["11", "Sunday"])

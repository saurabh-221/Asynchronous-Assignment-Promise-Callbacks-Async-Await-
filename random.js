function fetchRandomNumbers() {
    return new Promise((resolve, reject) => {
        console.log('Fetching number...');
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            console.log('Received random number:', randomNum);
            resolve(randomNum);
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}


function fetchRandomString() {
    return new Promise((resolve, reject) => {
        console.log('Fetching string...');
        setTimeout(() => {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Received random string:', result);
            resolve(result);
        }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}


// fetchRandomNumbers((randomNum) => console.log(randomNum))
// fetchRandomString((randomStr) => console.log(randomStr))


// fetchRandomNumbers().then((randomNum) => {
//     console.log(randomNum)
// });


function fun1() {
    fetchRandomString().then((randomNum) => {
        console.log(randomNum)
    });
}
// fun1()


function fun2() {
    var sum1 = 0;
    fetchRandomNumbers().then((randomNum) => {
        sum1 = randomNum
        console.log(sum1)
        fetchRandomNumbers().then((randomNum) => {
            sum1 += randomNum
            console.log(sum1)
        });
    })
}
// fun2()


function fun3() {
    var value = "";
    fetchRandomNumbers().then((randomNum) => value = randomNum);
    fetchRandomString().then((randomStr) => {
        value += randomStr
        console.log(value)
    });
}
// fun3()


function fun4() {
    var value = 0;
    for (let i = 0; i < 10; i++) {
        fetchRandomNumbers().then((randomNum) => value += randomNum);
    }
    setTimeout(() => {
        console.log(value)
    }, 5000)

}
// fun4()
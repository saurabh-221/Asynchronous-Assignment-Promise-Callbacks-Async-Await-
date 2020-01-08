function getBoard() {
    return new Promise((resolve, reject) => {
        console.log('Fetching board...');
        setTimeout(function () {
            let board = {
                id: "def453ed",
                name: "Thanos"
            };
            console.log('Received board');
            resolve(board);
        }, 1000);
    });
}

function getLists(boardId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching lists for board id ${boardId}...`);
        setTimeout(function () {
            let lists = {
                def453ed: [
                    {
                        id: "qwsa221",
                        name: "Mind"
                    },
                    {
                        id: "jwkh245",
                        name: "Space"
                    },
                    {
                        id: "azxs123",
                        name: "Soul"
                    },
                    {
                        id: "cffv432",
                        name: "Time"
                    },
                    {
                        id: "ghnb768",
                        name: "Power"
                    },
                    {
                        id: "isks839",
                        name: "Reality"
                    }
                ]
            };
            console.log(`Received lists for board id ${boardId}`);
            resolve(lists[boardId]);
        }, 500);
    });
}

function getCards(listId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching cards for list id ${listId}...`);
        setTimeout(function () {
            let cards = {
                qwsa221: [
                    {
                        id: "1",
                        description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
                    },
                    {
                        id: "2",
                        description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
                    },
                    {
                        id: "3",
                        description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
                    }
                ],
                jwkh245: [
                    {
                        id: "1",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "2",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "3",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "4",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    }
                ],
                azxs123: [
                    {
                        id: "1",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "2",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    }
                ],
                cffv432: [
                    {
                        id: "1",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "2",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    }
                ],
                ghnb768: [
                    {
                        id: "1",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    },
                    {
                        id: "2",
                        description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
                    }
                ]
            };
            console.log(`Received cards for list id ${listId}`);
            resolve(cards[listId] || []);
        }, 1500);
    });
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task 1 board -> lists -> cards for list qwsa221

function fun1() {
    let data = "qwsa221"
    return getBoard()
        .then(boardId => getLists(boardId.id))
        .then(listId => {
            let card = listId.map(id => {
                if (id.id == data) {
                    return id;
                }
            })
            return getCards(card[0].id)
        })
        .then(cards => console.log(cards));
}
// fun1()

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously

function fun2() {
    var data1 = "qwsa221"
    var data2 = "jwkh245"
    return getBoard()
        .then(boardId => getLists(boardId.id))
        .then(listId => {
            var lists = listId.filter(id => id.id === data1 || id.id === data2)
            lists.forEach(element => {
                getCards(element.id).then(data => console.log(data))
            })
        })
}
fun2()

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


// Task 3 board -> lists -> cards for all lists simultaneously

function fun3() {
    return getBoard()
        .then(data => getLists(data.id))
        .then(data => {
            data.forEach(obj => getCards(obj.id)
                .then(data => console.log(data)))
        })
}
// fun3()
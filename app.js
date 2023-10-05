let fines = [
    {
        id: 1,
        intruder: 'john oils',
        fromDate: "19/09/23",
        dueDate: "23/10/23",
        daysLeft: 19,
        fineAmount: 500,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 2,
        intruder: 'hammed kareem',
        fromDate: "21/10/23",
        dueDate: "22/11/23",
        daysLeft: 10,
        fineAmount: 450,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 3,
        intruder: 'jane doe',
        fromDate: "31/09/23",
        dueDate: "5/10/23",
        daysLeft: 1,
        fineAmount: 520,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 4,
        intruder: 'na money',
        fromDate: "12/04/22",
        dueDate: "12/05/22",
        daysLeft: 0,
        fineAmount: 500,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 5,
        intruder: 'harry maguire',
        fromDate: "12/07/34",
        dueDate: "12/09/32",
        daysLeft: "100",
        fineAmount: 500,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 6,
        intruder: 'john oils',
        fromDate: "23/08/20",
        dueDate: "20/08/21",
        daysLeft: "",
        fineAmount: 500,
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 7,
        intruder: 'john oils',
        fromDate: "21/09/21",
        dueDate: "21/09/22",
        daysLeft: "",
        fineAmount: 500,
        description: "lorem ipsum nicnn ond"
    },
]
const toggleDisplay = () => {
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});

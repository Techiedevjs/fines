let fines = [
    {
        id: 1,
        intruder: 'john oils',
        fromDate: "05/30/2023",
        dueDate: "23/10/2023",
        paid: true,
        daysLeft: 19,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 2,
        intruder: 'hammed kareem',
        fromDate: "21/10/2023",
        dueDate: "22/11/2023",
        paid: true,
        daysLeft: 10,
        fineAmount: 450,
        officerName: 'bill clinton',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 3,
        intruder: 'jane doe',
        fromDate: "31/09/2023",
        dueDate: "5/10/2023",
        paid: true,
        daysLeft: 1,
        fineAmount: 520,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 4,
        intruder: 'na money',
        fromDate: "12/04/2022",
        dueDate: "12/05/2022",
        paid: false,
        daysLeft: 0,
        fineAmount: 500,
        officerName: 'donald trump',
        description: "Lorem ipsum dolor sit amet consectetur. Eu interdum aliquet eu nunc quam. Et nunc nec felis enim vivamus libero pellentesque."
    },
    {
        id: 5,
        intruder: 'harry maguire',
        fromDate: "12/07/2021",
        dueDate: "12/09/2021",
        paid: true,
        daysLeft: 1,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 6,
        intruder: 'john oils',
        fromDate: "23/08/2019",
        dueDate: "20/08/2021",
        daysLeft: 4,
        paid: false,
        officerName: 'barrack obama',
        fineAmount: 500,
        description: "Lorem ipsum dolor sit amet consectetur. Eu interdum aliquet eu nunc quam. Et nunc nec felis enim vivamus libero pellentesque."
    },
    {
        id: 7,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "21/09/2022",
        paid: true,
        daysLeft: 2,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 709,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "21/09/2022",
        paid: true,
        daysLeft: 2,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 721,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "21/09/2022",
        paid: false,
        daysLeft: 2,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 127,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "21/09/2022",
        paid: true,
        daysLeft: 2,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
]
let intruders = [
    {
        id: 142,
        name: "john oils"
    },
    {
        id: 143,
        name: "Adam jones"
    },
    {
        id: 144,
        name: "tyler perry"
    },
    {
        id: 145,
        name: "reece james"
    },
    {
        id: 146,
        name: "x men"
    },
    {
        id: 147,
        name: "soft hazard"
    },{
        id: 148,
        name: "dolly polly"
    },

]
const pushFines = (data) => {
    document.querySelector('.fines').innerHTML = "";
    data.map((fine) => {
        const {intruder, id, fromDate, dueDate, paid, fineAmount, description, daysLeft} = fine;
        document.querySelector('.fines').innerHTML += `
            <div class="fine" id=${id}>
                <div class="fine-cont" onclick="viewBillingDetails(${id})">
                    <section class="amount-intruder">
                        <p class="fine-amount">${fineAmount}$</p>
                        <span class="dot"></span>
                        <p class="intruder"> ${intruder}</p>
                    </section>
                    <section class="date-cont">
                        ${ paid ? "" : `<div class="days-left"> ${daysLeft}d left</div>`}
                        <div class="from-date ${paid ? 'paid' : 'unpaid'}">from ${fromDate}</div>
                    </section>
                </div>
            </div>
        `
    })
}
pushFines(fines);
document.querySelector('#search-fines').addEventListener('input', (e) => {
    let searchvalue = e.target.value.toLowerCase();
    let searchresults = fines.filter((fine) => fine.intruder.toLowerCase().includes(searchvalue))
    pushFines(searchresults)
})
let currentfilter = 'all';
const pushFilterResult = (data, filter) => {
    currentfilter = filter
    if(filter === 'all'){
        pushFines(fines);
    } else {
        let filtered = data.filter((fine) => fine.paid === filter);
        pushFines(filtered)
    }
}
const filterResult = (elem, status) => {
    let clicked  = document.getElementsByClassName(elem)[0]
    pushFilterResult(fines, status)
    clicked.classList.add(`${elem}-active`);
    let siblings = Array.from(clicked.parentElement.children);
    siblings.map((sib) => {
        if(sib !== clicked){
            sib.classList.remove(sib.classList[1])
        }
    })
}
const viewBillingDetails = (id) => {
    document.querySelector('.bill-form').classList.add('hidetask');
    document.querySelector('.fine-details').classList.remove('hidetask');
    let fine = fines.filter((f)=> f.id === id)
    const {daysLeft, paid, dueDate, fromDate, description, intruder, fineAmount,officerName } = fine[0];
    document.querySelector('.bill-intruder').innerHTML = intruder;
    document.querySelector('.bill-fine-amount').innerHTML = fineAmount + ' $';
    document.querySelector('.bill-due-date').innerHTML = dueDate;
    document.querySelector('.bill-from-date').innerHTML = fromDate;
    document.querySelector('.bill-description').innerHTML = description;
    document.querySelector('.bill-header').innerHTML = '#' + id;
    document.querySelector('.bill-sub-header').innerHTML = 'Billing from ' + `<span class='cap semibold'>${officerName}</span>`;
    document.querySelector('.bill-sub-header').classList.add('mediumbold');
    document.querySelector('.bill-header-icon').src = 'images/bill.svg';
    document.querySelector('.header-unpaid').classList.remove('hidetask')
    document.querySelector('.delete').addEventListener('click', () => {
        document.getElementById(id).classList.add('hideprofile')
        fines = fines.filter((fine) => fine.id !== id)
        pushFilterResult(fines, currentfilter);
        backToBillingForm();
    })
}
const backToBillingForm = () => {
    document.querySelector('.bill-form').classList.remove('hidetask');
    document.querySelector('.fine-details').classList.add('hidetask');
    document.querySelector('.bill-header').innerHTML = 'Company Name';
    document.querySelector('.bill-sub-header').innerHTML = 'Billing Form';
    document.querySelector('.bill-sub-header').classList.remove('mediumbold');
    document.querySelector('.bill-header-icon').src = "images/paper-edit.svg";
    document.querySelector('.header-unpaid').classList.add('hidetask')
}
const pushIntruders = (data) => {
    document.querySelector('.intruders-list').innerHTML = "";
    data.map((intru) => {
        const {id, name} = intru;
        document.querySelector('.intruders-list').innerHTML += `
            <p><span>${id} </span>|<span> ${name}</span></p>
        `
    })
}
pushIntruders(intruders)
document.querySelector('#intruder').addEventListener('click', () => {
    document.querySelector('.intruder-select').classList.remove('hidetask')
    document.querySelector('#intruder-input').focus()
})
document.querySelector('#intruder-input').addEventListener('input', (e) => {
    let val = e.target.value;
    let filteredIntruders = intruders.filter((intruder) => intruder.name.toLowerCase().includes(val.toLowerCase()))
    pushIntruders(filteredIntruders)
})
const toggleIntruderDropDown = () => {
    document.querySelector('.intruder-select').classList.toggle('hidetask')
}
document.querySelector('#description').addEventListener('input', (e) => {
    let val = e.target.value;
    document.querySelector('.wordcount').innerHTML = val.length
})
document.querySelector('.close-fines').addEventListener('click', () => {
    document.querySelector('.display').classList.add('hide-display');
})
const toggleDisplay = () => {
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});

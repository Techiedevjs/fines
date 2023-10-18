let fines = [
    {
        id: 1,
        intruder: 'john oils',
        fromDate: "05/03/2023",
        dueDate: "12/23/2023",
        paid: true,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 2,
        intruder: 'hammed kareem',
        fromDate: "02/21/2023",
        dueDate: "11/22/2023",
        paid: true,
        fineAmount: 450,
        officerName: 'bill clinton',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 3,
        intruder: 'jane doe',
        fromDate: "05/31/2023",
        dueDate: "09/10/2023",
        paid: true,
        fineAmount: 520,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 4,
        intruder: 'na money',
        fromDate: "2/04/2022",
        dueDate: "12/05/2023",
        paid: false,
        fineAmount: 500,
        officerName: 'donald trump',
        description: "Lorem ipsum dolor sit amet consectetur. Eu interdum aliquet eu nunc quam. Et nunc nec felis enim vivamus libero pellentesque."
    },
    {
        id: 5,
        intruder: 'harry maguire',
        fromDate: "2/07/2021",
        dueDate: "11/09/2021",
        paid: true,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 6,
        intruder: 'john oils',
        fromDate: "23/08/2019",
        dueDate: "1/01/2024",
        paid: false,
        officerName: 'barrack obama',
        fineAmount: 500,
        description: "Lorem ipsum dolor sit amet consectetur. Eu interdum aliquet eu nunc quam. Et nunc nec felis enim vivamus libero pellentesque."
    },
    {
        id: 7,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "1/09/2022",
        paid: true,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 709,
        intruder: 'john oils',
        fromDate: "1/09/2022",
        dueDate: "11/09/2023",
        paid: true,
        fineAmount: 500,
        officerName: 'mills mayer',
        description: "lorem ipsum nicnn ond"
    },
    {
        id: 721,
        intruder: 'john oils',
        fromDate: "21/09/2021",
        dueDate: "12/09/2023",
        paid: false,
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
let today = new Date();
let currentYear = today.getFullYear();
let currentDay = today.getDate();
let currentMonth = today.getMonth();
let selectedMonth = currentMonth;
let dueDate = ""
function formatDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get 1-12 range and padding with '0'
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}
const currentDate = formatDate(today)
const pushFines = (data) => {
    document.querySelector('.fines').innerHTML = "";
    data.map((fine) => {
        const {intruder, id, fromDate, dueDate, paid, fineAmount, description} = fine;
        let due = new Date(dueDate)
        let left =  Math.ceil((due - today) / (1000 * 60 * 60 * 24))
        document.querySelector('.fines').innerHTML += `
            <div class="fine" id=${id} onclick="viewBillingDetails(${id})">
                <div class="fine-cont">
                    <section class="amount-intruder">
                        <p class="fine-amount">${fineAmount}$</p>
                        <span class="dot"></span>
                        <p class="intruder"> ${intruder}</p>
                    </section>
                    <section class="date-cont">
                        ${ paid ? "" : `<div class="days-left"> ${left}d left</div>`}
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
    let current = document.getElementById(id);
    current.classList.add('fine-active')
    let siblings = Array.from(current.parentElement.children);
    siblings.map((sib) => {
        if(sib !== current){
            sib.classList.remove('fine-active')
        }
    })
    document.querySelector('.bill-form').classList.add('hidetask');
    document.querySelector('.fine-details').classList.remove('hidetask');
    let fine = fines.filter((f)=> f.id === id)
    const {daysLeft, paid, dueDate, fromDate, description, intruder, fineAmount,officerName } = fine[0];
    if(paid){
        document.querySelector('.delete').classList.add('hidetask')
    } else {
        document.querySelector('.delete').classList.remove('hidetask')
    }
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
    paid ? document.querySelector('.header-unpaid').style.background = 'rgba(118, 199, 116, 1)' : document.querySelector('.header-unpaid').style.background = '#F16464';
    paid ? document.querySelector('.header-unpaid').innerHTML = 'Paid' : document.querySelector('.header-unpaid').innerHTML = 'Unpaid'

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
    document.querySelector('.header-unpaid').classList.add('hidetask');
    document.querySelectorAll('.fine').forEach(element => {
        element.classList.remove('fine-active')
    });
}
const pushIntruders = (data) => {
    document.querySelector('.intruders-list').innerHTML = "";
    data.map((intru) => {
        const {id, name} = intru;
        document.querySelector('.intruders-list').innerHTML += `
            <p onclick="selectIntruder(${id})"><span>${id} </span>|<span> ${name}</span></p>
        `
    })
}
pushIntruders(intruders)
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
let newFine = {
    intruderID: "",
    intruder: "",
    fineAmount: 0,
    fromDate : currentDate,
    dueDate: "",
    description: "",
    paid: false
}
document.querySelector('.month').innerHTML = monthNames[selectedMonth];
const datesToDisplay = (year, month) => {
    let count = new Date(year, month+1, 0).getDate();
    document.querySelector('.days').innerHTML = ""
    let dateList = [];
    for (var i = 1; i <= count; i++) {
        dateList.push(i);
    }
    dateList.map((day) => {
        let s;
        if(currentDay >= day && month === today.getMonth() && year === today.getFullYear()){
            s = 'disable'
        } else {
            s = ''
        }
        document.querySelector('.days').innerHTML +=  `
            <p class='day ${s}' id='${day}'>${day}</p>
        `
    })
    document.querySelectorAll('.day').forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('selected')
            let siblings = Array.from(element.parentElement.children)
            siblings.map(elem => {
                if( elem !== element){
                    elem.classList.remove('selected')
                }
            });
            let dd = element.id
            let mm = month + 1
            if (dd < 10) {
                dd = '0' + element.id;
            }
            if (mm < 10) {
                mm = '0' + (month + 1);
            }
            dueDate = mm + "/" + dd + '/' + year
            let jsDate = new Date(dueDate)
            const daysDifference = Math.ceil((jsDate - today) / (1000 * 60 * 60 * 24));
            document.querySelector('.daysleft').innerHTML = daysDifference + ' days'
        })
    })
}
datesToDisplay(currentYear, currentMonth)
const previousMonth = () => {
    selectedMonth--
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()){
        selectedMonth = currentMonth
    } else if (selectedMonth === -1){
        selectedMonth = 11
        currentYear--
    }
    document.querySelector('.month').innerHTML = monthNames[selectedMonth];
    datesToDisplay(currentYear, selectedMonth)
}
const nextMonth = () => {
    selectedMonth++
    if(selectedMonth === 12){
        selectedMonth = 0
        currentYear++
    }
    document.querySelector('.month').innerHTML = monthNames[selectedMonth];
    datesToDisplay(currentYear, selectedMonth)
}
const confirmDueDate = (e) => {
    e.preventDefault()
    if(dueDate){
        document.querySelector('#due-date').innerHTML = dueDate;
        document.querySelectorAll('.input-cont')[2].firstElementChild.src = "images/inputfilled.svg";
        newFine.dueDate = dueDate
        document.querySelector('.due-date-select').classList.toggle('hidetask');
    }
}
const selectIntruder = (id) => {
    let selected = intruders.filter(intr => intr.id === id);
    document.querySelectorAll(`.input-cont`)[0].firstElementChild.src = "images/inputfilled.svg"
    document.querySelector('#intruder').innerHTML = selected[0].name
    document.querySelector('.intruder-select').classList.add('hidetask')
    newFine.intruderID = selected[0].id
    newFine.intruder = selected[0].name
    checkButtonStatus()
}
document.querySelector('#intruder-input').addEventListener('input', (e) => {
    let val = e.target.value;
    let filteredIntruders = intruders.filter((intruder) => intruder.name.toLowerCase().includes(val.toLowerCase()))
    pushIntruders(filteredIntruders)
    checkButtonStatus()
})
const toggleIntruderDropDown = () => {
    document.querySelector('#intruder-input').focus()
    document.querySelector('#intruder-input').value = ''
    document.querySelector('.intruder-select').classList.toggle('hidetask');
    document.querySelector('.due-date-select').classList.add('hidetask')
}
const toggleDueDateDropDown = () => {
    document.querySelector('.due-date-select').classList.toggle('hidetask')
    document.querySelector('.intruder-select').classList.add('hidetask');
}
document.querySelector('#description').addEventListener('input', (e) => {
    let val = e.target.value;
    if(val){
        document.querySelector('.textarea').classList.add('textareafilled');
    } else {
        document.querySelector('.textarea').classList.remove('textareafilled')
    }
    document.querySelector('.wordcount').innerHTML = val.length
    newFine.description = val
    checkButtonStatus()
})
document.querySelector('#fine-amount').addEventListener('click', () => {
    document.querySelector('.intruder-select').classList.add('hidetask')
    document.querySelector('.due-date-select').classList.add('hidetask')
})
document.querySelector('#fine-amount').addEventListener('input', (e) => {
    e.preventDefault()
    let val = e.target.value;
    newFine.fineAmount = Number(val);
    if (val) {
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/inputfilled.svg";
    } else {
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/input.svg";
    }
    checkButtonStatus()
})
const form = document.querySelector('.bill-form');
form.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
});
const refreshForm = () => {
    document.querySelector('#description').value = "";
    document.querySelector('#fine-amount').value = "";
    document.querySelector('#due-date').innerHTML = "";
    document.querySelector('#intruder').innerHTML = "";
    document.querySelectorAll(`.input-cont`).forEach(element => {
       element.classList.remove('inputfilled') 
    });
    document.querySelector('.textarea').classList.remove('textareafilled')
    currentYear = today.getFullYear();
    currentDay = today.getDate();
    currentMonth = today.getMonth();
    selectedMonth = currentMonth;
    newFine = {}
    dueDate = ""
    document.querySelectorAll('.day').forEach(element => {
        element.classList.remove('selected')
    })
    document.querySelector('.daysleft').innerHTML = ""
    checkButtonStatus()
}
const cancelBillForm = (event) => {
    event.preventDefault()
    alert('cancelled')
    refreshForm();
}
const chargeFine = (event) => {
    event.preventDefault();
    if (newFine.intruder && newFine.fineAmount && newFine.dueDate && newFine.description){
        newFine.id = Math.ceil(Math.random() * 1000);
        newFine.daysLeft = 2
        fines.unshift(newFine)
        pushFines(fines)
        refreshForm()
    }
}
const checkButtonStatus = () => {
    if(newFine.intruder && newFine.fineAmount && newFine.dueDate && newFine.description){
        document.querySelector('.charge').classList.add('allowclick')
    } else {
        document.querySelector('.charge').classList.remove('allowclick')
    }
}
checkButtonStatus()
document.querySelectorAll('.input-cont')[0].addEventListener('mouseover', () => {
    if(document.querySelector('#intruder').innerHTML === ""){
        document.querySelectorAll('.input-cont')[0].firstElementChild.src = "images/inputemptyhover.svg";
    } else {
        document.querySelectorAll('.input-cont')[0].firstElementChild.src = "images/inputfilledhover.svg";
    }
})
document.querySelectorAll('.input-cont')[0].addEventListener('mouseout', () => {
    if(document.querySelector('#intruder').innerHTML === ""){
        document.querySelectorAll('.input-cont')[0].firstElementChild.src = "images/input.svg";
    } else {
        document.querySelectorAll('.input-cont')[0].firstElementChild.src = "images/inputfilled.svg";
    }
})
document.querySelectorAll('.input-cont')[1].addEventListener('mouseover', () => {
    if(document.querySelector('#fine-amount').value === ""){
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/inputemptyhover.svg";
    } else {
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/inputfilledhover.svg";
    }
})
document.querySelectorAll('.input-cont')[1].addEventListener('mouseout', () => {
    if(document.querySelector('#fine-amount').value === ""){
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/input.svg";
    } else {
        document.querySelectorAll('.input-cont')[1].firstElementChild.src = "images/inputfilled.svg";
    }
})
document.querySelectorAll('.input-cont')[2].addEventListener('mouseover', () => {
    if(   document.querySelector('#due-date').innerHTML === ""){
        document.querySelectorAll('.input-cont')[2].firstElementChild.src = "images/inputemptyhover.svg";
    } else {
        document.querySelectorAll('.input-cont')[2].firstElementChild.src = "images/inputfilledhover.svg";
    }
})
document.querySelectorAll('.input-cont')[2].addEventListener('mouseout', () => {
    if(   document.querySelector('#due-date').innerHTML === ""){
        document.querySelectorAll('.input-cont')[2].firstElementChild.src = "images/input.svg";
    } else {
        document.querySelectorAll('.input-cont')[2].firstElementChild.src = "images/inputfilled.svg";
    }
})
// document.querySelectorAll('.input-cont').forEach(element => {
//     element.addEventListener('mouseover', () => {
//         element.firstElementChild.src = "images/inputemptyhover.svg"
//     })
//     element.addEventListener('mouseout', () => {
//         element.firstElementChild.src = "images/input.svg"
//     })
// });
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
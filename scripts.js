const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Edit below line 

const statusSet = document.querySelectorAll('.status');
const reserveSet =  document.querySelectorAll('.reserve');
const checkoutSet =  document.querySelectorAll('.checkout');
const checkinSet =  document.querySelectorAll('.checkin');


checkinSet[0].style.setProperty('color', 'black', 'important');
checkinSet[1].style.setProperty('color', 'black', 'important');
checkinSet[2].style.setProperty('color', 'black', 'important');


statusSet[0].style.color = STATUS_MAP[statusSet[0].innerText].color;
statusSet[1].style.color = STATUS_MAP[statusSet[1].innerText].color;
statusSet[2].style.color = STATUS_MAP[statusSet[2].innerText].color;

reserveSet[0].disabled = !STATUS_MAP[statusSet[0].innerText].canReserve;
checkoutSet[0].disabled = !STATUS_MAP[statusSet[0].innerText].canCheckout;
checkinSet[0].disabled = !STATUS_MAP[statusSet[0].innerText].canCheckIn;

reserveSet[1].disabled = !STATUS_MAP[statusSet[1].innerText].canReserve;
checkoutSet[1].disabled = !STATUS_MAP[statusSet[1].innerText].canCheckout;
checkinSet[1].disabled = !STATUS_MAP[statusSet[1].innerText].canCheckIn;

reserveSet[2].disabled = !STATUS_MAP[statusSet[2].innerText].canReserve;
checkoutSet[2].disabled = !STATUS_MAP[statusSet[2].innerText].canCheckout;
checkinSet[2].disabled = !STATUS_MAP[statusSet[2].innerText].canCheckIn;

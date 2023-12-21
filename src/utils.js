import {donateListContainer} from './constants'

export function createSampleDate(donate) {
    let date = new Date();
    let monthName = date.toLocaleString('en-US', {month: 'short'});
    let numberMonth = date.getMonth() + 1
    let FullYear = date.getFullYear()
    let time = date.toLocaleTimeString()
    return `${monthName} ${numberMonth}th ${FullYear}, ${time} am - <b>${donate}$</b>`
}

export function setLS(item) {
    localStorage.setItem("donateList", JSON.stringify(item))
}

export function getLS() {
    const item = localStorage.getItem("donateList")
    if (item) {
        return JSON.parse(item)
    }
    else {
        return []
    }
}

export function showDonateListLS(srtList) {
    const donateList = document.createElement("div")
    donateList.classList.add("donate-item")
    donateList.innerHTML = srtList
    donateListContainer.append(donateList)
}

import './index.css';
// Константы
import {sumDonate, inputDonate, btn, donateListContainer, LS} from './src/constants'
// Вспомогательные функции
import {createSampleDate, setLS, getLS, showDonateListLS} from './src/utils'


class DonationService {
     static #createDonateList(donate) {
        const donateList = document.createElement("div")
        donateList.classList.add("donate-item")
        donateList.innerHTML = createSampleDate(donate)
        donateListContainer.append(donateList)
        // Записываем строчки в массив
        Object.assign(LS, getLS())
        LS.array.push(donateList.innerHTML)
        setLS(LS)
        return donateList.innerHTML
    }
    static #calkulationSumDonatetion() {
        let donate = sumDonate.textContent.split("")
        donate.pop()
        donate = Number(donate.join("")) + Number(inputDonate.value) + "$"
        sumDonate.textContent = donate
        // Перезаписываем сумму донатов в обьект
        LS.sum = donate
        setLS(LS)
    }
    // Показываем все что у нас в LocalStorage
    static renderingLocalSrorage() {
        Object.assign(LS, getLS())
        LS.array.forEach(element => {
                showDonateListLS(element)
            });
        sumDonate.textContent = LS.sum     
    }
    static addDonate() {
        btn.addEventListener("click", event => {
            event.preventDefault()
            // Не будем же мы разорять потенциальных меценатов, да и верстку ломать не хочется =)
            if (inputDonate.value && inputDonate.value < 10000000000 & inputDonate.value !== "0" && inputDonate.value > 0) {
                this.#createDonateList(inputDonate.value)
                this.#calkulationSumDonatetion()
                inputDonate.value = ""
            }
            else {
                inputDonate.value = ""
            }
        })
    }
}
DonationService.addDonate()
DonationService.renderingLocalSrorage()


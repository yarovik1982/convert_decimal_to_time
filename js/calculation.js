import { timeToDecimal, decimalToTime, formatTime } from "./helperFunctions.js";

export const calculation = {
    form: null,
    typeForm: "",

    getTypeForm() {
        return this.form.id;
    },

    setTypeForm() {
        this.typeForm = this.getTypeForm();
    },

    calcPercentage(form) {
        const dialogTime = form.querySelector("#time1").value;
        const waitTime = form.querySelector("#time2").value;
        const result = form.querySelector(".form-result");
        if (dialogTime && waitTime) {
            const dialogDecimal = timeToDecimal(dialogTime);
            const waitDecimal = timeToDecimal(waitTime);
            const totalTime = dialogDecimal + waitDecimal;
            const dialogPercentage = (dialogDecimal / totalTime) * 100;
            const waitPercentage = (waitDecimal / totalTime) * 100;
            result.textContent = `Диалог: ${dialogPercentage.toFixed(
                2
            )}%, Ожидание: ${waitPercentage.toFixed(2)}%`;
        }
    },

    convert(form) {
        const inputValue = form.querySelector("#num").value;
        const result = form.querySelector(".form-result");
        const { hours, minutes } = decimalToTime(inputValue);
        result.textContent = formatTime(hours, minutes);
    },

    calculationPerDay(form) {
        const inputTime = parseFloat(form.querySelector("#inpTime").value);
        const inputDay = parseFloat(form.querySelector("#inpDay").value);
        const result = form.querySelector(".form-result");
        const totalMinutes = (inputTime / inputDay) * 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.round(totalMinutes % 60);
        result.textContent = `В день: ${hours} часов ${minutes} минут`;
    },

    sampleCalc(form, operation) {
        const num1 = parseFloat(form.querySelector("#num1").value);
        const num2 = parseFloat(form.querySelector("#num2").value);
        const result = form.querySelector(".form-result");

        let calcResult;
        if (operation === "plus") {
            calcResult = num1 + num2;
        } else if (operation === "minus") {
            calcResult = num1 - num2;
        }

        const totalMinutes = calcResult * 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.round(totalMinutes % 60);

        result.textContent = ` ${hours} часов ${minutes} минут`;
    },

    handleClick(e) {
        e.preventDefault();
        const targetId = e.target.id;
        if (targetId === "btn-calc") {
            if (this.typeForm === "percent_D_O") {
                this.calcPercentage(this.form);
            } else if (this.typeForm === "converterTotal") {
                this.calculationPerDay(this.form);
            }
        } else if (targetId === "btn-clean") {
            this.form.querySelector(".form-result").innerHTML = "";
            this.form.reset();
        } else if (targetId === "plus" || targetId === "minus") {
            this.sampleCalc(this.form, targetId);
        }
    },

    init() {
        this.form = document.querySelector(".form");
        if (this.form) {
            this.setTypeForm();
            if (
                this.typeForm === "percent_D_O" ||
                this.typeForm === "converterTotal" ||
                this.typeForm === "calculator"
            ) {
                this.form.addEventListener(
                    "click",
                    this.handleClick.bind(this)
                );
            } else if (this.typeForm === "converter") {
                this.form.addEventListener("input", (e) => {
                    e.preventDefault();
                    this.convert(this.form);
                });
                this.form.addEventListener(
                    "click",
                    this.handleClick.bind(this)
                );
            }
        }
    },
};

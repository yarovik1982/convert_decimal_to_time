import { create } from "./form.js";
import { configApp } from "./configApp.js";
import { calculation } from "./calculation.js";

export function setActive() {
    const tabs = document.querySelectorAll(".tab__item");
    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            const curr = e.target;
            const id = curr.dataset.id;
            if (curr) {
                tabs.forEach((tab) =>
                    tab.classList.remove(configApp.tabActiveClass)
                );
                curr.classList.add(configApp.tabActiveClass);
                create(configApp.formContainer, id, configApp.templates[id]);
                calculation.init();
            }
        });
    });
    const defaultTab = document.querySelector(".tab__item_active");
    if (defaultTab) {
        const defaultId = defaultTab.dataset.id;
        create(
            configApp.formContainer,
            defaultId,
            configApp.templates[defaultId]
        );
        calculation.init()
    }
}

import { defineStore } from "pinia";

export const useGlobal = defineStore('global', {
    state: () => ({
        headerColor: '#dcdcdc',
        textColor: '#141414',
        primaryColor: '#333333',
        closed: true,
    }),
    actions: {
        setMenuIconStatus() {
            document.addEventListener('click', (event) => {
                if(event.target.id === "header-menu-icon") {
                    this.$patch({
                        closed: !this.closed,
                    })
                };
            })
        }
    }
})
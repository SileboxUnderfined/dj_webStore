Vue.component('nav-buttons', {
    template:
    `<div class="buttons">
        <a href="/">Главная</a>
        <a href="/products">Ассортимент</a>
    </div>`
})

new Vue({ el: "#buttons-app" })
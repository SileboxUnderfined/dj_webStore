Vue.component('nav-buttons', {
    template:
    `<div class="buttons">
        <a href="/">Главная</a>
        <a href="/products">Ассортимент</a>
        <a href="/orders">Заказы</a>
        <a href="/Account">Мой аккаунт</a>
    </div>`
})

new Vue({ el: "#buttons-app" })
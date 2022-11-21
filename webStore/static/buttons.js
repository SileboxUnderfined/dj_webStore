Vue.component('nav-buttons', {
    template:
    `<div class="buttons">
        <a href="/" class="btn btn-dark">Главная</a>
        <a href="/products" class="btn btn-dark">Ассортимент</a>
        <a href="/orders" class="btn btn-dark">Заказы</a>
        <a href="/Account" class="btn btn-dark">Мой аккаунт</a>
    </div>`
})

new Vue({ el: "#buttons-app" })
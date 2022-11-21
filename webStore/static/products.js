Vue.component('product',{
    props: ['name','description','price','type'],
    template: `
        <div class="product">
            <p>Наименование: {{ name }}</p>
            <p>Описание: {{ description }}</p>
            <p>Категория: {{ type }}</p>
            <p>Цена: {{ price }}</p>
            <a href="/buy" class="btn btn-success">Купить</a>
        </div>`
})

new Vue({
    el: "#products",
    data: {
        products: []
    },
    created: function() {
        const vm = this;
        axios.get('/api/products')
        .then(function (products) {
            axios.get('/api/products_types')
            .then(function (types) {
                dataproducts = products.data
                datatypes = types.data
                for (i = 0; i <  dataproducts.length; i++) {
                    dataproducts[i].type = datatypes.find(typeobj => typeobj.id === dataproducts[i].type).name
                }
            })
            vm.products = products.data
        })

    }

}
)
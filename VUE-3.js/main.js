const app = Vue.createApp({
    data(){
        return {
            titulo: 'Este es un hola con Vue.js',
            cantidad: 100,
            enlace: 'https://google.com',
            estado: false,
            servicios: ["transferencias", "pagos", "giros", "cheques"],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad *2
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar= true
                alert('Upss!! Se quedó sin saldo');
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad >500 ? 'text-success' : 'text-danger'
        }
    },

})
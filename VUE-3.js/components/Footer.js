app.component('footer-banco', {
    props: ['valor', 'fecha'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
        <h3>{{ texto }} - {{valor}} - {{fecha}}</h3>
    </div>
    `,
    data(){
        return {
            texto: 'Footer de mi sitio web dinamico'
        }
    }
})
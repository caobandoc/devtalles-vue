const { createApp, ref } = Vue;

const app = createApp({
    template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    <h1>Reactividad:</h1>
    <p>{{message}}</p>
    <p>{{author}}</p>
  `,
    setup() {
        const message = ref("I'm batman");
        const author = ref("Bruce Wayne");

        setTimeout(() => {
            message.value = "Soy Goku";
            author.value = "Kakaroto";
        }, 2000);

        return { message, author };
    },
});

app.mount("#myApp");

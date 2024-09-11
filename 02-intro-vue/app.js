const { createApp, ref } = Vue;

const app = createApp({
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

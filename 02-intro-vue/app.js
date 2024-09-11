const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const message = ref("I'm batman");
        const author = ref("Bruce Wayne");

        const changeName = () => {
            message.value = "I'm Superman";
            author.value = "Clark Kent";
        };

        return { message, author, changeName };
    },
});

app.mount("#myApp");

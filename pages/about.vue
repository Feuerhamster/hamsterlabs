<template>

    <div class="about">

        <article>

            <nuxt-content :document="about"></nuxt-content>

        </article>

    </div>

</template>

<script>
export default {
    name: "about",
    async asyncData({ $content }) {
        let about = await $content().where({ slug: "about" }).fetch();
        about = about[0];
        return { about };
    }
}
</script>

<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.about article {
    display: flex;
    flex-direction: column;
    max-width: 780px;
}
</style>
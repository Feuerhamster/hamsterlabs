<template>
    
    <div class="tags">
        <nuxt-link v-for="(tag, i) of formattedTags" :to="'/tags/' + tag" :data-aos="animation" :data-aos-delay="i * 100">#{{ tag }}</nuxt-link>
    </div>
    
</template>

<script>
export default {
    name: "Tags",
    props: {
        tags: Array,
        animation: String
    },
    computed: {
        formattedTags: function () {
            return this.tags.map((tag) => tag.match(/[a-z0-9\-]+/i)[0].toLowerCase());
        }
    }
}
</script>

<style scoped>

.tags {
    display: flex;
    flex-wrap: wrap;
}

.tags > a {
    font-weight: 500;
    text-decoration: none;
    font-size: 21px;
    color: #1493de;
    margin: 0 5px;
}

.tags > a:first-child {
    margin-left: 0;
}

.tags > a:hover {
    color: #1183c6;
}

</style>
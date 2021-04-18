<template>
    
    <article :class="{ inline }" data-aos="fade-up" :data-aos-delay="(index * 100)">
        
        <h1><a :href="article.path">{{ article.title }}</a></h1>
        
        <Tags :tags="article.tags" animation="fade-left" />
        
        <p>{{ description }}</p>
        
        <Author :name="article.author" :image="article.author_image" :meta="`am ${date}`" small/>
    
    </article>
    
</template>

<script>
export default {
    name: "ArticlePreview",
    props: {
        article: Object,
        index: Number,
        inline: Boolean
    },
    computed: {
        description: function () {
            return this.article.description.length > 150 ? this.article.description.substr(0, 150) + "..." : this.article.description;
        },
        date: function () {
            return new Date(this.article.createdAt).toLocaleDateString("de-De", { year: "numeric", month: "2-digit", day: "2-digit" });
        }
    }
}
</script>

<style scoped>
article {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: stretch;
    margin-bottom: 30px;
    max-width: 500px;
}

article.inline {
    margin: 30px;
    max-width: 400px;
}

article h1 {
    font-size: 34px;
    margin: 0 0 10px 0;
}

article .tags {
    margin-bottom: 10px;
}

article p:last-child {
    color: #888;
    margin: 0;
}

article h1 > a {
    color: #000;
    text-decoration: none;
}

article p {
    font-size: 21px;
    margin: 0 0 10px 0;
}
</style>
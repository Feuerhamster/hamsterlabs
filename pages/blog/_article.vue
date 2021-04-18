<template>

    <div class="article-wrapper">
        
        <div class="meta-box">
    
            <Author :name="article.author" :image="article.author_image" :meta="`am ${articleDate}`" />
            
            <Tags :tags="article.tags" />
            
            <TableOfContent :toc="article.toc" />
            
        </div>
        
        <article v-if="article">
    
            <h1>{{ article.title }}</h1>
    
            <nuxt-content :document="article"></nuxt-content>
            
        </article>

    </div>
    
</template>

<script>
import Author from "@/components/Author";
import Tags from "@/components/Tags";
import TableOfContent from "@/components/TableOfContent";
export default {
    components: {TableOfContent, Tags, Author},
    async asyncData({ $content, params }) {
        
        let article = await $content("blog")
            .where({ slug: params.article })
            .fetch();
        
        article = article[0] ? article[0] : null;
        
        return { article }
        
    },
    head() {
        return {
            title: this.article.title + " - HamsterLabs",
            meta: [
                { hid: "description", name: "description", content: this.article.description },
                { hid: "og:title", name: "og:title", content: this.article.title },
                { hid: "og:description", name: "og:description", content: this.article.description },
                { hid: "og:type", name: "og:type", content: "article" },
                { hid: "og:article:published_time", name: "og:article:published_time", content: this.article.createdAt },
                { hid: "og:article:author", name: "og:article:author", content: this.article.author }
            ]
        }
    },
    computed: {
        articleDate: function() {
            return new Date(this.article.createdAt).toLocaleDateString("de-De", { year: "numeric", month: "2-digit", day: "2-digit" });
        }
    }
}
</script>

<style scoped>

.article-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.article-wrapper article {
    display: flex;
    flex-direction: column;
    max-width: 720px;
}

.article-wrapper article > h1 {
    font-size: 42px;
    margin: 0 0 20px 0;
}

.article-wrapper div.meta-box {
    margin-right: 50px;
    position: sticky;
    top: 80px;
}

.article-wrapper div.meta-box .tags {
    margin-bottom: 20px;
    max-width: 200px;
}

@media only screen and (max-width: 750px) {

}

</style>
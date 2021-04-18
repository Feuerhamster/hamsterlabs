<template>

    <div class="blog-tags">
    
        <h1>Tag: <i>#{{ this.$route.params.tag }}</i></h1>
        
        <div>
            
            <ArticlePreview v-for="(article, i) of articles" :article="article" :index="i"></ArticlePreview>
            
        </div>
        
    </div>
    
</template>

<script>
import Author from "@/components/Author";
import Tags from "@/components/Tags";
import ArticlePreview from "~/components/ArticlePreview";
export default {
    components: {ArticlePreview, Tags, Author},
    async asyncData({ $content, params }) {
        
        let articles = await $content("blog").where({ tags: { $contains: params.tag } }).fetch();
        
        return { articles }
        
    }
}
</script>

<style scoped>

.blog-tags {
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.blog-tags h1 {
    text-align: left;
    margin: 0 0 30px 0;
    font-size: 34px;
}

</style>
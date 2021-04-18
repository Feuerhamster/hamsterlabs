<template>

    <div class="blog">
        
        <div class="article-wrapper">
            
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
    async asyncData({ $content }) {
        
        let articles = await $content("blog").fetch();
        
        return { articles }
        
    }
}
</script>

<style scoped>

.blog {
    display: flex;
    justify-content: center;
}

</style>
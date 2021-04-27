<template>
    
    <div class="page-wrapper">
        
        <div class="meta-box">
            <TableOfContent :toc="page.toc" header />
        </div>
        
        <nuxt-content :document="page"></nuxt-content>
    
    </div>

</template>

<script>
import TableOfContent from "@/components/TableOfContent";
export default {
    components: {TableOfContent},
    async asyncData({ $content, params }) {
        
        let page = await $content("pages").where({ slug: params.page }).fetch();
    
        page = page[0] ? page[0] : null;
        
        return { page }
        
    }
}
</script>

<style scoped>

.page-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.page-wrapper div.meta-box {
    margin-right: 50px;
}

.page-wrapper .nuxt-content {
    display: flex;
    flex-direction: column;
    max-width: 720px;
}

@media only screen and (max-width: 720px) {
    .page-wrapper div.meta-box {
        display: none;
    }
}
</style>
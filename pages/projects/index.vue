<template>

    <div class="projects-page">
    
        <ProjectBox v-for="project of projects" :project="project"></ProjectBox>
    
    </div>
    
</template>

<script>
import ProjectBox from "~/components/ProjectBox";

export default {
    components: {ProjectBox},
    async asyncData({ $content }) {
    
        let projects = await $content("projects").sortBy("sort").fetch();
    
        return { projects }
        
    }
}
</script>

<style scoped>
.projects-page {
    padding: 0;
}
</style>
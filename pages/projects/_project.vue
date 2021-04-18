<template>
    
    <div class="project-wrapper">
        
        <article v-if="project">
            <ProjectBox :project="project" disable-more compact></ProjectBox>
            
            <nuxt-content :document="project"></nuxt-content>
        
        </article>
    
    </div>
    
</template>

<script>
import {ExternalLinkIcon, GithubIcon} from "vue-feather-icons";
import ProjectBox from "~/components/ProjectBox";

export default {
    components: {ProjectBox, ExternalLinkIcon, GithubIcon},
    async asyncData({ $content, params }) {
        
        let project = await $content("projects")
            .where({ slug: params.project })
            .fetch();
    
        project = project[0] ? project[0] : null;
        
        return { project }
        
    },
    head() {
        return {
            title: this.project.title + " - HamsterLabs",
            meta: [
                { hid: "description", name: "description", content: this.project.description },
                { hid: "og:title", name: "og:title", content: this.project.title },
                { hid: "og:description", name: "og:description", content: this.project.description },
                { hid: "og:type", name: "og:type", content: "article" }
            ]
        }
    }
}
</script>

<style scoped>

.project-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.project-wrapper article {
    display: flex;
    flex-direction: column;
    max-width: 780px;
}

.project-wrapper article > h1 {
    font-size: 42px;
    margin: 0 0 20px 0;
}

</style>
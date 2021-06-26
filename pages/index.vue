<template>
    
    <div class="homepage">
    
        <div class="segment column">
        
            <h1>Projekte, Software und Apps</h1>
        
            <Apps :apps="projects" :animation-delay="200"></Apps>
            
            <br/>
            
            <LinkButton href="/projects" target="_self">Alle Projekte</LinkButton>
            
        </div>
    
        <div class="segment">
    
            <div>
                <h1>Technologien</h1>
                <p>
                    Alle Projekte basieren auf modernen Web-Technologien.
                    Dies bietet die Möglichkeit, schnell und einfach für die verschiedensten Plattformen zu entwickeln.
                    Aus diesem Grund sind die Programmiersprachen und Frameworks aus der Webentwicklung mit der Zeit zu meinen Favoriten geworden.
                </p>
            </div>
            
            <TechStack></TechStack>
    
        </div>
        
        <div class="segment column">
            
            <h1>GitHub Repositories</h1>
            
            <GitHubRepos github-user="Feuerhamster"></GitHubRepos>
    
            <LinkButton href="https://github.com/Feuerhamster?tab=repositories" target="_blank">Mehr Repositories</LinkButton>
            
        </div>
    
        <div class="segment column">
        
            <h1>Aktuelle Blog-Posts</h1>
            
            <div class="row">
                <ArticlePreview v-for="(article, i) of articles" :article="article" :index="i" inline></ArticlePreview>
            </div>
    
            <LinkButton href="/blog" target="_self">Blog besuchen</LinkButton>
            
    
        </div>
        
        <div class="segment column">
            
            <h1>Meine Freunde</h1>
            
            <div class="inline-segment">
                <FriendCard v-for="friend of friends" :friend="friend"></FriendCard>
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
import TechStack from "@/components/TechStack"
import Apps from "@/components/Apps";
import FriendCard from "~/components/FriendCard";
import GitHubRepos from "~/components/GitHubRepos";
import LinkButton from "~/components/LinkButton";
import ArticlePreview from "~/components/ArticlePreview";

export default {
    components: {ArticlePreview, LinkButton, GitHubRepos, FriendCard, Apps, TechStack},
    async asyncData({ $content }) {
        
        let projects = await $content("projects")
            .sortBy("sort")
            .only(["title", "slug", "path", "roundImage"])
            .where({ startpage: true })
            .fetch();
        
        let friends = await $content()
            .where({ slug: "friends" })
            .fetch();
        
        let articles = await $content("blog")
            .sortBy("createdAt")
            .limit(3)
            .fetch();
        
        return { projects, friends, articles };
    }
}
</script>

<style scoped>

.homepage {
    padding: 0;
}

.homepage > .segment {
    padding: 80px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.homepage > .segment.column {
    flex-direction: column;
}

.homepage > .segment h1 {
    font-size: 48px;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0 0 40px 0;
    text-align: center;
    position: relative;
}

.homepage > .segment p {
    font-size: 20px;
    text-align: center;
    max-width: 500px;
}

.homepage > .segment:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.025);
}

.homepage .inline-segment {
    display: flex;
    align-items: center;
}

.homepage .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}


@media only screen and (max-width: 900px) {
    .homepage > .segment, .homepage .inline-segment {
        flex-direction: column;
    }
}

@media only screen and (max-width: 720px) {
    .homepage > .segment h1 {
        font-size: 42px;
    }
}

</style>

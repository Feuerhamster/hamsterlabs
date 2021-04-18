<template>

    <div class="github-repos">
    
        <div class="repo" v-for="(repo, index) of repos" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            
            <h2>
                <BookIcon></BookIcon>
                <a :href="`https://github.com/${repo.owner}/${repo.repo}`" target="_blank">
                    <span v-if="repo.owner !== githubUser">{{ repo.owner }}/</span>
                    {{ repo.repo }}
                </a>
            </h2>
            
            <p v-html="repo.description"></p>
            
            <p>
                <span :class="['code', repo.language.toLowerCase()]"></span>
                <span>{{ repo.language }}</span>
                <span>
                    <StarIcon></StarIcon>
                    {{ repo.stars }}
                </span>
                <span>
                    <GitBranchIcon></GitBranchIcon>
                    {{ repo.forks }}
                </span>
            </p>
            
        </div>
    
    </div>
    
</template>

<script>
import {StarIcon, GitBranchIcon, BookIcon} from "vue-feather-icons";

export default {
    name: "GitHubRepos",
    components: {StarIcon, GitBranchIcon, BookIcon},
    props: {
        githubUser: String
    },
    data() {
        return {
            repos: []
        }
    },
    async created() {
    
        try {
            let res = await this.$axios.get("https://gh-pinned-repos.now.sh/?username=" + this.githubUser);
            this.repos = res.data;
        } catch (e) {
            return;
        }
        
    }
}
</script>

<style scoped>
.github-repos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1080px;
    margin: 30px;
}

.github-repos > .repo {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    border: 1px solid #cfcfcf;
    border-radius: var(--border-radius);
    max-width: 500px;
}

.github-repos > .repo h2 {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
}

.github-repos > .repo h2 > a {
    display: flex;
    color: #1493de;
    text-decoration: none;
}

.github-repos > .repo h2 > a:hover {
    color: #1183c6;
}

.github-repos > .repo h2, .github-repos > .repo p {
    margin: 0 0 10px 0;
}

.github-repos > .repo p {
    font-size: 18px;
}

.github-repos > .repo p:last-child {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    margin-top: auto;
}

.github-repos > .repo p:last-child > span {
    margin: 0 20px 0 0;
    display: flex;
    align-items: center;
}

.github-repos > .repo span.code {
    width: 18px;
    height: 18px;
    margin-right: 10px!important;
    border-radius: 50%;
    border: 1px solid #1b1f231a;
}

.github-repos > .repo span.code.javascript {
    background-color: #f1e05a;
}

.github-repos > .repo span.code.typescript {
    background-color: #2b7489;
}

.github-repos > .repo span.code.html {
    background-color: #e34c26;
}

.github-repos > .repo span.code.css {
    background-color: #563d7c;
}

.github-repos > .repo span.code.ejs {
    background-color: #a91e50;
}

.github-repos > .repo span.code.pug {
    background-color: #a86454;
}

.github-repos > .repo span.code.vue {
    background-color: #2c3e50;
}

.github-repos > .repo h2 .feather {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    color: #555;
    stroke-width: 2px;
}

.github-repos > .repo p .feather {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}

</style>
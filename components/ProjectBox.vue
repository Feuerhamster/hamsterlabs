<template>
    
    <div :class="{'project-box': true, compact}">
        
        <img :src="require(`~/assets/apps/${project.slug}.png`)" data-aos="fade-right" alt="icon" :class="{round: project.roundImage}" />
        
        <div>
            <h1 data-aos="fade-down" :data-aos-delay="100">{{ project.title }}</h1>
            
            <p v-if="project.deprecated" data-aos="fade-left" :data-aos-delay="150">
                <span class="deprecated">Eingestellt / Beendet</span>
            </p>
            
            <p data-aos="fade-left" :data-aos-delay="200">
                {{ project.description }}
            </p>
            
            <p v-if="project.web || project.gihub">
                <a v-if="project.web" :href="project.web" target="_blank" data-aos="fade-left" :data-aos-delay="300">
                    <ExternalLinkIcon></ExternalLinkIcon> {{ hostname(project.web) }}
                </a>
                
                <a v-if="project.github" :href="project.github" target="_blank" data-aos="fade-left" :data-aos-delay="400">
                    <GithubIcon></GithubIcon> {{ githubRepo(project.github) }}
                </a>
            </p>
            
            <LinkButton data-aos="fade-up" :data-aos-delay="500" :href="project.path" v-if="!disableMore">Mehr Lesen</LinkButton>
        </div>
    </div>
    
</template>

<script>
import LinkButton from "~/components/LinkButton";
import {ExternalLinkIcon, GithubIcon} from "vue-feather-icons";

export default {
    name: "ProjectBox",
    components: {LinkButton, ExternalLinkIcon, GithubIcon},
    props: {
        project: Object,
        disableMore: Boolean,
        compact: Boolean
    },
    methods: {
        
        hostname: function (address) {
            return new URL(address).hostname;
        },
        
        githubRepo: function (url) {
            return url.match(/github.com\/(.+)/)[1];
        }
        
    }
}
</script>

<style scoped>
.project-box {
    padding: 80px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.project-box.compact {
    padding: 30px 20px;
}

.project-box h1 {
    font-size: 50px;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0 0 10px 0;
}

.project-box p {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 20px 0;
    font-size: 21px;
    max-width: 550px;
}

.project-box p > a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 21px;
    font-weight: 500;
    color: #707070;
    margin: 0 0 5px 0;
}

.project-box p > a:last-child {
    margin: 0;
}

.project-box p > a:hover {
    color: #555;
}

.project-box p > a .feather {
    color: #DE3C78;
    height: 24px;
    width: 24px;
    stroke-width: 2px;
    margin-right: 5px;
}

.project-box p .deprecated {
    color: #df4141;
    font-weight: 500;
}

.project-box img {
    max-height: 150px;
    border-radius: var(--border-radius);
    margin-right: 50px;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
}

.project-box img.round {
    border-radius: 50%;
}

.project-box:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.025);
}

@media only screen and (max-width: 720px) {
    
    .project-box {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .project-box img {
        margin: 0 0 20px 0;
        max-height: 120px;
    }
    
    .project-box h1 {
        font-size: 42px;
    }
    
    .project-box p {
        align-items: center;
    }
    
}
</style>
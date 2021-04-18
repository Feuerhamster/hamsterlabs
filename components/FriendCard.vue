<template>
    
    <div class="friend-card">
    
        <img :src="friend.image" data-aos="fade-up" alt="friend-image" />
        
        <h2 data-aos="fade-up" data-aos-delay="100">{{ friend.name }}</h2>
    
        <p data-aos="fade-up" data-aos-delay="200">{{ friend.bio }}</p>
        
        <a v-if="friend.web" :href="friend.web" target="_blank" data-aos="fade-up" data-aos-delay="300">
            <ExternalLinkIcon></ExternalLinkIcon> {{ website }}
        </a>
    
        <a v-if="friend.github" :href="friend.github" target="_blank" data-aos="fade-up" data-aos-delay="400">
            <GithubIcon></GithubIcon> {{ github }}
        </a>
        
    </div>
    
</template>

<script>
import { ExternalLinkIcon, GithubIcon } from "vue-feather-icons";

export default {
    components: {ExternalLinkIcon, GithubIcon},
    name: "FriendCard",
    props: {
        friend: Object
    },
    computed: {
    
        website: function () {
            return new URL(this.friend.web).hostname;
        },
    
        github: function () {
            return this.friend.github.match(/github.com\/(.+)/)[1];
        }
        
    }
}
</script>

<style scoped>

.friend-card {
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.friend-card > img {
    max-height: 200px;
    border-radius: var(--border-radius);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.friend-card a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 21px;
    font-weight: 500;
    color: #707070;
    margin: 0 0 5px 0;
}

.friend-card > h2 {
    font-size: 28px;
    margin: 20px 0 10px 0;
}

.friend-card > p {
    font-size: 18px;
    margin: 0 0 10px 0;
}

.friend-card a:last-child {
    margin: 0;
}

.friend-card a:hover {
    color: #555;
}

.friend-card a .feather {
    color: #DE3C78;
    height: 24px;
    width: 24px;
    stroke-width: 2px;
    margin-right: 5px;
}

</style>
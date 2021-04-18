<template>

    <div class="apps">
        
        <div v-for="(app, i) of apps" data-aos="fade-up" :data-aos-delay="(i * 100) + animationDelay">
            
            <a :href="app.path">
                <img :src="require(`~/assets/apps/${app.slug}.png`)" alt="icon" />
            </a>
            
            <span>{{ app.title }}</span>
            
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: "Apps",
    props: {
        apps: Array,
        animationDelay: Number
    }
}
</script>

<style scoped>
.apps {
    display: flex;
    flex-wrap: wrap;
}

.apps > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    flex: 1 1 0;
}

.apps > div > a > img {
    max-width: 100px;
    border-radius: 8px;
    transition: 0.1s transform;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.apps > div > a > img:hover {
    transform: scale(1.05);
}

.apps > div > span {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}
</style>
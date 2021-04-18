<template>

    <div class="tech-stack">
        
        <img title="HTML" src="~/assets/techstack/html.png" data-aos="zoom-in" alt="html" />
        <img title="CSS" src="~/assets/techstack/css.png" data-aos="zoom-in" alt="css" />
        <img title="Node.js" class="small" src="~/assets/techstack/node.png" data-aos="zoom-in" alt="node" />
        <img title="JavaScript" src="~/assets/techstack/js.png" data-aos="zoom-in" alt="js" />
        <img title="Electron Framework" src="~/assets/techstack/electron.png" data-aos="zoom-in" alt="electron" />
        <img title="WebSocket" src="~/assets/techstack/ws.png" data-aos="zoom-in" alt="ws" />
        <img title="Vue.js" src="~/assets/techstack/vue.png" data-aos="zoom-in" alt="vue" />
        <img title="Progressive Web App" class="small" src="~/assets/techstack/pwa.png" data-aos="zoom-in" alt="pwa" />
        <img title="Json Web Tokken" src="~/assets/techstack/jwt.png" data-aos="zoom-in" alt="jwt" />
        <img title="MongoDB" src="~/assets/techstack/mongo.png" data-aos="zoom-in" alt="mongodb" />

        
    </div>
    
</template>

<script>
export default {
    name: "TechStack"
}
</script>

<style scoped>

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 700px;
}

.tech-stack > img {
    max-height: 90px;
    margin: 20px;
    cursor: pointer;
    transition: 0.1s transform;
    -webkit-user-drag: none;
}

.tech-stack > img.small {
    max-height: 80px;
}

.tech-stack > img:hover {
    transform: scale(1.1);
}

</style>
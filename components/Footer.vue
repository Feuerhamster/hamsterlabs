<template>

    <footer>
        
        <nuxt-link to="/pages/imprint">Impressum</nuxt-link>
        <nuxt-link to="/pages/privacy">Datenschutz</nuxt-link>
        <a href="https://github.com/Feuerhamster">GitHub</a>
        <a href="https://twitter.com/Feuerhamster">Twitter</a>
        
        <span>© 2021 HamsterLabs</span>
        
    </footer>
    
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

footer {
    margin-top: auto;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 15px;
    flex-wrap: wrap;
}

footer > a, footer > span {
    font-family: 'Yantramanav', sans-serif;
    font-size: 16px;
    margin: 0 10px;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1px;
}

footer > a:hover {
    color: rgba(0, 0, 0, 0.5);
}

</style>
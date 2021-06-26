<template>
    
    <div class="app">
        
        <Header></Header>
        
        <Nuxt class="page" />
        
        <Footer></Footer>
        
    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    name: "default",
    components: {Footer, Header}
}
</script>

<style>

* {
    box-sizing: border-box;
}

html {
    min-height: 100vh;
    --border-radius: 4px;
}

body {
    min-height: 100vh;
    background-color: #fefefe;
    margin: 0;
    font-family: 'Yantramanav', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Yantramanav', sans-serif;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
}

.page {
    padding: 50px;
    overflow: hidden;
}

@media only screen and (max-width: 720px) {
    .page {
        padding: 20px;
    }
}
</style>

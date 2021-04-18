<template>
    
    <div class="toc">
        
        <h2 v-if="header">Inhalt</h2>
        
        <ul>
        
            <li v-for="el of toc" :class="{ subheader: el.depth > 2 }">
            
                <a :href="'#' + el.id">
                    {{ el.text }}
                </a>
        
            </li>
    
        </ul>
        
    </div>
    
    
</template>

<script>
export default {
    name: "TableOfContent",
    props: {
        toc: Array,
        header: Boolean
    }
}
</script>

<style scoped>

.toc h2 {
    font-size: 24px;
    margin: 0 0 10px 0;
}

.toc ul {
    margin: 0;
    list-style: none;
    padding: 0;
    max-width: 300px;
}

.toc ul > li {
    margin: 0;
    padding: 8px 0;
}

.toc ul > li.subheader {
    margin-left: 30px;
    position: relative;
}

.toc ul > li.subheader:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-left: 2px solid #bbb;
    border-bottom: 2px solid #bbb;
}

.toc ul > li a {
    text-decoration: none;
    font-size: 18px;
    color: #707070;
    font-weight: 500;
    width: 100%;
    display: inline-block;
}

.toc ul > li a:hover {
    color: #333;
}
</style>
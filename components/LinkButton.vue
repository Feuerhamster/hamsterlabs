<template>

    <span>
        <nuxt-link v-if="href.startsWith('/')" class="link-button" :to="href" :target="target">
            <slot />
        </nuxt-link>
        <a v-else class="link-button" :href="href" :target="target">
            <slot />
        </a>
    </span>
    
    
</template>

<script>
export default {
    name: "LinkButton",
    props: {
        href: String,
        target: String
    }
}
</script>

<style scoped>

span {
    display: inline-block;
}

a.link-button {
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-family: 'Yantramanav', sans-serif;
    color: white;
    font-weight: bold;
    font-size: 21px;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, #DE3C78, #edb33c);
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    transition: 0.05s transform;
}

a.link-button:hover {
    transform: scale(1.05);
}

</style>
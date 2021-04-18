<template>
    
    <div :class="{author: true, small}">
        <img :src="image" alt="author" />
        <div>
            <span>{{ name }}</span>
            <span>{{ meta }}</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "Author",
    props: {
        image: String,
        name: String,
        meta: String,
        small: Boolean
    }
}
</script>

<style scoped>

.author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.author.small {
    flex-direction: row;
}

.author > img {
    max-height: 58px;
    border-radius: 4px;
    margin-right: 10px;
    -webkit-user-drag: none;
}

.author.small > img {
    max-height: 32px;
}

.author > div {
    display: flex;
    flex-direction: column;
}

.author.small > div {
    flex-direction: row;
}

.author span {
    font-weight: 500;
    font-size: 21px;
}

.author span:first-child {
    margin-right: 10px;
}

.author span:last-child {
    font-weight: 500;
    color: #888;
    font-size: 21px;
}

@media only screen and (max-width: 480px) {
    .author.small > div {
        flex-direction: column;
    }
    .author.small > img {
        max-height: 42px;
    }
}
</style>
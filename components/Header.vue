<template>

    <div class="header">
    
        <nav ref="navbar" :class="{showNav, background}">
        
            <img src="/logo-360.png" alt="logo" />
            
            <h2>
                HamsterLabs
                <span v-if="routeMatch">
                    <span class="divider">/</span>
                    {{ routeMatch }}
                </span>
            </h2>
            
            <span class="spacer"></span>
            
            <button class="mobile-button" @click="showNav = !showNav">
                <menu-icon></menu-icon>
            </button>
            
            <div :class="{showNav}" @click="showNav = !showNav">
                <nuxt-link to="/" exact>Startseite</nuxt-link>
                <nuxt-link to="/about" exact>Über mich</nuxt-link>
                <nuxt-link to="/projects" exact>Projekte</nuxt-link>
                <nuxt-link to="/blog" exact>Blog</nuxt-link>
            </div>
            
        </nav>
        
        <div>
            <h1 data-aos="fade-up">HamsterLabs</h1>
    
            <h2 data-aos="fade-up" data-aos-delay="100">Professionelle Web- und Anwendungsentwicklung</h2>
        </div>
        
    </div>
    
</template>

<script>
import { MenuIcon } from "vue-feather-icons";

export default {
    name: "Header",
    components: { MenuIcon },
    data() {
        return {
            showNav: false,
            background: false,
            routeMapping: {
                blog: "Blog",
                tags: "Blog",
                projects: "Projekte",
                about: "Über mich",
                contact: "Kontakt",
                imprint: "Impressum",
                privacy: "Datenschutz"
            }
        }
    },
    computed: {
        routeMatch: function () {
            
            let routes = Object.keys(this.routeMapping).join("|");
            
            let rgx = new RegExp(`/(${routes})`);
            let match = this.$route.path.match(rgx);
            return match ? this.routeMapping[match[1]] : false;
        }
    },
    mounted() {
    
        document.addEventListener("scroll", (event) => {
            this.background = window.scrollY > 80;
        })
        
    }
}
</script>

<style scoped>

.header {
    display: flex;
    flex-direction: column;
    background-image: url("/header.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    height: 400px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

.header > div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

/* Titles */
.header > div > h1 {
    font-size: 82px;
    font-weight: 900;
    margin: 0 0 20px 0;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    letter-spacing: 3px;
    text-align: center;
}

.header > div > h2 {
    font-size: 34px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Navbar */
.header > nav {
    display: flex!important;
    padding: 10px;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
}

.header > nav.background {
    background-color: #a13659;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

.header > nav > h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 0 10px;
}

.header > nav > h2 .divider {
    color: rgba(255,255,255,0.5);
}

.header > nav > img {
    border-radius: var(--border-radius);
    max-height: 40px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
}

.header > nav > .spacer {
    flex-grow: 1;
}

.header > nav > .mobile-button {
    display: none;
    background: none;
    color: white;
    border: 0;
    outline: 0;
    cursor: pointer;
}

.header > nav > .mobile-button .feather {
    height: 36px;
    width: 36px;
}

.header > nav > div {
    display: flex;
}

.header > nav a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-family: 'Yantramanav', sans-serif;
    font-size: 24px;
    margin: 0 10px;
    position: relative;
}

.header > nav a:after {
    transition: 0.2s ease width, 0.2s ease opacity;
    display: inline-block;
    width: 0;
    content: "";
    opacity: 0;
    border-bottom: 3px solid white;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: -1px;
    border-radius: 32px;
}

.header > nav a:hover:after {
    opacity: 0.5;
    width: 100%;
}

@media only screen and (max-width: 750px) {
    
    .header {
        height: 300px;
    }
    
    .header > div > h1 {
        font-size: 48px;
    }
    
    .header > div > h2 {
        font-size: 24px;
    }
    
    .header > nav > h2 span {
        display: none;
    }
    
    .header > nav.showNav {
        background-color: #a13659;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }
    
    .header > nav > .mobile-button {
        display: flex;
    }
    
    .header > nav > div {
        display: none;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 60px;
        left: 0;
        background-color: #a13659;
        width: 100%;
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
    }
    
    .header > nav > div.showNav {
        display: flex;
    }
    
    .header > nav > div > a {
        margin: 10px;
    }
    
    .header > nav > .mobile-button {
        display: flex;
    }
    
}
</style>
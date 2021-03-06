export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "HamsterLabs",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "generator", name: "generator", content: "Nuxt" },
            { hid: "theme-color", name: "theme-color", content: "#DE3C78" },
            { hid: "description", name: "description", content: "Professionelle Web- und Anwendungsentwicklung" },
            { hid: "og:title", name: "og:title", content: "HamsterLabs.de" },
            { hid: "og:type", name: "og:type", content: "website" },
            { hid: "og:description", name: "og:description", content: "Professionelle Web- und Anwendungsentwicklung" },
            { hid: "og:image", name: "og:image", content: "/logo-360.png" },
            { hid: "og:site_name", name: "og:site_name", content: "HamsterLabs.de" }

        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Yantramanav:wght@400;500;700;900&display=swap" }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~/assets/css/md-style.css"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        "~/plugins/aos.client.js"
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    loading: {
        color: "#FFC041",
        height: "3px"
    },

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        "nuxt-ackee"
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/content
        "@nuxt/content",
        "@nuxtjs/axios"
    ],
    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {
        liveEdit: false,
        markdown: {
            prism: {
                theme: "prism-themes/themes/prism-material-oceanic.css"
            }
        }
    },

    ackee: {
        server: "https://analytics.hamsterlabs.de",
        domainId: "cec3afaf-0a2e-457c-8bdb-e9cfed5e36fa",
        ignoreLocalhost: true,
        detailed: true
    },

    publicRuntimeConfig: {
        aos: {
            startEvent: "load",
            duration: 500,
            offset: 50,
            once: true
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        html: {
            minify: {
                collapseWhitespace: true,  // as @dario30186 mentioned
                removeComments: true, // ???? add this line
            }
        }
    }
}

export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    render(h) {
        // 渲染成锚点
        // <a href="#/about">abc</a>
        // <router-link to="/about">xxx</router-link>
        // h(tag, data, children)
        return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
}

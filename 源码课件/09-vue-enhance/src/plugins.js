import echarts from 'echarts'

export const useEchartsComponent = {
    install: function(Vue) {
        let id = 0;
        Vue.component('echart', {
            data() {
                return {
                    id: `__echart-el=${id++}`
                }
            },

            props: {
                options: {
                    type: Object
                }
            },

            mounted() {
                const $el = document.getElementById(this.id)
                const myChart = echarts.init($el)
                myChart.setOption(this.options)
            },

            render(createElement) {
                return createElement(
                    'div',
                    {
                        attrs: {
                            id: this.id
                        },
                        style: {
                            width: '500px',
                            height: '500px'
                        }
                    }
                )
            }
        })
    }
}

export const onReachBottomNotify = {
    install(Vue) {
        Vue.mixin({
            mounted() {
                const THRESHOLD = 50
                if (typeof this.onReachBottom === 'function') {
                    window.addEventListener('scroll', () => {
                        const sub = document.documentElement.offsetHeight - (window.scrollY + window.screen.height)
                        if (sub < THRESHOLD) {
                            this.onReachBottom()
                        }
                    })
                }
            }
        })
    }
}
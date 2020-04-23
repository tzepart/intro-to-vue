<template>
    <div class="container">
        <div class="row">
            <div class="chart-wrap">
                <apexcharts width="380" :options="chartOptions" :series="series"></apexcharts>
            </div>
        </div>
        <div class="row">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" @click="appendData">+ ADD</button>
                <button type="button" class="btn btn-danger" @click="removeData">- RMV</button>
                <button type="button" class="btn btn-warning" @click="randomize">RAND</button>
                <button type="button" class="btn btn-info" @click="reset">RESET</button>
            </div>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'Chart',
        components: {
            apexcharts: VueApexCharts,
        },
        data() {
            return {
                series: [44, 55, 13, 33],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'donut',
                    },
                    dataLabels: {
                        enabled: false
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                show: false
                            }
                        }
                    }],
                    legend: {
                        position: 'right',
                        offsetY: 0,
                        height: 230,
                    }
                },
            }
        },
        methods: {
            appendData: function () {
                var arr = this.series.slice();
                arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
                this.series = arr
            },

            removeData: function () {
                if (this.series.length === 1) return;
                var arr = this.series.slice();
                arr.pop();
                this.series = arr
            },

            randomize: function () {
                this.series = this.series.map(function () {
                    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
                })
            },

            reset: function () {
                this.series = [44, 55, 13, 33]
            }
        }
    }
</script>
<style scoped>

</style>
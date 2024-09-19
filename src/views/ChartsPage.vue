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
        <div class="row highlights-item">
            <fusioncharts
                    :type="type"
                    :width="width"
                    :height="height"
                    :dataFormat="dataFormat"
                    :dataSource="dataSource"
            >
            </fusioncharts>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    const dataSource = {
        chart: {
            caption: "Микросервисы, 2017",
            subcaption:
                "Click on the segments to Drill-down for ...",
            showplotborder: "2",
            theme: "umber"
        },
        data: [
            {
                id: "999",
                parent: "",
                name: "Микросервисы",
                value: 40,
                toolText: "This book about...."
            },
            {
                id: "1",
                parent: "999",
                name: "Глава 1. Побег из монолитного ада",
                value: 20,
            },
            {
                id: "3",
                parent: "1",
                name: "Глава 1.1",
                value: 15,
            },
            {
                id: "7",
                parent: "3",
                name: "Глава 1.1.1",
                value: 8,
            },
            {
                id: "8",
                parent: "3",
                name: "Глава 1.1.2",
                value: 7,
            },
            {
                id: "4",
                parent: "1",
                name: "Глава 1.2",
                value: 5,
            },
            {
                id: "2",
                parent: "999",
                name: "1.1. Медленным шагом в монолитный ад",
                value: 20,
            },
            {
                id: "5",
                parent: "2",
                name: "Глава 2.1",
                value: 5,
            },
            {
                id: "6",
                parent: "2",
                name: "Глава 2.2",
                value: 15,
            },
        ],
        styles: {
            definition: [
                {
                    name: "myHTMLFont",
                    type: "font",
                    ishtml: "1"
                }
            ],
            application: [
                {
                    toobject: "TOOLTIP",
                    styles: "myHTMLFont"
                }
            ]
        }
    };

    export default {
        name: 'Chart',
        components: {
            apexcharts: VueApexCharts,
        },
        data() {
            return {
                type: "sunburst",
                width: "100%",
                height: "100%",
                dataFormat: "json",
                dataSource,
                events: {
                    dataPlotClick: function(ev, props) {
                        console.log(ev, props);
                    },
                    dataPlotRollOver: function(e) {
                        console.log(e);
                    },
                    dataPlotRollOut: function(e) {
                        console.log(e);
                    }
                },


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
    .highlights-item {
        min-height: 500px;
        max-height: 700px;
        background-color: #FFFFFF;
    }
</style>

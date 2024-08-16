<template>
    <div class="container">
        <div class="row">
            <div class="col-6 chart-wrap">
                <apexcharts width="380" :options="chartOptions" :series="series"></apexcharts>
            </div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label for="idPrice">Price</label>
                        <input v-model="price" type="number" class="form-control" id="idPrice" placeholder="Price">
                    </div>
                    <div class="form-group">
                        <label for="idFreeMonthMoney">Free Month Money</label>
                        <input v-model="freeMonthMoney" type="number" class="form-control" id="idFreeMonthMoney"
                               placeholder="Free Month Money">
                    </div>
                    <div class="form-group">
                        <label for="idCountMonth">Count Month</label>
                        <input v-model="countMonth" type="number" class="form-control" id="idCountMonth"
                               placeholder="Count Month">
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" @click="calculate">CALCULATE</button>
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
                price: null,
                freeMonthMoney: null,
                countMonth: null,
                series: [10, 90],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'donut',
                    },
                    // dataLabels: {
                    //     enabled: false
                    // },
                    labels: ['Your Money', 'Remaining Amount'],
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
            calculate: function () {
                const price = Math.floor(this.price);
                const freeMonthMoney = Math.floor(this.freeMonthMoney);
                const countMonth = Math.floor(this.countMonth);
                const sector1 = 100 * ((freeMonthMoney * countMonth) / price);
                const sector2 = 100 - sector1;
                this.series = [sector1, sector2];
            },
            reset: function () {
                this.series = [10, 90]
            }
        }
    }
</script>

<style scoped>
    button {
        margin: 10px;
        width: auto;
    }
</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col-6 chart-wrap">
                <apexcharts width="480" :options="chartOptions" :series="series"></apexcharts>
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
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">Count Years and Month</span>
                        </div>
                        <select v-model="countYears" class="custom-select" id="idCountYears">
                            <option v-for="(yearsNumber, index) in yearsNumbers" v-bind:key="index">
                                {{yearsNumber}}
                            </option>
                        </select>
                        <select v-model="countMonth" class="custom-select" id="idCountMonth">
                            <option v-for="(monthNumber, index) in monthNumbers" v-bind:key="index">
                                {{monthNumber}}
                            </option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <span v-if="needTime>0">{{formattedNeedTime}}</span>
            </div>
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
                countYears: null,
                needTime: 0,
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
                const countYears = Math.floor(this.countYears);
                const countMonth = Math.floor(this.countMonth);
                const sector1 = 100 * ((freeMonthMoney * (countYears * 12 + countMonth)) / price);
                const sector2 = 100 - sector1;
                this.series = [sector1, sector2];
                this.needTime = Math.ceil(price / freeMonthMoney);
            },
            reset: function () {
                this.series = [10, 90];
                this.needTime = 0;
            }
        },
        computed: {
            yearsNumbers() {
                const values = [];
                for (let i = 0; i <= 15; i++) {
                    values.push(i);
                }
                return values;
            },
            monthNumbers() {
                const values = [];
                for (let i = 0; i <= 12; i++) {
                    values.push(i);
                }
                return values;
            },
            formattedNeedTime() {
                const years = Math.floor(this.needTime / 12);
                const months = this.needTime - years * 12;
                return 'You need ' + years + ' years and ' + months + ' months';
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
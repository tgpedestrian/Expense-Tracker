<script>
import rightHeaderVue from '../views/RightHeaderVue.vue'
export default {
    components:{
        rightHeaderVue,
    }
}
</script>

<template>
    <div class="headerGroup">
    <div class="headerStyle">
        <div class="headerDiv">
            <h1>Expense Tracker</h1>
        </div>
        <div class="headerDiv">

            <h2>LI - FENG</h2>
            <br>
            <h3>MY&emsp;BALANCE</h3>
            <h4>$3,600</h4>

        </div>
        <div class="headerDiv"></div>
        
        
    </div>
    <div class="rightHeader">
        <rightHeaderVue />
    </div>
</div>
</template>


<style lang="scss" scoped>

.headerGroup{
    display: flex;

    .headerStyle{
        width: 30%;
        height: 100vh;
        background-color: #9CB6F5;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;

        .headerDiv{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
            height: 30%;

            color:azure;
            h1{
                letter-spacing: 5px;
            }
            h2 h3{
                letter-spacing: 2px;
            }
            h4{
                font-size: 40px;
                letter-spacing: 5px;
                position: relative;
                bottom: 60px;

            
            }
        }
    }
    .rightHeader{
        width: 70%;
        height: 100vh;
        background-color: #F2DDCB;
    }
}

</style>
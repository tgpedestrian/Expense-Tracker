<script>
export default {
    
}
</script>

<template>
    <div class="rightHeaderGroup">
        <div class="msgGroup">
            <div class="leftGreen">
                <span>INCOME</span>
                <span>$7,800</span>
            </div>
            <div class="rightRed">
                <span>EXPENSE</span>
                <span>$3,800</span>
            </div>
        </div>

        <div class="btnGroup">
            <button class="addBtn">Add transition</button>
            <button class="deleteBtn">Delete transition</button>
        </div>

        <div class="bill">
            <div class="billOnce">
                <p>Breakfast</p>
                <p><span>$65.00</span></p>
            </div>
        </div>
        
        
    </div>
</template>

<style lang="scss" scoped>

.rightHeaderGroup{
    height: 100vh;

    .msgGroup{
        display: flex;
        justify-content: center;
        height: 35%;
        .leftGreen{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 35%;

            span{
                font-size: 30px;
                margin: 5px;
                letter-spacing: 3px;
                color: #F58A6B;
            }
            
        }
        .rightRed{
            display: flex;
            justify-content:center;
            flex-direction: column;
            align-items: center;
            width: 35%; 
            span{
                font-size: 30px;
                margin: 5px;
                letter-spacing: 3px;
                color: #5FA839;
                
            }
        }

    }
    .btnGroup{
        display: flex;
        justify-content: center;

        .addBtn{
            margin: 0 40px ;
            width: 200px;
            height: 26px;
            border-radius: 10px;
            font-size: 15px;
            color: #A69C94;
            
        }
        .deleteBtn{
            margin: 0 40px ;
            width: 200px;
            height: 26px;
            border-radius: 10px;
            font-size: 15px;
            color: #A69C94;
            opacity: 0.5;
            
            
        }
        
        .addBtn:active{
            scale: 1.2;
            
        }
        .deleteBtn:active{
            scale: 1.2;
        }
    }

    .bill{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        
        .billOnce{
            display: flex;
            width: 50%;
            justify-content: space-around;
            border: 2px solid #9CB6F5;
            border-radius: 10px;
            text-shadow: #9CB6F5 20px 20px 10px 20px ;
            color: #9CB6F5;
            font-weight: bold;
            letter-spacing: 3px;
            font-size: 20px;
            margin: 5px;

            span{
                color: #F58A6B;
            }
        }

        .billOnce:active{
            background-color: #9CB6F5;
            color: aliceblue;
            
        }

    }
}

</style>
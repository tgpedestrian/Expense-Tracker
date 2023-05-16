<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    
}
</script>

<template>
    <div class="loginGroup">
        <h1>Expense Tracker</h1>
        <form>
            <label for="account">account</label>
            <input class="cl-input" id="account" type="text" placeholder="EX : abc123">

            <label for="password">password</label>
            <input  class="cl-input" id="password" type="password" placeholder="EX : OhMyGod456" >
            <div class="btnGroup">

                <button class="btnStyle btn1">Sign Up </button>
                <button class="btnStyle "><router-link to="/headerVue">Log In</router-link></button>
            </div>
        </form>

    </div>
    
    <RouterView />
</template>

<style lang="scss" scoped>
.loginGroup{
    background-color: #F2DDCB;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1{
        letter-spacing: 5px;
        color: #9CB6F5;
    }

    form{
        width: 400px;
        height: 245px;
        display: flex;
    justify-content: center;
    flex-direction: column;

    label{
        color: #A69C94;
        font-size: 15px;
        letter-spacing: 2px;
    }


    .cl-input{
        height: 26px;
        border-radius: 10px;
        margin: 10px 10px 30px 0;

    }
    .btnGroup{
        // height: 28px;
        
        display: flex;
        justify-content: space-evenly;
    
        .btnStyle{
            width: 100px;
            height: 26px;
            border-radius: 10px;
            color: #A69C94;
            background-color: #F2EBB3;
            font-size: 15px;
            a{
                text-decoration: none;
            }
        
        }
        .btnStyle:active{
            scale: 1.2;
        }
        .btn1{
                opacity: 0.4;
            }
    }
}
}


</style>
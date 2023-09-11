<template>
    <div @dblclick="toHome" class="background-img">
        <div class="intro">
            <p class="intro-cn">时间同步监控平台</p>
            <!-- <el-divider class="intro-divider" direction="horizontal" content-position="center"></el-divider> -->
            <p class="intro-en">The Monitor of Clock Offset</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {
            toHome() {
                this.$router.push('/Home')
            }
        }
    }
</script>

<style lang="less" scoped>
    body {
        margin: 0;
        padding: 0;
        border: 0;
    }
    .background-img {
        background-image: url('../assets/img/time-server.jpg');
        height: 100%;
        width: 100%;
        position: fixed;
        background-size: 100% 100%;
    }
    
    .intro {
        text-align: left;
        margin: 0;
        border: 0;
        width: 600px;
        height: 300px;
        padding-left: 1800px;
        padding-top: 800px;
        // padding: 30% ;
        // padding-right: 50%;
        .intro-cn {
            font-size: 60px;
            color: #2f0975;
            font-family:'hwxk';
            font-weight: 400;
            // padding-bottom: 0%;
            line-height: 0;
        }

        .intro-en {
            font-size: 40px;
            color: #2f0975;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 90;
            line-height: 5px;
        }

        .intro-divider {
            color: #2f0975;
        }
    }
</style>


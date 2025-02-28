<template>
    <div class="layout">
        <div class="header-container">
            <header>Header</header>
        </div>
        <div class="main-container">
            <div class="side-bar">
                <ul>
                    <li>
                        <a href="#/explore" target="_self">发现</a>
                    </li>
                    <li>
                        <a href="https://baidu.com" target="_blank">发布</a>
                    </li>
                    <li>
                        <a href="#/notice" target="_self">通知</a>
                    </li>
                    <li>
                        <a href="#/mine" target="_self">我的</a>
                    </li>
                </ul>
            </div>
            <div class="main-content">
                <router-view></router-view>
            </div>
            <div class="bottom-menu">
                <ul class="menu-list">
                    <li class="menu-item">
                        <a href="#/explore" target="_self">发现</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://baidu.com" target="_blank">发布</a>
                    </li>
                    <li class="menu-item">
                        <a href="#/notice" target="_self">通知</a>
                    </li>
                    <li class="menu-item">
                        <a href="#/mine" target="_self">我的</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                
            }
        },

        methods: {
            
        }
    }
</script>

<style lang="less">
    a {
        text-decoration: none;
        background-color: transparent;
    }
    .layout {
        width: 100%;
        overflow: hidden;
        min-width: 320px;
        max-width: 1728px;
    }

    .header-container {
        width: 100vw;
        height: 72px;
        background-color: #012501;
        display: flex;
        flex-direction: column;
        justify-content:  center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
    }

    .main-container {
        width: 100vw;
        display: flex;

        .side-bar {
            height: calc(100vh - 72px);
            margin-top: 72px;
            position: fixed;
            background-color: aquamarine;

            li {
                height: 80px;
                text-align: center;
                line-height: 80px;
                list-style: none;
            }
        }

        .bottom-menu {
            display: none;
            width: 100%;
            position: fixed;
            bottom: 0;
            background-color: #ffff5f;

            .menu-list {
                display: flex;

                .menu-item {
                    height: 48px;
                    flex-grow: 1;
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .main-content {
            width: 100%;
            padding-left:  25%;
            height: 100vh;
            background-color: bisque;
        }
    }
    
    @media screen and (min-width: 1192px) and (max-width: 1423px) {
        .side-bar {
            width: calc(12px + calc(100vw - 6*24px) / 5 *1);
            margin-left: 12px;
        }
    }
    @media screen and (min-width: 960px) and (max-width: 1191px) {
        .side-bar {
            width: calc(12px + calc(100vw - 5*24px) / 4 *1);
            margin-left: 12px;
        }
    }
    @media screen and (min-width: 696px) and (max-width: 959px) {
        .side-bar {
            display: none;
        }
        .bottom-menu {
            display: block !important;
        }
    }
    @media screen and (max-width: 695px) {
        .side-bar {
            display: none;
        }
        .bottom-menu {
            display: block !important;
        }
    }
</style>
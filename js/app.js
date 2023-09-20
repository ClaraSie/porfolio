const App = {
    data() {
        return {
            portfolio: [
                {
                    id: 1,
                    title: 'KEYs 關鍵理財網',
                    content: '主要功能財富管理規劃系統，負責後端運算。另有開發保險平台(依據保險缺口找出合適的保險組合)、後台保險商品建檔系統(過去建檔使用人工計算，常有計算數據錯誤導致商品無法正確呈現，透過建檔系統自動計算讓人為疏失降到最低)、我的人生護照畫面(整合系統上原有的小工具，集成一個可以提供建議的小方案)等專案。',
                    imgUrl: 'images/porfolio_holdingkeys.png',
                    demoUrl: 'https://www.holdingkeys.com/HoldingKeys/'
                }, {
                    id: 2,
                    title: '2022 The F2E 活動網站設計',
                    content: '依照六角學院提供的活動文案，重新設計本屆的互動式活動報名官方網站，透過吸睛的視覺互動設計(使用GSAP animation)、卡片式資訊排版、和報名按鈕設計，協助使用者快速瀏覽活動資訊並輕鬆找到報名入口。',
                    imgUrl: 'images/porfolio_F2E.png',
                    demoUrl: 'https://clarasie.github.io/2022theF2E_week1/'
                }, {
                    id: 3,
                    title: '浪浪認養 & 救助公益網站',
                    content: '使用bootstrap5框架實現RWD，透過網站讓喜歡幫助浪浪的設計師們為飼主設計寵物似顏繪，並把設計費100%全數捐給浪浪們，除此之外，也有認養專區，讓喜歡貓貓狗狗的飼主們領養。',
                    imgUrl: 'images/porfolio_doggy.png',
                    demoUrl: 'https://clarasie.github.io/doggy_bs5/'
                }, {
                    id: 4,
                    title: '點點簽',
                    content: '護樹、永續、減碳的綠色生活，響應環保無紙化電子簽署(使用PDF.js、canvas、fabric.js)，省時便利又環保。以湖水綠為主色，水彩風格讓冰冷的網頁，有了一點綠色生機。',
                    imgUrl: 'images/porfolio_GNSign.png',
                    demoUrl: 'https://clarasie.github.io/Sweetaste/'
                }, {
                    id: 5,
                    title: '甜點電商Sweetaste*',
                    content: '甜點電商行銷網站，主要建構購物車、結帳畫面，從無到有純手刻，實作RWD網站。',
                    imgUrl: 'images/porfolio_Sweetaste.png',
                    demoUrl: 'https://clarasie.github.io/Sweetaste/'
                }, {
                    id: 6,
                    title: 'Scrum 新手村',
                    content: '用撲克牌互動的方式，讓使用者了解什麼是 Scrum。以撲克卡 21點的玩法，將 Scrum的概念帶入21點的玩法中，讓使用者快速上手(使用sortable、gsap)。',
                    imgUrl: 'images/porfolio_scrum.png',
                    demoUrl: 'https://clarasie.github.io/Scrum/'
                },
            ],
        }
    },
};
Vue.createApp(App).mount('#app');
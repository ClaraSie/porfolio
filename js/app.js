const App = {
    data() {
        return {
            portfolio: [{
                id: 1,
                title: '點點簽',
                content: '護樹、永續、減碳的綠色生活，響應環保無紙化電子簽署(使用PDF.js、canvas、fabric.js)，省時便利又環保。以湖水綠為主色，水彩風格讓冰冷的網頁，有了一點綠色生機。',
                imgUrl: 'images/porfolio_GNSign.png',
                demoUrl: 'https://clarasie.github.io/Sweetaste/'
            }, {
                id: 2,
                title: '2022 The F2E 活動網站設計',
                content: '依照六角學院提供的活動文案，重新設計本屆的互動式活動報名官方網站，透過吸睛的視覺互動設計(使用GSAP animation)、卡片式資訊排版、和報名按鈕設計，協助使用者快速瀏覽活動資訊並輕鬆找到報名入口。',
                imgUrl: 'images/porfolio_F2E.png',
                demoUrl: 'https://clarasie.github.io/2022theF2E_week1/'
            }, {
                id: 3,
                title: '浪浪認養&救助公益網站',
                content: '使用bootstrap5框架實現RWD，透過網站讓喜歡幫助浪浪的設計師們為飼主設計寵物似顏繪，並把設計費100%全數捐給浪浪們，除此之外，也有認養專區，讓喜歡貓貓狗狗的飼主們領養。',
                imgUrl: 'images/porfolio_doggy.png',
                demoUrl: 'https://clarasie.github.io/doggy_bs5/'
            }, {
                id: 4,
                title: '甜點電商Sweetaste*',
                content: '甜點電商行銷網站，主要建構購物車、結帳畫面，從無到有純手刻，實作RWD網站。',
                imgUrl: 'images/porfolio_Sweetaste.png',
                demoUrl: 'https://clarasie.github.io/Sweetaste/'
            }, {
                id: 5,
                title: 'KEYs關鍵理財網',
                content: '主要功能財富管理規劃系統，負責後端運算，另有開發保險平台、後台輸入商品系統、我的人生護照畫面等專案。',
                imgUrl: 'images/porfolio_holdingkeys.png',
                demoUrl: 'https://www.holdingkeys.com/HoldingKeys/'
            }
            ],

        }
    },
};
Vue.createApp(App).mount('#app');
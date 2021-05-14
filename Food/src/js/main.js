window.addEventListener('DOMContentLoaded', (e) => {
    // const tabsContent = document.querySelectorAll('.tabcontent');
    // const tabsWrap = document.querySelector('.tabheader__items');
    // const tabsBtns = document.querySelectorAll('.tabheader__item');

    // function hideTabs(){
    //     tabsContent.forEach( (item, i) => {
    //         item.classList.add('hide');
    //     });
    //     tabsBtns.forEach( (item) => {
    //         item.classList.remove('tabheader__item_active');        
    //     });
    // }
    // function showActive(i = 0){
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabsContent[i].classList.remove('hide');
    //     tabsBtns[i].classList.add('tabheader__item_active');
    // }
    // hideTabs();
    // showActive();
    
    // tabsWrap.addEventListener('click', (e) => {
    //     const target = e.target;
    //     tabsBtns.forEach( (item, i) => {
    //         item.classList.remove('tabheader__item_active');
    //         tabsContent[i].classList.add('hide');
    //         if (target == item){
    //             showActive(i);
    //         }
    //     });
    // });    

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContnent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

        function hideTabContent(){
            tabsContnent.forEach( item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });

            tabs.forEach( item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        function showTabContent(i = 0) {
            tabsContnent[i].classList.add('show','fade');
            tabsContnent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
        
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('tabheader__item')){
                tabs.forEach((item, i) => {
                    if (target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

});
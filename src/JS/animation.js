document.addEventListener('DOMContentLoaded', function(event){


$(document).ready(function(){
    $(document).on('click', ".section3", function(){
        console.log('asd');
    })
    
    function rotateNoRandom(num){
        return num;
    }           


    $(function(){
        function func(button, rotate, speed){
            let num = 0
            setInterval(function(){
                num = num + rotate;
                $(button).css('transform', 'rotate('+rotateNoRandom(num)+'deg)')

                if (num == 360){
                    num = 0;
                }

            }, speed)
        }
        func('#spin_hours', 2, 36)
        func('#spin_hours2', 2, 36)
        func('.earth', 0.1, 20)
        func('.mars', 0.095, 20)
    })

    
    
        
    $(document).on('mouseover', '.test1', function(e){
        $('.test1').css('opacity', '100%')
        $('.test3').css('opacity', '50%')
    })
    
    $(document).on('mouseout', '.test1', function(e){
        $('.test1').css('opacity', '35%');
    })
    
    $(document).on('mouseover', '.test2', function(e){
        $('.test2').css('opacity', '100%')
        $('.test3').css('opacity', '50%')
    })
    
    $(document).on('mouseout', '.test2', function(e){
        $('.test2').css('opacity', '50%');
        
    })
    
    $(document).on('mouseover', '.test3', function(e){
        $('.test3').css('opacity', '100%')
    })
    
    $(document).on('mouseout', '.test3', function(e){
        $('.test2').css('opacity', '50%');
    })
    
    $(document).on('mouseover', '.test4', function(e){
        $('.test4').css('opacity', '100%')
        $('.test3').css('opacity', '50%')
    })
    
    $(document).on('mouseout', '.test4', function(e){
        $('.test4').css('opacity', '50%');
        
    })
    
    $(document).on('mouseover', '.test5', function(e){
        $('.test5').css('opacity', '100%')
        $('.test3').css('opacity', '50%')
    })

    $(document).on('mouseout', '.test5', function(e){
        $('.test5').css('opacity', '35%');
        
    })
    
    $(document).on('mouseout', '.pre-section6', function(e){
        $('.test3').css('opacity', '100%');
    })
    
  
    
    
    /*Анимация при скролле*/

    let earth_point = document.querySelector('.earth')
    //$('document').on('click', 'window', animOnScroll)
    window.addEventListener('scroll', animOnScroll)
        function animOnScroll(){
            let earth_pointHeight = earth_point.offsetHeight; //получаем высоту объекта
            let earth_pointOffSet = offSet(earth_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            let earth_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            let earth_pointItemPoint = window.innerHeight - earth_pointHeight / earth_pointStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (earth_pointHeight > window.innerHeight){
                let earth_pointItemPoint = window.innerHeight - window.innerHeight / earth_pointStart
            }

            if ((pageYOffset > (earth_pointOffSet - earth_pointItemPoint)) && (pageYOffset < (earth_pointOffSet + earth_pointHeight))){
                $(function(){
                    $('#first-line').addClass('animations');
                    $('#first-line').addClass('anim1');
                    $('#second-line').addClass('animations');
                    $('#second-line').addClass('anim2');
                    $('#third-line').addClass('animations');
                    $('#third-line').addClass('anim3');
                    $('#fourth-line').addClass('animations');
                    $('#fourth-line').addClass('anim4');
                    $('#fifth-line').addClass('animations');
                    $('#fifth-line').addClass('anim5');
                    $('#sixth-line').addClass('animations');
                    $('#sixth-line').addClass('anim6');
                    $('#seventh-line').addClass('animations');
                    $('#seventh-line').addClass('anim7');
                    $('#eighth-line').addClass('animations');
                    $('#eighth-line').addClass('anim8');
                    
                    if ($('#fifth-line').hasClass('anim5')){
                        $('#fifth-line img').animate({
                            'opacity': 1
                        }, 1500)
                    }

                })
            }
            else {
                $('#first-line').removeClass('animations');
                $('#first-line').removeClass('anim1');
                $('#second-line').removeClass('animations');
                $('#second-line').removeClass('anim2');
                $('#third-line').removeClass('animations');
                $('#third-line').removeClass('anim3');
                $('#fourth-line').removeClass('animations');
                $('#fourth-line').removeClass('anim4');
                $('#fifth-line').removeClass('animations');
                $('#fifth-line').removeClass('anim5');
                $('#sixth-line').removeClass('animations');
                $('#sixth-line').removeClass('anim6');
                $('#seventh-line').removeClass('animations');
                $('#seventh-line').removeClass('anim7');
                $('#eighth-line').removeClass('animations');
                $('#eighth-line').removeClass('anim8');
            }

        }
    
    let mars_point = document.querySelector('.mars')
    window.addEventListener('scroll', animOnScroll2)
    function animOnScroll2(){
        let mars_pointHeight = mars_point.offsetHeight; //получаем высоту объекта
        let mars_pointOffSet = offSet(mars_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
        let mars_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

        let mars_pointItemPoint = window.innerHeight - mars_pointHeight / mars_pointStart

        //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
        if (mars_pointHeight > window.innerHeight){
            let mars_pointItemPoint = window.innerHeight - window.innerHeight / mars_pointStart
        }

        if ((pageYOffset > (mars_pointOffSet - mars_pointItemPoint)) && (pageYOffset < (mars_pointOffSet + mars_pointHeight))){
            $(function(){
                
                    $('#first-line-mars p').slideDown(800);
                    $('#second-line-mars p').slideDown(1200);
                    $('#third-line-mars p').slideDown(1600);
                    $('#fourth-line-mars p').slideDown(2000);
                    $('#fifth-line-mars p').slideDown(1000);
                    $('#sixth-line-mars p').slideDown(1400);
                    $('#seventh-line-mars p').slideDown(1800);
                    $('#eighth-line-mars p').slideDown(2200);


                    setTimeout(function(){
                        $('#first-line-mars img').fadeIn(1000)
                    }, 700)
                    
                                            
                    setTimeout(function(){
                        $('#sixth-line-mars img').fadeIn(1000)
                    }, 700)
                    
            })
        }
        
        else {

                $('#first-line-mars p').slideUp(300);
                $('#second-line-mars p').slideUp(300);
                $('#third-line-mars p').slideUp(300);
                $('#fourth-line-mars p').slideUp(300);
                $('#fifth-line-mars p').slideUp(300);
                $('#sixth-line-mars p').slideUp(300);
                $('#seventh-line-mars p').slideUp(300);
                $('#eighth-line-mars p').slideUp(300); 
        }
        
    }
    
    
    /*------------------------Для медиазапроса------------------------*/
    if(window.innerWidth < 1525){
        /*Section1 авто воспроизведение без скролла*/
        $(function(){
            $('.section1 h1').css('transform', 'translate(-48%, -50%)')
            $('.section1 h2').css('transform', 'translate(-50%, -50%)')
            $('.section1 img').css('top', '50%')
        })
        /*-----------------------------------------------------------*/

        window.addEventListener('scroll', animOnScroll3)
        let first_point = document.querySelector('.pre-section1')
        function animOnScroll3(){
            const first_pointHeight = first_point.offsetHeight; //получаем высоту объекта
            const first_pointOffSet = offSet(first_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            const first_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            const first_pointItemPoint = window.innerHeight - first_pointHeight / first_pointStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (first_pointHeight > window.innerHeight){
                let first_pointItemPoint = window.innerHeight - window.innerHeight / first_pointStart
            }

            if ((pageYOffset > (first_pointOffSet - first_pointItemPoint)) && (pageYOffset < (first_pointOffSet + first_pointHeight))){
                $(function(){
                    $('.section1 h1').css('transform', 'translate(-48%, -50%)')
                    $('.section1 h2').css('transform', 'translate(-50%, -50%)')
                    $('.section1 img').css('top', '50%')
                })
            }

            else {
                $('.section1 h1').css('transform', 'translate(-50%, -100%)')
                $('.section1 h2').css('transform', 'translate(-50%, -10%)')
                $('.section1 img').css('top', '20%')
            }

        }
    }
    
    else{
        /*Section1 авто воспроизведение без скролла*/
        $(function(){
            $('.section1 h1').css('transform', 'translate(-48%, -50%)')
            $('.section1 h2').css('transform', 'translate(-50%, -50%)')
            $('.section1 img').css('top', '50%')
        })
        /*-----------------------------------------------------------*/

        window.addEventListener('scroll', animOnScroll3)
        let first_point = document.querySelector('.pre-section1')
        function animOnScroll3(){
            const first_pointHeight = first_point.offsetHeight; //получаем высоту объекта
            const first_pointOffSet = offSet(first_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            const first_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            const first_pointItemPoint = window.innerHeight - first_pointHeight / first_pointStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (first_pointHeight > window.innerHeight){
                let first_pointItemPoint = window.innerHeight - window.innerHeight / first_pointStart
            }

            if ((pageYOffset > (first_pointOffSet - first_pointItemPoint)) && (pageYOffset < (first_pointOffSet + first_pointHeight))){
                $(function(){
                    $('.section1 h1').css('transform', 'translate(-48%, -50%)')
                    $('.section1 h2').css('transform', 'translate(-50%, -50%)')
                    $('.section1 img').css('top', '50%')
                })
            }

            else {
                $('.section1 h1').css('transform', 'translate(-150%, -50%)')
                $('.section1 h2').css('transform', 'translate(50%, -50%)')
                $('.section1 img').css('top', '20%')
            }

        }
    }
    
    window.addEventListener('scroll', animOnScroll4)
    let second_point = document.querySelector('.pre-section2')
    function animOnScroll4(){
        const second_pointHeight = second_point.offsetHeight; //получаем высоту объекта
        const second_pointOffSet = offSet(second_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
        const second_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

        const second_pointItemPoint = window.innerHeight - second_pointHeight / second_pointStart

        //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
        if (second_pointHeight > window.innerHeight){
            let second_pointItemPoint = window.innerHeight - window.innerHeight / second_pointStart
        }

        if ((pageYOffset > (second_pointOffSet - second_pointItemPoint)) && (pageYOffset < (second_pointOffSet + second_pointHeight))){
            $(function(){
                
                $('.pre-section2').css('top', '50%')
                $('.pre-section2').css('visibility', 'visible')

                
            })
        }
        
        else {
            $('.pre-section2').css('top', '35%');
            $('.pre-section2').css('visibility', 'hidden')

        }
        
    }
        
    if(window.innerWidth > 1070){
        window.addEventListener('scroll', animOnScroll5)
        let third_point = document.querySelector('.pre-section4')
        function animOnScroll5(){
            const third_pointHeight = third_point.offsetHeight; //получаем высоту объекта
            const third_pointOffSet = offSet(third_point).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            const third_pointStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            const third_pointItemPoint = window.innerHeight - third_pointHeight / third_pointStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (third_pointHeight > window.innerHeight){
                let third_pointItemPoint = window.innerHeight - window.innerHeight / third_pointStart
            }

            if ((pageYOffset > (third_pointOffSet - third_pointItemPoint)) && (pageYOffset < (third_pointOffSet + third_pointHeight))){
                $(function(){

                    $('.pre-section4').css('top', '50%')
                    $('.pre-section4').css('visibility', 'visible')

                })
            }

            else {
                $('.pre-section4').css('top', '35%');
                $('.pre-section4').css('visibility', 'hidden')
            }

        }
    };
    
    
    if(window.innerWidth < 720){
        $('#eighth-line-mars ul li:first-child').text('CO2')
//                $('#eighth-line-mars ul li:nth-child(2)').text('N2')
//                $('#eighth-line-mars ul li:nth-child(3)').text('Ar')
//                $('#eighth-line-mars ul li:nth-child(4)').text('O')
//                $('#eighth-line-mars ul li:last-child').text('CO')
        $('#third-line-mars p:last-child').text('6.4*10(23)')
        $('#second-line p:nth-child(2)').text('5.9*10(24)кг')
    }
        
    if(window.innerWidth < 480){
        $('#first-line p:first-child').text('Темп(t°C)')
        $('#eighth-line p:first-child').text('O2')
        $('#sixth-line p:first-child').text('S от Sun')
        $('#fourth-line-mars p:first-child').text('S от Sun')
        $('#fifth-line-mars p:first-child').text('Темп(t°C)')
    }
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //как раз таки данная функция позволяет высчитать позицию объекта.
    function offSet(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
//            animOnScroll()
//            animOnScroll2()
//            animOnScroll3()
//            animOnScroll4()
    

    
    
    /*---------------------------------------------------------------------------*/
    
    
    
    
    
    
    
    /*Блок смены цвета буквы*/
    
    let mSpan = document.querySelector('#mSpan')
    
    function randomColor(){
        let random = Math.floor(Math.random() * 16581375).toString(16);
        if (!((random > 0) && (random < 707070))){
            return random;
        }
    }
    
    setInterval(function(){
       mSpan.style.color = '#' + randomColor();     
    }, 1750)
    
    /*--------------------------------------------------------*/
    



})
})
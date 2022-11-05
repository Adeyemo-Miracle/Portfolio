gsap.registerPlugin(ScrollTrigger);

        var tl = gsap.timeline();
        var scr = gsap.timeline({paused:true});
        var scr1 = gsap.timeline({paused:true});

        tl.from('.content', {
            y:'-30%',
            opacity: 0,
            duration: 2,
            ease: Power4.easeOut
        })
        tl.from('.stagger1', {
            opacity: 0,
            y: -50,
            stagger: .3,
            ease: Power4.easeOut,
            duration: 2
        }, "-=1.5")
        tl.from('.hero-design', {
            opacity: 0, 
            y: 50,
            ease: Power4.easeOut,
            duration: 1,
        },"-=2")
        gsap.from(".used", {
            opacity:0,
            stagger: .3,
            scale: 0.1,
            duration: 1,
            ease: Back.easeOut.config(1.7)
        })
        scr
        .set('.transition3', {transformOrigin: 'center center'})
        .from('.transition2',{
            scale: 0.8,
            y: "+=100",
            opacity: 0,
            duration: 0.9,
            stagger: .9
        })
        let srt = ScrollTrigger.create({
            trigger:'.transition2',
            start: 'top bottom',
            animation: scr
        })
        scr1
        .set('.transition3', {transformOrigin: 'center center'})
        .from('.transition3',{
            scale: 0.8,
            y: "+=100",
            opacity: 0,
            duration: 0.9,
            stagger: .9
        })
        let srt1 = ScrollTrigger.create({
            trigger:'.transition3',
            start: 'top center',
            animation: scr1
        })
        document.querySelectorAll('.my-skills').forEach((x)=>{
            x.addEventListener(('click'), ()=>{
                document.querySelector('.skills').scrollIntoView()
            })
        })
        document.querySelectorAll('.my-work').forEach((x)=>{
            x.addEventListener(('click'), ()=>{
                document.querySelector('.portfolio').scrollIntoView()
            })
        })
        document.querySelectorAll('.hire-me').forEach((x)=>{
            x.addEventListener(('click'), ()=>{
                document.querySelector('.div1').scrollIntoView()
                document.querySelector('.div1').classList.add('HireAnim')
                setTimeout(()=> {
                    document.querySelector('.div1').classList.remove('HireAnim')
             }, 3000)
            })
        })
        
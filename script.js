gsap.registerPlugin(ScrollTrigger);
// Crieate timeline with GSAP
let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0%, 95%',
        end: '70% 50%',
        scrub: true,
        makers: true, //depuração
    },
});

timeLine.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange' //nomeando esse trecho da animação como "orange" para melhorar a sincronização
);

timeLine.to(
    '#cut-orange',
    {
        top: '155%',
        left: '23%',
    },
    'orange'
); //sincronizando com a animação orange

timeLine.to(
    '#orange',
    {
        width: '15%',
        top: '160%',
        right: '10%',
    },
    'orange',
);

timeLine.to(
    '#leaf',
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',
    },
    'orange',
);

timeLine.to(
    '#leaf-2',
    {
        top: '110%',
        rotate: '530deg',
        left: '0%',
    },
    'orange',
);
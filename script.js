gsap.registerPlugin(ScrollTrigger);
// Crieate timeline with GSAP
let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0%, 95%',
        end: '70% 50%',
        scrub: true,
        makers: false, //depuração
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

let timeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: false,
    },
});

timeLine2.from(
    '.lemon',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%'
    },
    'session-three',
);

timeLine2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%'
    },
    'session-three',
);

timeLine2.from(
    '.lemon-2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%'
    },
    'session-three',
);

timeLine2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%'
    },
    'session-three',
);

timeLine2.to(
    '#cut-orange',
    {
        width: '16%',
        left: '42%',
        top: '204%',
    },
    'session-three',
);

timeLine2.to(
    '#fanta',
    {
        width: '30%',
        left: '35%',
        top: '210%',
    },
    'session-three',
);
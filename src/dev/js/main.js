barba.init({
    debug: true,
    transitions: [{
            name: 'index',
            beforeOnce() {
                console.log('beforeOnce');
            },
            once() {
                console.log('once');
            },
            afterOnce() {
                console.log('aftereOnce');
            }
        },
        {
            name: 'blog',
            to: {
                namespace: ['blog']
            },

            leave() {},
            enter() {},

        },
    ]
});
const sub_msec = document.querySelector('.subscribe-milliseconds'),
      unsub_msec = document.querySelector('.unsubscribe-milliseconds'),
      sub_sec = document.querySelector('.subscribe-seconds'),
      unsub_sec = document.querySelector('.unsubscribe-seconds')
      fire_click_event = document.querySelector('.fire-click-event');

function EventObserver() {this.observers = [];};

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);

        console.log(`You are now subsribed to ${fn.name}`);
    },

    unsubscribe: function(fn) {
        this.observers = this.observers.filter(item => {if(item !== fn) return item});

        console.log(`You are now unsubsribed from ${fn.name}`);
    },

    fireClickEvent: function() {this.observers.forEach(func => func.call())}
};

const getCurrentMilliseconds = () => console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

const getCurrentSeconds = () => console.log(`Current Seconds: ${new Date().getSeconds()}`);

const click = new EventObserver();

sub_msec.addEventListener('click', () => click.subscribe(getCurrentMilliseconds));

unsub_msec.addEventListener('click', () => click.unsubscribe(getCurrentMilliseconds));

sub_sec.addEventListener('click', () => click.subscribe(getCurrentSeconds));

unsub_sec.addEventListener('click', () => click.unsubscribe(getCurrentSeconds));

fire_click_event.addEventListener('click', () => click.fireClickEvent());
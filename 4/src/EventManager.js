import Event from "./Event";

export default class EventManager {
    run() {
        let timeCount = 0;
        setInterval(() => {
            this.events.forEach(event => {
                if (event.second === timeCount && this.types.some(type => event.type === type)) {
                    return new Event(event.second, event.type, event.message);
                }
            });
            timeCount += 1;
        }, 1000)
    }

    constructor(events, types) {
        this.events = events;
        this.types = types;
    }
};

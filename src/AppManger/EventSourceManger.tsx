import EventSource, { EventSourceListener } from "react-native-sse";

export class EventSourceManger {
    static eventSource?: EventSource | null;

    // initilaize eventSource with url
    static init(url: string) {
        this.eventSource = new EventSource(url)
    }

    // add all events and retutn handler
    static getListerner(handler: EventSourceListener) {
        this.onMessage(handler)
        this.onError(handler)
        this.onOpen(handler)
        this.onClose(handler)
    }

    // add message event listener that is use for get message data
    static onMessage(handler: EventSourceListener) {
        this.eventSource?.addEventListener('message', handler);
    }

    // add error event listener that is use for get error 
    static onError(handler: EventSourceListener) {
        this.eventSource?.addEventListener('error', handler);
    }

    // add open event listener that is use for open connectionn
    static onOpen(handler: EventSourceListener) {
        this.eventSource?.addEventListener('open', handler);
    }

    // add close event listener that is use for close connectionn
    static onClose(handler: EventSourceListener) {
        this.eventSource?.addEventListener('close', handler);
    }

    // close and remove eventsource
    static closeRemoveConection() {
        this.close();
        this.onRemoveAllEventListeners();
    }

    // close eventsource
    static close() {
        this.eventSource?.close();
    }

    // remove all listeners 
    static onRemoveAllEventListeners() {
        this.eventSource?.removeAllEventListeners();
    }
}
import EventSource, { EventSourceListener, EventSourceOptions } from "react-native-sse";

export class EventSourceManager {
    static eventSource?: EventSource | null;

    // initialize eventSource with url
    static init(url: URL | string, options?:EventSourceOptions) {
        this.eventSource = new EventSource(url, options)
    }

    // add all events and return handler
    static getListener(handler: EventSourceListener) {
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

    // add open event listener that is use for open connection
    static onOpen(handler: EventSourceListener) {
        this.eventSource?.addEventListener('open', handler);
    }

    // add close event listener that is use for close connection
    static onClose(handler: EventSourceListener) {
        this.eventSource?.addEventListener('close', handler);
    }

    // close and remove eventSource
    static closeRemoveConnection() {
        this.close();
        this.onRemoveAllEventListeners();
    }

    // close eventSource
    static close() {
        this.eventSource?.close();
    }

     // open eventSource
     static open() {
        this.eventSource?.open();
    }

    // remove all listeners 
    static onRemoveAllEventListeners() {
        this.eventSource?.removeAllEventListeners();
    }
}
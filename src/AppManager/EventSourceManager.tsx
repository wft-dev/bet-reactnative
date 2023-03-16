import EventSource, { EventSourceListener, EventSourceOptions } from "react-native-sse";

export class EventSourceManager {
    static eventSource?: EventSource | null;

    // Initialize eventSource with url
    static init(url: URL | string, options?:EventSourceOptions) {
        this.eventSource = new EventSource(url, options)
    }

    // Add all events and return handler
    static getListener(handler: EventSourceListener) {
        this.onMessage(handler)
        this.onError(handler)
        this.onOpen(handler)
        this.onClose(handler)
    }

    // Add message event listener that is use for get message data
    static onMessage(handler: EventSourceListener) {
        this.eventSource?.addEventListener('message', handler);
    }

    // Add error event listener that is use for get error 
    static onError(handler: EventSourceListener) {
        this.eventSource?.addEventListener('error', handler);
    }

    // Add open event listener that is use for open connection
    static onOpen(handler: EventSourceListener) {
        this.eventSource?.addEventListener('open', handler);
    }

    // Add close event listener that is use for close connection
    static onClose(handler: EventSourceListener) {
        this.eventSource?.addEventListener('close', handler);
    }

    // Close and remove eventSource
    static closeRemoveConnection() {
        this.close();
        this.onRemoveAllEventListeners();
    }

    // Close eventSource
    static close() {
        this.eventSource?.close();
    }

     // Open eventSource
     static open() {
        this.eventSource?.open();
    }

    // Remove all listeners 
    static onRemoveAllEventListeners() {
        this.eventSource?.removeAllEventListeners();
    }
}
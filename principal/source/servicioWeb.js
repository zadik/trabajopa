enyo.kind({
    name: "PopupWindow",
    kind: enyo.Component,
    published: {
        url: "",
        options: ""
    },
    statics: {
        idIndex: 0
    },
    events: {
        onWindowClosed: ""
    },
    window: null,
    focus: function() {
        this.window != null && this.window.focus();
    },
    open: function() {
        this.windowName = "popup" + PopupWindow.idIndex;
        this.window = window.open(this.url, this.windowName, this.options);
        PopupWindow.idIndex++;
        this.interval = setInterval(enyo.bind(this, this.checkIfClosed), 250);
    },
    checkIfClosed: function() {
        if (this.window.closed == true) {
            this.doWindowClosed({
                window: this.window
            });
            clearInterval(this.interval);
        }
    }
});
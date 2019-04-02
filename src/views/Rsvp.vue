<template>
    <div id="eventbrite"></div>
</template>

<script>
export default {
    name: 'rsvp',
    components: {
    },
        mounted() {
        var exampleCallback = function() {
            console.log('Order complete!');
        };

        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '59763211374',
            iframeContainerId: 'eventbrite',
            
            // Optional
            iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        });
    }
};
</script>
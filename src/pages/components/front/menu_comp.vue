<template>
    <div>
        <layout :sidebar="sidebar"></layout>
    </div>
</template>

<script type="text/javascript">
    import layout from '@/layout/components/common/sidebar-container-bread';
    import sidebar from '@/pages/config/front-sidebar';

    export default {
        data() {
            return {
                sidebar
            }
        },
        components: {layout}
    }
</script>
<template>
    <v-footer class="text-center white--text" color="primary">
        <v-spacer></v-spacer>
        <div class="d-flex">
            <b id="footer-text">SPONSORED BY:</b>
            <a href="https://www.affirma.com/"><v-img :src="require('@/assets/img/affirmaLogo.svg')" class="ml-5 smPadding" width="90"></v-img></a>
        </div>
        <v-spacer></v-spacer>
    </v-footer>
</template>

<style scoped>
#footer-text {
    font-family: "AgencyFB", sans-serif !important;
    font-size: 1.5rem;
    letter-spacing: 1px;
}
.smPadding {
    margin-top: 5px;
}
</style>
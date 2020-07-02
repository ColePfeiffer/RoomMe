<template>
    <div>
        <Login id="login"/>
        <Register id="register"/>
    </div>
</template>

<script>
    import Login from "../Login";
    import Register from "../Register";
    export default {
        name: "LoginPage",
        components: {
            Login, Register
        }
    }
</script>

<style>

</style>
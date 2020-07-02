<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login v-card">
                        <h3>Login</h3>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons">email</i>
                                <input type="email" id="email" v-model="email">
                                <label class="white-text" for="email">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button v-on:click="login" class="btn primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'login',
        data: function() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            login: function(e) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        // eslint-disable-next-line no-unused-vars
                        user => {
                            alert(`You are logged in as ${this.email}`);
                            this.$router.go({ path: this.$router.path });
                        },
                        err => {
                            alert(err.message);
                        }
                    );
                e.preventDefault();
            }
        }
    };
</script>

<style>

</style>
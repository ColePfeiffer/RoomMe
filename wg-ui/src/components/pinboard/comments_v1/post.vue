<template>
    <div>
        <form @submit="addPost">
            <input type="text" v-model="title" name="title" placeholder="Urgent">
            <input type="text" v-model="content" name="content" placeholder="Hi, I...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
    export default {
        name: "post",
        components: {},
        data() {
            return {
                //postId: 1,
                postAuthor: 'Peter',
                postTitle: '',
                postContent: '',
                postTimeDate: '',
                comments: []
            }
        },

        methods: {
            // On hitting submit, calls this function and then emits the event
            addPost(e) {
                // Stops the form to submit to a file, and instead calls our method
                e.preventDefault();

                const today = new Date();
                const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date + ' ' + time;

                console.log(this.title, this.content, dateTime);

                const newPost = {
                    postTitle: this.title,
                    postContent: this.content,
                    postTimeDate: dateTime
                }
                this.$emit('add-newPost', newPost);

                // clears the input field
                this.title = "";
                this.content = "";
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="post">
        <v-card elevation="10" max-width="100%">
            <v-card-title>
                {{ post.postTitle }}
            </v-card-title>
            <v-card-text>
                {{post.postContent}}
            </v-card-text>
        </v-card>
        <comments
                :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
                :comments="comments"
                :current_user="current_user"
                @submit-comment="submitComment"
        ></comments>
    </div>
</template>

<script>
    export default {
        name: "message",

        data(){
            return{
                postId: 1,
                postAuthor: 'Peter',
                postTitle: 'Hi friends!',
                postContent: 'Who wants to go to the beach tomorrow?',
                postTimeDate: '06.06.2020, 13:00',
                comments: [
                    {
                        commentAuthor: 'Clara',
                        commentContent: 'Me!',
                        commentTimeDate: '06.06.2020, 13:30',
                    }
                ]
            }
        },
        
        methods: {
            // On hitting submit, calls this function and then emits the event
            addTodo(e) {
                // Stops the form to submit to a file, and instead calls our method
                e.preventDefault();

                const newTodo = {
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo);

                this.title = ""; // clears the input field
            }
    }
</script>

<style scoped>

</style>
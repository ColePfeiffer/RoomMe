<template>
    <div class="comment">
        <div class="avatar">
            <img :src="comment.avatar" alt="">
        </div>
        <div class="text">
            <a class="username" href="#">
                @[[ comment.user ]]
            </a>
            <span>[[ comment.text ]]</span>
        </div>
    </div>


</template>

<script>
    export default {
        name: "TodoItem",
        // We accept props of that name
        props: ["todo"],
        methods: {
            markComplete() {
                this.todo.completed = !this.todo.completed;
            }
        } /*,

    ALle daten aus dem Back-End laden, siehe Login Query
    created(){
        this.loadComents(); Methode schreibt Samy

        // oben dann:
        in data: comments: [], ... <--- hier kommen die kommentare aus dem back-end rein
    },
    mounted(),
     */
    }
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
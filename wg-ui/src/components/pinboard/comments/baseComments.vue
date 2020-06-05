<template>
    <div class="comments-outside">
        <div class="comments-header">
            <div class="comments-stats">
                <span><i class="fa fa-thumbs-up"></i> [[ likes ]]</span>
                <span><i class="fa fa-comment"></i> [[ comments.length ]]</span>
            </div>
            <div class="project-owner">
                <div class="avatar">
                    <img :src="creator.avatar" alt="">
                </div>
                <div class="username">
                    <a href="#">@[[ creator.user ]]</a>
                </div>
            </div>
        </div>
        <comments
                :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
                :comments="comments"
                :current_user="current_user"
                @submit-comment="submitComment"
        ></comments>
    </div>
</template>

<script>
    new Vue({
        el: '#app',
        delimiters: ['[[', ']]'],
        data: function() {
            return {
                likes: 12,
                //Info about the owner of the post
                creator: {
                    avatar: 'http://via.placeholder.com/100x100/36846e',
                    user: 'owner'
                },
                //Some info about the current user
                current_user: {
                    avatar: 'http://via.placeholder.com/100x100/a74848',
                    user: 'exampler'
                },
                //Comments that are under the post
                comments: [
                    {
                        id: "uuidv4",
                        user: 'example',
                        avatar: 'http://via.placeholder.com/100x100/a74848',
                        text: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                    },
                ]
            }
        },
        methods: {
            submitComment: function(reply) {
                this.comments.push({
                    id: "uuidv4",
                    user: this.current_user.user,
                    avatar: this.current_user.avatar,
                    text: reply
                });
            }
        }
    });
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete{
        text-decoration: line-through;
    }

    .del{
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
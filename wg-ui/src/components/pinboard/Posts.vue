<template>
    <div class="hello">
        Blabla
    </div>
</template>

<script>
    //import post from "./comments_v1/post.vue";
    import db from '../firebaseInit'

    export default {
        name: 'Posts',
        components: {

        },
        data(){
            return{
                postings: []
            }
        },
        created() {
            db.collection('postings').get().then(
                querySnapshot => {
                    querySnapshot.forEach(doc => {
                        console.log(doc.data())
                        const data = {
                            'author': doc.data(),
                            'title': doc.data().title,
                            'content': doc.data().content,
                            'timeDate': doc.data().timeDate
                        }
                        // Packt die erhaltenen Daten in unser Postings-Array
                    this.postings.push(data)
                        console.log(this.postings)
                    })

                }
            )
        },
        props: ["todos"]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

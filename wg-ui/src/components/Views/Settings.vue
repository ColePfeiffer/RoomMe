<template>
    <v-form v-model="userSettings">
        <v-container>
            <v-column>
                <v-col
                        cols="12"
                        md="4"
                >
                    <div class ="settings">
                        <v-img v-if="showUploadAction"
                            max-width= 200
                            max-height= 200
                            src="@/assets/placeholder.png"
                               @change="onFileSelected"></v-img>

                        <input type="file" @change="onFileSelected">
                        <button @click="onUpload">Upload</button></div>

                    <v-text-field
                            v-model="userSettings"
                            type="text"
                            :counter="10"
                            label="Name"
                            required
                    >{{ username }}</v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="4"
                >
                    <v-text-field
                            v-model="movedInDate"
                            :rules="movedInDateRules"
                            :counter="10"
                            label="Moved in on"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="4"
                >
                    <v-text-field
                            v-model="about"
                            :rules="aboutRules"
                            label="About me"
                            required
                    ></v-text-field>
                    <button type="button" class="btn btn-success" @click="saveUserInput">Save</button>
                </v-col>
            </v-column>

        </v-container>

    </v-form>

</template>

<script>

    export default {
        name: "Settings",
        components: {

        },
        // This stores our data
        data() {

            // will return objects:
            return {
                showUploadAction: true,
                username: "",
                bio: "",
                livingHereSince: "",
                selectedFile: null,
                placeholder: null,
            }
        },
        methods: {
            uploadImageClick() {
                this.showUploadAction = false;
            },
            onFileSelected(event) {
                // File that user selects:
                this.selectedFile = event.target.files[0]
                console.log(event)
            },
            saveUserInput(username) {
                this.username = username;
                console.log(this.username);

            },
            safeSettings() {

            }


        },
    }
</script>

<style scoped>

    .user {
        border: 2px solid white;
    }

</style>
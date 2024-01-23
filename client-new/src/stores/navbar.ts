import { defineStore } from "pinia"

export default defineStore('nav-store', {
    state: () => {
        return {
            toggleMoodIt: true,
            toggleConcept: false,
            toggleResume: false,
            activeElement: ""
        }
    },
    actions: {
        openConcept() {
            this.toggleConcept = true
            this.toggleResume = false
            this.toggleMoodIt = false
            this.activeElement = "concept"

        },
        openResume() {
            this.toggleConcept = false
            this.toggleResume = true
            this.toggleMoodIt = false
            this.activeElement = "resume"

        },
        openMoodIt() {
            this.toggleConcept = false
            this.toggleResume = false
            this.toggleMoodIt = true
            this.activeElement = "mood-it"

        }

    }
})
<template>
    <div class="cv-container">
        <img
            class="cv-pic"
            src="/imgs/CVpicPink).png"
        >
    </div>

    <div class="resume-paragraph">

        <h4> I'm Jose Piras, a 35-year-old developer immersed in the creative vibes in Berlin.
            <br>
            <br>
            My coding journey began with a
            bootcamp in 2022, after which I spent 1 year programming, reading and developing small projects.
        </h4>
        <h4>
            <br>
            <h3>Beyond the code</h3>I love drawing, playing music, and bring ideas to life with passionated people.
        </h4>
    </div>
</template>

<script setup lang="ts"></script>

<style>
.cv-container {
    overflow: hidden;
    display: flex;
    flex-direction: row;

}

.resume-paragraph {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

.cv-container h2 {
    align-self: flex-end;
    margin: 20px 20px 47px 30px;
}

.cv-pic {
    width: 35%;
    height: auto;
    border-radius: 50%;
    border: 2px black solid;
    position: relative;
}
</style>
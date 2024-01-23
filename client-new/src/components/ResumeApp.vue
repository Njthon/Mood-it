<template>
    <div class="cv-container">
        <img
            class="cv-pic"
            src="/imgs/CVpicPink).png"
        >
        <div class="pers-info">
            <span><a href="/Jose Piras ITA.pdf">Resume</a></span>
            <span><a href="https://www.linkedin.com/in/giuseppe-piras-dev/">Linkedin</a></span>
            <span>giuseppe3piras@gmail.com</span>
            <span>+49 176 3656 2710</span>
        </div>
    </div>

    <div class="resume-paragraph">

        <h4> I'm Jose Piras, a 35-year-old developer immersed in the creative vibes in Berlin.
        </h4>

        <br>
        <span>
            My coding journey began with a
            bootcamp in 2022, after which I spent 1 year programming, reading and developing small projects.
        </span>
        <br>
        <span> <b>Beyond the code</b> I love drawing, playing music, and bring ideas to life with passionated people.
            <span> I also love videogames,<b> my dog</b> and yoga.</span></span>

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
    margin-top: 25px;
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

.pers-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-self: center;
    margin-left: 25px;
}

.pers-info a {
    text-decoration: underline;
    color: black;
}

.pers-info span {
    font-size: smaller;
}
</style>
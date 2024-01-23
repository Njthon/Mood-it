<template>
    <transition name="list2">
        <div class="CV-container">
            <div class="paragraph-1">
                <div class="paragraph">
                    <div class="dots"></div>
                    <h2>Javascript</h2>
                </div>
                <div class="paragraph">
                    <div class="dots"></div>
                    <h2>CSS</h2>
                </div>
                <div class="paragraph">
                    <div class="dots"></div>
                    <h2>HTML</h2>
                </div>
                <div class="paragraph">
                    <div class="dots"></div>
                    <h2>Typescript</h2>
                </div>
            </div>

            <div class="paragraph-2">
                <div class="frontend">
                    <h4>Fronted</h4>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>React</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Vue</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Bootstrap</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Mui</h3>
                    </div>
                </div>
                <div class="backend">
                    <h4>Backend</h4>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Mongo</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Express</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Node</h3>
                    </div>
                    <div class="paragraph">
                        <div class="dots"></div>
                        <h3>Firebase</h3>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts"></script>

<style>
.CV-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.paragraph-1 {
    display: flex;
    flex-direction: column;
    gap: 17px;
    flex: 1;
}

.paragraph-2 {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.paragraph-1 h4,
.paragraph-2 h4 {
    text-decoration: underline;
}

.frontend {
    margin: 5px;
}

.backend {
    margin: 5px;
}

.dots {
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    border-radius: 50%;
    margin: 1px;
}

.paragraph {
    font-size: larger;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 7px;
    gap: 5px;
}

/* .list2-enter-active,
.list2-leave-active {
    transition: all 0.5s ease;
}

.list2-enter-from,
.list-leave-to {
    opacity: 0;
} */
</style>
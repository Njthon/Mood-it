<template>
    <h2>About Mood It</h2>
    <div class="about-mood-it-container">
        <span> Mood It is a junction between a <b>To-Do</b> and a <b>Mood-Tracker</b> app.</span>
        <span class="about-underlined">By emotionally ranking not only the amount of time needed to complete a task but also
            considering the
            stress
            and
            pleasure associated with it,
            you can better plan your day based on how you feel.
        </span>
        <span>
            The app invites users to observe and reflect on their emotions regarding specific tasks,
            fostering a <b>mindful</b> approach to every-day life.
        </span>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.about-mood-it-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    font-size: large;

}

.about-mood-it-container big {
    font-weight: 900;
}

.about-underlined {
    text-decoration: underline;
}

.about-underlined b {
    font-size: larger;
}
</style>
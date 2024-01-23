<template>
    <h2>Next Steps ...</h2>
    <div class="future-mood-it">
        <div class="future-paragraph">
            <div>
                <div class="future-dots"></div>
            </div>
            <text>Mood Graphic</text>
            <p>Visual representation of mood trends over time.</p>
        </div>
        <div class="future-paragraph">
            <div>
                <div class="future-dots"></div>
            </div>
            <text> Symbolic Task Difficulty</text>
            <p>Tasks will be represented by symbols indicating both difficulty and the expected pleasure upon completion.
            </p>
        </div>

        <div class="future-paragraph">
            <div>
                <div class="future-dots"></div>
            </div>
            <text>Suggested Tasks</text>
            <p>Receive task suggestions based on urgency, deadline, and your current mood, optimizing your productivity.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.future-mood-it {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;

}

.future-paragraph {
    display: flex;
    align-items: center;
    gap: 5px
}

.future-dots {
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    border-radius: 50%;
    margin: 1px;
}
</style>
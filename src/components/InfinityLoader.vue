<template>
<div class="spiner-container">
  <div class="loadingio-spinner-interwind-2rcyvyzhpsp"><div class="ldio-3igtohkgnvp">
    <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
    </div></div>
</div>
</template>

<script>
export default {
props: ['options'],
  data: () => ({
    observer: null,
  }),
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('load');
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style>
@keyframes ldio-3igtohkgnvp-r {
  0%, 100% { animation-timing-function: cubic-bezier(0.2 0 0.8 0.8) }
  50% { animation-timing-function: cubic-bezier(0.2 0.2 0.8 1) }
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
}
@keyframes ldio-3igtohkgnvp-s {
  0%, 100% { animation-timing-function: cubic-bezier(0.2 0 0.8 0.8) }
  50% { animation-timing-function: cubic-bezier(0.2 0.2 0.8 1) }
  0% { transform: translate(-30px,-30px) scale(0) }
  50% { transform: translate(-30px,-30px) scale(1) }
  100% { transform: translate(-30px,-30px) scale(0) }
}
.ldio-3igtohkgnvp > div { transform: translate(0px,-15px) }
.ldio-3igtohkgnvp > div > div {
  animation: ldio-3igtohkgnvp-r 1s linear infinite;
  transform-origin: 100px 100px;
}
.ldio-3igtohkgnvp > div > div > div {
  position: absolute;
  transform: translate(100px, 82px);
}
.ldio-3igtohkgnvp > div > div > div > div {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1d3f72;
  animation: ldio-3igtohkgnvp-s 1s linear infinite;
}
.ldio-3igtohkgnvp > div > div:last-child {
  animation-delay: -0.5s;
}
.ldio-3igtohkgnvp > div > div:last-child > div > div {
  animation-delay: -0.5s;
  background: #5699d2;
}
.loadingio-spinner-interwind-2rcyvyzhpsp {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  /* background: #f1f2f3; */
}
.ldio-3igtohkgnvp {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-3igtohkgnvp div { box-sizing: content-box; }

.spiner-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>

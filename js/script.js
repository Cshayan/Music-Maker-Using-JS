window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visuals = document.querySelector('.visuals');
    const colors = ["#ffbe76",  "#ff7979", "#badc58", "#686de0", "#e056fd", "#22a6b3"];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createColor(index);
        })
    });

    function createColor(index) {
        const balls = document.createElement('div');
        visuals.appendChild(balls);
        balls.style.backgroundColor = colors[index];
        balls.style.animation = 'jump 2s ease';
        balls.addEventListener('animationend', function () {
            visuals.removeChild(this);
        });
    }
});
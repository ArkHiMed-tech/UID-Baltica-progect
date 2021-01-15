var speed = document.querySelector('#calculate');
var output = document.querySelector('#calculate-output');
var distance;

speed.addEventListener('input', function (evt) {
    evt.preventDefault();
    var speedValue = speed.value;
    distance = (speedValue / 10) * (speedValue / 10);
    distance = distance.toFixed(2);
    output.value = distance;
});

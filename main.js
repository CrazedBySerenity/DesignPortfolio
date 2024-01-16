const textElements = document.getElementsByClassName("text__base");

function PlayAnimation (element, animationClass) {
    console.log(element);
    console.log(animationClass);

    element.classList.add(animationClass);

    // element
    // .animate(
    //   [{ transform: "translate(200px, -240px) rotate(90deg)" }, { transform: "translate(800px, -700px) rotate(90deg) scale(4)" }],
    //   {
    //     fill: "forwards",
    //     easing: "linear",
    //     duration: 300,
    //   },
    // );
}
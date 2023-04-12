const buttonRight = document.querySelectorAll(".button-right");
const buttonLeft = document.querySelectorAll(".button-left");
const sliders = document.querySelectorAll(
  ".container-sale-items__container-sliders"
);
let toAssign0 = 0;
let toAssign1 = 0;
let toAssign2 = 0;
let click = false;

RightArrowf();
LeftArrowf();

function RightArrowf() {
  for (let i = 0; i < buttonRight.length; i++) {
    buttonRight[i].addEventListener("click", () => {
      click = true;

      while (click) {
        switch (i) {
          case 0:
            if (toAssign0 < 1600) {
              toAssign0 += 300;
              sliders[i].style.right = `${toAssign0}px`;

              if (toAssign0 == 1800) {
                toAssign0 -= 200;
                sliders[i].style.right = `${toAssign0}px`;
              }
            }
            break;

          case 1:
            if (toAssign1 < 1600) {
              toAssign1 += 300;
              sliders[i].style.right = `${toAssign1}px`;

              if (toAssign1 == 1800) {
                toAssign1 -= 200;
                sliders[i].style.right = `${toAssign1}px`;
              }
            }
            break;

          case 2:
            if (toAssign2 < 1600) {
              toAssign2 += 300;
              sliders[i].style.right = `${toAssign2}px`;

              if (toAssign2 == 1800) {
                toAssign2 -= 200;
                sliders[i].style.right = `${toAssign2}px`;
              }
            }

            break;
        }
        click = false;
      }
    });
  }
}

function LeftArrowf() {
  for (let i = 0; i < buttonLeft.length; i++) {
    buttonLeft[i].addEventListener("click", () => {
      click = true;

      while (click) {
        switch (i) {
          case 0:
            if (toAssign0 > 0) {
              toAssign0 -= 300;
              sliders[i].style.right = `${toAssign0}px`;

              if (toAssign0 < 0) {
                toAssign0 = 0;
                sliders[i].style.right = `${toAssign0}px`;
              }
            }
            break;

          case 1:
            if (toAssign1 > 0) {
              toAssign1 -= 300;
              sliders[i].style.right = `${toAssign1}px`;

              if (toAssign1 < 0) {
                toAssign1 = 0;
                sliders[i].style.right = `${toAssign1}px`;
              }
            }
            break;

          case 2:
            if (toAssign2 > 0) {
              toAssign2 -= 300;
              sliders[i].style.right = `${toAssign2}px`;

              if (toAssign2 < 0) {
                toAssign2 = 0;
                sliders[i].style.right = `${toAssign2}px`;
              }
            }
            break;
        }
        click = false;
      }
    });
  }
}

export {RightArrowf, LeftArrowf}


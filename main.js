const main = document.getElementById("main");
var autoChange = true;
var mask = true;
var actions = [];
var timeInterval = null;
var duration = 2;

AutoSetSize(300);

function SettingsSet() {
  autoChange = document.getElementById("autoChange").checked;
  mask = document.getElementById("useMask").checked;
  let a = document.getElementById("select");
  duration = document.getElementById("duration").value;
  document.getElementById("settings").style.display = "none";
  document.getElementById("open").style.display = "inline";
  Start(a.selectedIndex);
}

function SetMask() {
  document.getElementById("mask").style.animation = "MaskAni " + duration +"s infinite";
}
function AutoSetSize(w) {
  const width = w;
  const height = window.innerHeight;
  const m = Math.min(width, height);
  const val = m / 550;
  main.style.transform = "translate(-50%, -50%) scale(" + val + ")";
}

function GetElement(style, id = "") {
  let item = document.createElement("div");
  item.className = "centerItems " + style;
  item.id = id;
  return item;
}

function FirstEye1() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(1);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let circle = GetElement("markOutline");
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    mainItem.appendChild(item1);
    item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}
function FirstEye2() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(2);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let circle = GetElement("markOutline");
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    mainItem.appendChild(item1);
    item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}
function FirstEye3() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let circle = GetElement("markOutline");
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    mainItem.appendChild(item1);
    item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}

function Mangekyo1() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline black noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let outline = GetElement("z5");
      let outlineItem = GetElement("markMangekyo1Item2");
      outline.appendChild(outlineItem);
      outline.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(outline);
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo1Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}

function Mangekyo2() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircleEmpty");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo2Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function Mangekyo3() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline black noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircleBig");
  var out = GetElement("markOutline1");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  eyeOutline.appendChild(out);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo3Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function Mangekyo4() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("redCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let circle2 = GetEyeElement2();
      circle2.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
      item.appendChild(circle2);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo4Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem z5");
    let item2 = GetElement("markMangekyo4Item2");
    let item3 = GetElement("markMangekyo4Item3");
    item3.appendChild(item2);
    mainItem.appendChild(item3);
    return mainItem;
  }
}
function Mangekyo5() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeBack = GetElement("backBlack");
  var eyeInner = GetInnerCircle(4);
  var eyeBlackCircle = GetElement("redCircle");
  var eyeBlackCircle1 = GetElement("blackCircleLittle noBoxShadow");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    item.appendChild(eyeBack);
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let circle2 = GetEyeElement2();
      circle2.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
      item.appendChild(circle2);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo5Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem z5");
    return mainItem;
  }
}
function Mangekyo6() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeBack = GetElement("backBlackCircle");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("blackCircleLittle noBoxShadow");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    item.appendChild(eyeBack);
    for (let i = 0; i < num; i++) {
      let circle2 = GetElement("markOutline2");
      let circle = GetEyeElement1();
      circle.appendChild(circle2);
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo6Item");
    let item2 = GetElement("markMangekyo6Item2");
    item2.appendChild(item1);
    mainItem.appendChild(item2);
    return mainItem;
  }
}
function Mangekyo7() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeBack = GetElement("markMangekyo7Circle");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("blackCircle ");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    item.appendChild(eyeBack);
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo7Item");

    let item2 = GetElement("markMangekyo7Item2");
    mainItem.appendChild(item1);
    mainItem.appendChild(item2);
    return mainItem;
  }
}
function Mangekyo8() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("blackCircle ");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    item.appendChild(GetElement("markMangekyo8Circle"));
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }

    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item2 = GetElement("markMangekyo8Item2");
    mainItem.appendChild(item2);
    let item3 = GetElement("markMangekyo8Item3");
    mainItem.appendChild(item3);
    let item4 = GetElement("markMangekyo8Item4");
    mainItem.appendChild(item4);
    let item5 = GetElement("markMangekyo8Item5");
    mainItem.appendChild(item5);
    let item6 = GetElement("markMangekyo8Item6");
    mainItem.appendChild(item6);
    let item7 = GetElement("markMangekyo8Item7");
    mainItem.appendChild(item7);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo8Item1");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function Mangekyo9() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("redCircleBlur ");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }

    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item2 = GetElement("markMangekyo9Item2");
    mainItem.appendChild(item2);
    let item3 = GetElement("markMangekyo9Item3");
    mainItem.appendChild(item3);
    let item4 = GetElement("markMangekyo9Item4");
    mainItem.appendChild(item4);
    let item5 = GetElement("markMangekyo9Item5");
    mainItem.appendChild(item5);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo9Item1");
    mainItem.appendChild(item1);
    return mainItem;
  }
}

function Mangekyo10() {}

function EternalSharingan1() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("blackCircle ");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    item.appendChild(GetElement("markMangekyo8Circle"));
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement3();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item2 = GetElement("markMangekyo8Item2");
    mainItem.appendChild(item2);
    let item3 = GetElement("markMangekyo8Item3");
    mainItem.appendChild(item3);
    let item4 = GetElement("markMangekyo8Item4");
    mainItem.appendChild(item4);
    let item5 = GetElement("markMangekyo8Item5");
    mainItem.appendChild(item5);
    let item6 = GetElement("markMangekyo8Item6");
    mainItem.appendChild(item6);
    let item7 = GetElement("markMangekyo8Item7");
    mainItem.appendChild(item7);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo8Item1");
    mainItem.appendChild(item1);
    return mainItem;
  }
  function GetEyeElement3() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markEternal1Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}

function EternalSharingan2() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline black noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("redCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let outline = GetElement("z5");
      let outlineItem = GetElement("markEternal2Item2");
      outline.appendChild(outlineItem);
      outline.style.transform = "rotateZ(" + rotDiff * i + "deg)";

      item.appendChild(outline);
      item.appendChild(circle);
    }
    for (let i = 0; i < num; i++) {
      let markPar = GetElement("markEternal2Item4");
      let mark = GetElement("markEternal2Item3");
      markPar.appendChild(mark);
      markPar.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(markPar);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markEternal2Item1");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function RinneGan1() {
  const sizes = [0, 75, 150, 225, 300, 375, 450, 525];
  main.innerHTML = "";
  var eyeOutline = GetElement("outlineRinnegan");
  var eyeInner = GetInnerCircle(7);
  eyeOutline.appendChild(eyeInner);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2(i);

      item.appendChild(circle);
    }
    let rotDiff = 360 / 3;
    // for(let j = 0; j < 3; j++){
    //   let a = GetEyeElement1(1);
    //   console.log(rotDiff * j);
    //   a.style.transform = "rotateZ(" + rotDiff * j + "deg)";
    //   item.appendChild(a)
    // }
    return item;
  }
  function GetEyeElement1(i) {
    let circle = GetElement("markOutline");
    circle.style.border = "3px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";

    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    item1.appendChild(item2);
    mainItem.appendChild(item1);
    mainItem.style.transform = "scale(0.3)";
    circle.appendChild(mainItem);
    return circle;
  }
  function GetEyeElement2(i) {
    let circle = GetElement("markOutline");
    circle.style.border = (i === 0 ? 5 : 3) + "px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    // mainItem.appendChild(item1);
    // item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}
function RinneGan2() {
  const sizes = [0, 75, 150, 225, 300, 375, 450, 525];
  main.innerHTML = "";
  var eyeOutline = GetElement("outlineRinnegan");
  var eyeInner = GetInnerCircle(7);
  eyeOutline.appendChild(eyeInner);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2(i);

      item.appendChild(circle);
    }
    let rotDiff = 360 / 3;
    for (let j = 0; j < 3; j++) {
      let a = GetEyeElement1(1);
      console.log(rotDiff * j);
      a.style.transform = "rotateZ(" + rotDiff * j + "deg)";
      item.appendChild(a);
    }
    for (let j = 0; j < 3; j++) {
      let a = GetEyeElement1(2);
      console.log(rotDiff * j);
      a.style.transform = "rotateZ(" + rotDiff * j + 180 + "deg)";
      item.appendChild(a);
    }
    return item;
  }
  function GetEyeElement1(i) {
    let circle = GetElement("markOutline");
    circle.style.border = "3px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";

    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    item1.appendChild(item2);
    mainItem.appendChild(item1);
    mainItem.style.transform = "scale(0.3)";
    circle.appendChild(mainItem);
    return circle;
  }
  function GetEyeElement2(i) {
    let circle = GetElement("markOutline");
    circle.style.border = (i === 0 ? 5 : 3) + "px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    // mainItem.appendChild(item1);
    // item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}
function RinneSharingan1() {
  const sizes = [0, 75, 150, 225, 300, 375, 450, 525];
  main.innerHTML = "";
  var eyeOutline = GetElement("outline noBoxShadow");
  var eyeInner = GetInnerCircle(7);
  eyeOutline.appendChild(eyeInner);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let item = GetElement("markOutlineParent");
    item.style.animation = "Rotate infinite " + duration + "s"
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement2(i);

      item.appendChild(circle);
    }
    let nm = 3;
    let rotDiff = 360 / nm;
    for (let j = 0; j < nm; j++) {
      let a = GetEyeElement1(1);
      console.log(rotDiff * j);
      a.style.transform = "rotateZ(" + rotDiff * j + "deg)";
      item.appendChild(a);
    }
    for (let j = 0; j < nm; j++) {
      let a = GetEyeElement1(2);
      console.log(rotDiff * j);
      a.style.transform = "rotateZ(" + (rotDiff * j + 180)  + "deg)";
      item.appendChild(a);
    }
    for (let j = 0; j < nm; j++) {
      let a = GetEyeElement1(3);
      console.log(rotDiff * j);
      a.style.transform = "rotateZ(" + rotDiff * j + "deg)";
      item.appendChild(a);
    }
    ///////////////////
    // for (let j = 0; j < nm; j++) {
    //   let a = GetEyeElement1(4);
    //   console.log(rotDiff * j);
    //   a.style.transform = "rotateZ(" + (rotDiff * j + 180) + "deg)";
    //   item.appendChild(a);
    // }
    // for (let j = 0; j < nm; j++) {
    //   let a = GetEyeElement1(5);
    //   console.log(rotDiff * j);
    //   a.style.transform = "rotateZ(" + rotDiff * j + "deg)";
    //   item.appendChild(a);
    // }
    // for (let j = 0; j < nm; j++) {
    //   let a = GetEyeElement1(6);
    //   console.log(rotDiff * j);
    //   a.style.transform = "rotateZ(" + (rotDiff * j + 180) + "deg)";
    //   item.appendChild(a);
    // }
    return item;
  }
  function GetEyeElement1(i) {
    let circle = GetElement("markOutline");
    circle.style.border = "3px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";

    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    item1.appendChild(item2);
    mainItem.appendChild(item1);
    mainItem.style.transform = "scale(0.3)";
    circle.appendChild(mainItem);
    return circle;
  }
  function GetEyeElement2(i) {
    let circle = GetElement("markOutline");
    circle.style.border = (i === 0 ? 5 : 3) + "px solid black";
    circle.style.width = sizes[i] + "px";
    circle.style.height = sizes[i] + "px";
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    // mainItem.appendChild(item1);
    // item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}

actions.push(FirstEye1);
actions.push(FirstEye2);
actions.push(FirstEye3);
actions.push(Mangekyo1);
actions.push(Mangekyo2);
actions.push(Mangekyo3);
actions.push(Mangekyo4);
actions.push(Mangekyo5);
actions.push(Mangekyo6);
actions.push(Mangekyo7);
actions.push(Mangekyo8);
actions.push(Mangekyo9);
actions.push(EternalSharingan1);
actions.push(EternalSharingan2);
actions.push(RinneGan1);
actions.push(RinneGan2);
actions.push(RinneSharingan1);



function Start(n) {
  if(timeInterval != null){
    clearInterval(timeInterval);
  }
  // document.getElementById("mask").style.animation = "";
  num = 0;
  actions[num % actions.length]();
  num++;
  if (mask) {
    SetMask();
  }
  if (autoChange) {
    timeInterval = setInterval(() => {
      actions[num % actions.length]();
      if (mask) {
        SetMask();
      }
      num++;
      // alert(num%actions.length)
      let a = num%actions.length;
      if(a == 0 || a == actions.length-2 || a == actions.length -1){
        AutoSetSize(800)
      }else{
        AutoSetSize(300)
      }
    }, duration * 1000);
  } else {
    actions[n]()
  }
}

Start(0);


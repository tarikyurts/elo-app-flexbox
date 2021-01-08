function App() {
  const ID = {
    home: document.getElementById("home"),
    stats: document.getElementById("stats"),
    last: document.getElementById("last"),
    about: document.getElementById("about"),
    left: document.getElementById("left"),
    right: document.getElementById("right"),
  };

  const temp = {
    nickname: "-L8",
    elo: "2099",
    kd: "1.24",
    winrate: "51%",
    lastLeft: ["11-16", "16-14", "16-3", "16-5", "16-19"],
    lastRight: ["L", "W", "W", "w", "W"],
  };

  // const menu =  {
  //   homeButton: ID.home.addEventListener("click", () => {
  //     ID.left.innerHTML = temp.nickname;
  //     ID.right.innerHTML = temp.elo;
  //     left.style = 'font-size:50px';
  //     right.style = 'font-size:50px';
  //   }),
  //   statsButton: ID.stats.addEventListener("click", () => {
  //     ID.left.innerHTML = temp.kd;
  //     ID.right.innerHTML = temp.winrate;
  //     left.style = 'font-size:50px';
  //     right.style = 'font-size:50px';
  //   }),
  //   lastButton: ID.last.addEventListener("click", () => {
  //     const lastLeftList = temp.lastLeft.map((item) => `<li style="font-size:25px;font-weight:bolder;font-family: 'Rubik', sans-serif;margin:20px">${item}</li>`);
  //     const lastRightList = temp.lastRight.map((item) => `<li style="font-size:35px;font-weight:bolder;font-family: 'Rubik', sans-serif;margin:20px;">${item}</li>`);
  //     ID.left.innerHTML = lastLeftList;
  //     ID.right.innerHTML = lastRightList;
  //     right.style = "font-size:0"
  //     left.style = "font-size:0"

  //   }),
  //   aboutButton: ID.about.addEventListener("click", () => {
  //       left.innerHTML = 'Tarik Yurtseven';
  //       right.innerHTML = 'tarikyurts@hotmail.com';
  //       left.style = 'font-size:25px';
  //       right.style = 'font-size:25px';
  //   }),
  // };

  function menu() {
    ID.home.addEventListener("click", () => {
      ID.left.innerHTML = temp.nickname;
      ID.right.innerHTML = temp.elo;
      left.style = "font-size:50px";
      right.style = "font-size:50px";
    });

    ID.stats.addEventListener("click", () => {
      ID.left.innerHTML = temp.kd;
      ID.right.innerHTML = temp.winrate;
      left.style = "font-size:50px";
      right.style = "font-size:50px";
    });

    ID.last.addEventListener("click", () => {
      const lastLeftList = temp.lastLeft.map(
        (item) =>
          `<li style="font-size:25px;font-weight:bolder;font-family: 'Rubik', sans-serif;margin:20px">${item}</li>`
      );
      const lastRightList = temp.lastRight.map(
        (item) =>
          `<li style="font-size:35px;font-weight:bolder;font-family: 'Rubik', sans-serif;margin:20px;">${item}</li>`
      );
      ID.left.innerHTML = lastLeftList;
      ID.right.innerHTML = lastRightList;
      right.style = "font-size:0";
      left.style = "font-size:0";
    });

    ID.about.addEventListener("click", () => {
      left.innerHTML = "Tarik Yurtseven";
      right.innerHTML = "tarikyurts@hotmail.com";
      left.style = "font-size:25px";
      right.style = "font-size:25px";
    });
  }
  menu();
}
App();

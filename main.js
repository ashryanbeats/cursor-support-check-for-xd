let panel;

function create() {
  const HTML = `<style id="style">
            .cursorDiv {
                height: 25px;
                width: 100%;
                margin-bottom: 10px;
                border: 1px solid black;
                display: block;
            }

        </style>
        <form method="dialog">
            <div id="container">
                <h1>Cursors</h1>
            </div>
        </form>
        `;

  panel = document.createElement("div");
  panel.innerHTML = HTML;
  cursors();

  return panel;
}

function show(event) {
  if (!panel) event.node.appendChild(create());
}

function update() {}

function cursors() {
  const cursorList = [
    "context-menu",
    "help",
    "pointer",
    "progress",
    "wait",
    "cell",
    "crosshair",
    "text",
    "vertical-text",
    "alias",
    "copy",
    "move",
    "no-drop",
    "not-allowed",
    "grab",
    "grabbing",
    "zoom-in",
    "zoom-out"
  ];

  const cssClasses = cursorList
    .map(cursor => {
      const cssClass = `
        .${cursor} {
            cursor: ${cursor}
        }
      `;

      return cssClass;
    })
    .join("\n");

  const cursorDivs = cursorList
    .map(cursor => {
      const div = `
      <div class="cursorDiv ${cursor}">${cursor}</div>
    `;

      return div;
    })
    .join("\n");

  panel.querySelector("#style").textContent += cssClasses;
  panel.querySelector("#container").innerHTML += cursorDivs;
}

module.exports = {
  panels: {
    cursors: {
      show,
      update
    }
  }
};

function putImage() {

    const query = document.querySelector("input[type=search]").value
    console.log(query)
    fetchApi(query)

    .then(response => response.json())
    .then(body => {

        // DOM MANIPULATION
        console.log(body)

        const row = document.getElementById("album-row")
        row.innerHTML = ""
        for (let i = 0; i < body.photos.length; i++) {
            const obj = body.photos[i]

            const col = document.createElement("div")
            col.className = "col-4"

            col.innerHTML = `
            <div class="card mb-4 shadow-sm" id="card">
                <img src="${obj.src.medium}" class="img-resized">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm hide-me btn-outline-secondary"
                        onclick="hide()"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${obj.id}</small>
                  </div>
                </div>
              </div>
            `
            row.appendChild(col)
        }
    })
    .catch(error => console.error(error))
}


const fetchApi = (type) => {
    return fetch("https://api.pexels.com/v1/search?query=" + type.toLowerCase(), {
        "method": "GET",
        "headers": {
            "Authorization": "563492ad6f91700001000001fe7f1bfa604c4313af35b3f3b8ea9b23"
        }
    })
}


const hide = () => {
    let row = document.querySelector('#album-row');
    let card = document.querySelector('#card');
    row.removeChild(card)
    console.log(2);
};






window.onload = () => {
    fetchApi()
}